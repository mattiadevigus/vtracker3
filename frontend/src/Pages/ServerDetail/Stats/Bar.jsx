import { Component } from 'react';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

class Stats extends Component {

    componentDidMount = () => {
        const ctx = document.getElementById("bar").getContext("2d");
        new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['Driver 1', 'Driver 2', 'Driver 3', 'Driver 4', 'Driver 5', 'Driver 6'],
                datasets: [{
                    data: [1, 5, 9, 17, 19, 19],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: "#7a1212",
                    borderWidth: 1
                }]
            },
            options: {
                plugins: {
                    legend: false
                },
                scales: {
                    x: {
                        grid: {
                            display: false
                        }
                    },
                    y: {
                        grid: {
                            display: false
                        }
                    }
                }
            }
        });
    }

    render = () => {
        return (
            <canvas id="bar"></canvas>
        )
    }
}

export default Stats;