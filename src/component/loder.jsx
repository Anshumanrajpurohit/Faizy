import React from "react";
import '../style/loder.css';

function Loader() {
    return (
        <div className="loader-wrapper">
            <div className="loader-left">
                <h1 className="loader-text">
                    {
                        "Fazu Circuit Walal".split("").map((char, index) => (
                            <span key={index} style={{ animationDelay: `${index * 0.1}s` }}>
                                {char === " " ? "\u00A0" : char}
                            </span>
                        ))
                    }
                </h1>
                <p className="loader-description">
                    Powering your tech, wherever you are! 🚚✨ Fazu Circuit Walal delivers high-quality PC parts and expert circuit solutions — trusted by customers all over India 🇮🇳. Fast, reliable, and made for performance. Get ready!
                </p>
            </div>
        </div>
    );
}

export default Loader;
