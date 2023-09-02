export const CopyClipboard = ({ text, icon = <></>, setCopied, isCopied }) => {
    const handleCopyToClipboard = () => {
        const textArea = document.createElement("textarea");
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.style.position = "absolute";
        textArea.style.left = "-9999px";
        textArea.select();
        document.execCommand("copy");
        document.body.removeChild(textArea);
    };

    return (
        <button
            className={`absolute -right-14 top-8 -translate-y-1/2 border border-black p-4 rounded-md ${
                isCopied ? "bg-green-300" : ""
            }`}
            onClick={() => {
                handleCopyToClipboard();
                setCopied(true);
            }}
        >
            {icon}
        </button>
    );
};
