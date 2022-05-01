import { useEffect } from "react";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

const ChartDoughnut = () => {
    useEffect(() => {
        const ctx = document.getElementById("doughnut").getContext("2d");
        new Chart(ctx, {
            type: "doughnut",
            data: {
                labels: ["Free Pratice", "Qualify", "Race"],
                datasets: [{
                    data: [12, 19, 3],
                    backgroundColor: [
                        "#fff",
                        "#7a1212",
                        "#757575",
                    ],
                    borderColor: "#15151e",
                    borderWidth: 1
                }]
            },
            options: {
                plugins: {
                    legend: {
                        position: "bottom",
                        labels: {
                            padding: 30,
                        }
                    }
                }

            }
        });
    }, []);

    return (
        <div>
            <canvas id="doughnut"></canvas>
        </div>
    );
};

export default ChartDoughnut;