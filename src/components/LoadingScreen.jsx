import { useEffect, useState } from "react";

const LoadingScreen = ({ onComplete }) => {
    const [text, setText] = useState("");
    const baseText = "<Fetching Subway cookie crumbs";
    const closing = " />";

    useEffect(() => {
        let index = 0;
        const fullBase = baseText;
        let cycles = 0;
        let typingDone = false;
        let timeoutId;

        const typeStep = () => {
            if (!typingDone) {
                setText(fullBase.substring(0, index));
                index++;
                if (index > fullBase.length) {
                    typingDone = true;
                    index = 0;
                    setText(fullBase);
                    timeoutId = setTimeout(typeStep, 500);
                } else {
                    timeoutId = setTimeout(typeStep, 100);
                }
            } else {
                const nbsp = "\u00A0";
                const dotStages = [`.${nbsp}${nbsp}`, `..${nbsp}`, `...`];
                setText(fullBase + dotStages[index % dotStages.length] + closing);
                index++;
                if (index % dotStages.length === 0) {
                    cycles++;
                }
                if (cycles >= 3) {
                    setText(fullBase + dotStages[2] + closing);
                    setTimeout(() => {
                        onComplete();
                    }, 800);
                } else {
                    timeoutId = setTimeout(typeStep, 500);
                }
            }
        };

        typeStep();

        return () => clearTimeout(timeoutId);
    }, [onComplete]);

    return (
        <div className="fixed inset-0 z-50 bg-black text-gray-100 flex flex-col items-center justify-center">
            <div className="mb-4 text-2xl font-mono font-bold">
                {text}
                <span className="animate-blink ml-1"> </span>
            </div>
            <div className="w-[200px] h-[2px] bg-gray-800 rounded relative overflow-hidden">
                <div className="w-[40%] h-[100%] bg-white  shadow-[0_0_15px_#3b82f6] animate-loading-bar"></div>
            </div>
        </div>
    );
};

export default LoadingScreen;
