import { useState } from "react";

import "./index.css";

import InputShortener from "./components/InputShortener";
import LinkResult from "./components/LinkResult";

function App() {
    const [url, setUrl] = useState("");

    return (
        <div className="h-screen w-screen flex flex-col justify-center items-center">
            <h1 className="text-3xl font-bold mb-5">Short Link</h1>
            <div className="w-1/2">
                <LinkResult url={url} />
                <InputShortener setUrl={setUrl} />
            </div>
        </div>
    );
}

export default App;
