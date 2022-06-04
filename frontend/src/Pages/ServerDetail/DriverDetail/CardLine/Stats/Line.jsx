import { useEffect } from "react";
import { Chart, registerables } from "chart.js";

import './Line.css';

Chart.register(...registerables);

const Stats = () => {
    useEffect(() => {
        // fix reload
        document.getElementById("chartContainer").innerHTML = "&nbsp;";
        document.getElementById("chartContainer").innerHTML = "<canvas id='line'></canvas>";

        const ctx = document.getElementById("line").getContext("2d");
        new Chart(ctx, {
            type: "line",
            data: {
                labels: ["S1", "S2", "S3"],
                datasets: [{
                    label: ["Time"],
                    data: [24, 45, 50],
                    fill: false,
                    borderColor: "#9e1616",
                    tension: 0.1
                },
                {
                    label: ["Time"],
                    data: [23, 43, 45],
                    fill: false,
                    borderColor: "purple",
                    tension: 0.1
                },

                ]
            },
            options: {
                maintainAspectRatio: false,
                plugins: {
                    legend: false
                },
                scales: {
                    x: {
                        grid: {
                            display: false,
                            drawBorder: false
                        }
                    },
                    y: {
                        grid: {
                            display: false,
                            drawBorder: false
                        },
                        ticks: {
                            display: true
                        }
                    }
                }
            }
        });
    }, []);

    return (
        <div id="chartContainer">
            <canvas id="line"></canvas>
        </div>
    );
};

export default Stats;