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
    Welcome to <strong>Fazu Circuit Walal</strong> — your one-stop destination for premium PC components, expert circuit repairs, and custom tech solutions! 💻🛠<br /><br />
    We proudly serve customers across <strong>all states of India 🇮🇳</strong>, offering doorstep delivery of genuine hardware — from high-speed SSDs and RAM to powerful GPUs, reliable PSUs, and more. 📦✨<br /><br />
    Whether you're upgrading your system, fixing short circuits, or building your dream setup, we’ve got your back — with <strong>trusted service</strong>, <strong>affordable pricing</strong>, and <strong>lightning-fast support</strong>!⚡<br /><br />
    Sit tight — we’re loading the tech experience you deserve.
</p>

            </div>
        </div>
    );
}

export default Loader;
