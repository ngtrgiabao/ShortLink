import axios from "axios";
import { useEffect, useState } from "react";

import { CopyClipboard } from "../utils/CopyClipboard";
import COPY_ICON from "../assets/copy.svg";
import CHECK_ICON from "../assets/check.svg";

const LinkResult = ({ url }) => {
    const [shortLink, setShortLink] = useState("");
    const [copied, setCopied] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const fetchData = async () => {
        try {
            setLoading(true);
            const res = await axios(
                `https://api.shrtco.de/v2/shorten?url=${url}`
            );
            setShortLink(res.data.result.full_short_link);
        } catch (error) {
            console.error("Failed to short link", error);
            setError(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            setCopied(false);
        }, 1000);

        return () => clearTimeout(timer);
    }, [copied]);

    useEffect(() => {
        if (url.length > 0) {
            fetchData();
        }
    }, [url]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setError(false);
        }, [2000]);

        return () => clearTimeout(timer);
    }, [error]);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p className="my-3 text-red-600">Something went wrong :D</p>;
    }

    return (
        <div className="relative flex flex-col items-center">
            {shortLink && (
                <>
                    <input
                        type="text"
                        placeholder="Link after shorted"
                        className="border-2 border-black text-lg p-2 w-full mt-2 cursor-not-allowed"
                        value={shortLink}
                        disabled
                    />
                    <CopyClipboard
                        setCopied={setCopied}
                        text={shortLink}
                        isCopied={copied}
                        icon={
                            copied ? (
                                <img src={CHECK_ICON} alt="" />
                            ) : (
                                <img src={COPY_ICON} alt="" />
                            )
                        }
                    />
                </>
            )}
        </div>
    );
};

export default LinkResult;
