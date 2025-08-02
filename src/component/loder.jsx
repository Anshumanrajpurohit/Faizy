import React from "react";
import '../style/loder.css';

function Loader() {
    return (
        <div className="loader-wrapper">
            <h1 className="loader-text">
                {
                    "Fazu Circut Walal".split("").map((char, index) => (
                        <span key={index} style={{ animationDelay: `${index * 0.1}s` }}>
                            {char === " " ? "\u00A0" : char}
                        </span>
                    ))
                }
            </h1>
        </div>
    );
}

export default Loader;
