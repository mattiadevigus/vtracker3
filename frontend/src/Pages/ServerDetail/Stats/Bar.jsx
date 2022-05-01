import { useEffect } from "react";
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);

const Stats = () => {
    useEffect(() => {
        const ctx = document.getElementById("bar").getContext("2d");
        new Chart(ctx, {
            type: "bar",
            data: {
                labels: ["Driver 2", "Driver 3", "Driver 4", "Driver 5", "Driver 6", "Driver 7"],
                datasets: [{
                    data: [0.34, 1.345, 1.765, 2.237, 3.239, 9.219],
                    backgroundColor: [
                        "#7a1212",
                    ],
                    borderColor: "#7a1212",
                    borderWidth: 0
                }]
            },
            options: {
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
                            display: false
                        }
                    }
                }
            }
        });
    }, []);

    return (
        <canvas id="bar"></canvas>
    );
};

export default Stats;