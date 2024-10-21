import { registerables } from 'chart.js';
import { Chart } from 'chart.js';

import { Bar } from 'react-chartjs-2';

Chart.register(...registerables);

const defaultData = {
  labels: ['January', 'February', 'March', 'April', 'May'],
  datasets: [
    {
      label: 'Series A',
      data: [10, 20, 30, 40, 50],
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 1,
    },
  ],
};

const defaultOptions = {
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};

function BarChart({ data = defaultData, options = defaultOptions }) {
  
  return (
    <div>
      <Bar data={data} options={options} />
    </div>
  );
}

export default BarChart;
