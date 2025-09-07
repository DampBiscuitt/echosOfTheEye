import React from "react";

export default function MarqueeBackground({
    top = "top-1/3", // Tailwind position from the top
    speed = 15,      // seconds per loop
}) {
    return (
        <div className="absolute inset-0 w-full h-full overflow-hidden m-0 p-0">
            <style>{`
                @keyframes _marquee {
                    0% { transform: translateX(0%); }
                    100% { transform: translateX(-100%); }
                }
                .marquee-line {
                    display: inline-block;
                    white-space: nowrap;
                    animation: _marquee ${speed}s linear infinite;
                    will-change: transform;
                }
                .marquee-gap { margin-left: 4rem; }
            `}</style>
            <div
                aria-hidden
                className={`pointer-events-none absolute ${top} z-0 w-full overflow-hidden left-0 right-0`}
            >
                <div className="flex">
                    {[0, 1].map((i) => (
                        <h1
                            key={i}
                            className={`marquee-line${i === 1 ? " marquee-gap" : ""} font-light text-[14vw] md:text-[10vw] leading-[1.1] py-4`}
                        >
                            <b>HELLO,</b> HOW ARE WE <b><i>TODAY? </i></b>{" "}
                            <span style={{ WebkitTextStroke: "1.2px #000", color: "transparent", fontWeight: 500 }}>
                                MAKE
                            </span>{" "}
                            YOURSELF{" "}
                            <span style={{ WebkitTextStroke: "1.2px #000", color: "transparent", fontWeight: 500, fontStyle: "italic" }}>
                                AT HOME :)
                            </span>
                        </h1>
                    ))}
                </div>
            </div>
        </div>
    );
}
