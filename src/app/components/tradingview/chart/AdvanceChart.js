"use client";

import { useEffect, useRef, memo } from "react";

function AdvanceChart({ symbol = "BBCA" }) {
    const container = useRef(null);

    useEffect(() => {
        if (!container.current) return;

        container.current.innerHTML = ""; 

        const script = document.createElement("script");
        script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
        script.type = "text/javascript";
        script.async = true;
        script.textContent = JSON.stringify({
            autosize: true,
            symbol: symbol.toUpperCase(),
            interval: "D",
            timezone: "Etc/UTC",
            theme: "light",
            style: "1",
            locale: "en",
            allow_symbol_change: true,
            calendar: false,
            support_host: "https://www.tradingview.com",
        });

        container.current.appendChild(script);
    }, [symbol]);

    return (
        <div className="tradingview-widget-container" ref={container} style={{ height: "100%", width: "100%" }}>
            <div className="tradingview-widget-container__widget" style={{ height: "calc(100% - 32px)", width: "100%" }}></div>
        </div>
    );
}

export default memo(AdvanceChart);
