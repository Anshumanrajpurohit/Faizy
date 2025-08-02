import React, { useEffect, useRef } from "react";

function KiteTailCanvas() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resizeCanvas();
        window.addEventListener("resize", resizeCanvas);

        let mouseX = window.innerWidth / 2;
        let mouseY = window.innerHeight / 2;

        const handleMouseMove = (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        };

        document.addEventListener("mousemove", handleMouseMove);

        // ⚡ Shock bolt generator
        const drawShock = (x, y) => {
            for (let i = 0; i < 3; i++) {
                let length = Math.random() * 20 + 10;
                let angle = Math.random() * Math.PI * 2;

                ctx.beginPath();
                ctx.moveTo(x, y);

                for (let j = 0; j < 4; j++) {
                    const dx = Math.cos(angle + Math.random() * 0.5) * length;
                    const dy = Math.sin(angle + Math.random() * 0.5) * length;
                    x += dx;
                    y += dy;
                    ctx.lineTo(x, y);
                }

                ctx.strokeStyle = `rgba(0, 255, 255, ${Math.random() * 0.7 + 0.3})`;
                ctx.lineWidth = 1.5;
                ctx.stroke();
            }
        };

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            drawShock(mouseX, mouseY); // only electric sparks
            requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener("resize", resizeCanvas);
            document.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                pointerEvents: "none",
                zIndex: 9999,
            }}
        />
    );
}

export default KiteTailCanvas;
