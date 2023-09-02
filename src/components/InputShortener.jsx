import { useState } from "react";

const InputShortener = ({ setUrl }) => {
    const [value, setValue] = useState("");

    const handleClick = () => {
        setUrl(value);
    };

    return (
        <form
            className="w-full flex flex-col"
            onSubmit={(e) => e.preventDefault()}
        >
            <input
                type="text"
                placeholder="Enter your link here"
                className="border-2 border-black text-lg p-2 mt-2"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                required
            />
            <button
                className="inline-flex items-center justify-center px-8 py-4 font-sans tracking-wide text-white bg-blue-500 hover:bg-blue-400 rounded-lg h-[60px] mt-2 font-bold"
                onClick={() => handleClick()}
            >
                Short now!
            </button>
        </form>
    );
};

export default InputShortener;
