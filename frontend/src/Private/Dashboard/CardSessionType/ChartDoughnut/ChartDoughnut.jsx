import { Component } from 'react';
import { Chart, registerables } from 'chart.js';

import { Typography } from '@mui/material';

Chart.register(...registerables);

class ChartDoughnut extends Component {

    componentDidMount = () => {
        const ctx = document.getElementById("doughnut").getContext("2d");
        new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ['Free Pratice', 'Qualify', 'Race'],
                datasets: [{
                    data: [12, 19, 3],
                    backgroundColor: [
                        '#fff',
                        '#7a1212',
                        '#757575',
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
    }

    render = () => {
        return (
            <div>
                <canvas id="doughnut"></canvas>
            </div>
        )
    }
}

export default ChartDoughnut;