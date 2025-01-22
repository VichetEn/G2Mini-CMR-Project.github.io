// chart.js
const ctx = document.getElementById('customerChart').getContext('2d');
const customerChart = new Chart(ctx, {
    type: 'bar', // You can change this to 'line', 'pie', etc.
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
            label: 'Customers',
            data: [12, 19, 3, 5, 2, 3, 7], // Sample data
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
        }]
    },
    options: {
        responsive: true, // Enable responsiveness
        maintainAspectRatio: false, // Allow the chart to adjust its aspect ratio
        scales: {
            y: {
                beginAtZero: true
            }
        },
        plugins: {
            legend: {
                display: true,
                position: 'top', // Position of the legend
            },
            tooltip: {
                enabled: true, // Enable tooltips
            }
        },
        layout: {
            padding: {
                top: 10,
                right: 10,
                bottom: 10,
                left: 10
            }
        }
    }
});
