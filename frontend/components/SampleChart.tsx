"use client";

import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const data = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
  datasets: [
    {
      label: 'Skill Growth',
      data: [12, 19, 3, 5, 2],
      backgroundColor: 'rgba(59, 130, 246, 0.5)',
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: { position: 'top' },
    title: { display: true, text: 'Sample Bar Chart' },
  },
};

export default function SampleChart() {
  return <Bar data={data} options={options} />;
}
