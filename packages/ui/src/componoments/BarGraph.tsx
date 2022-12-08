import { Bar } from 'react-chartjs-2';

const GraphBar = (props: { data: Array<number> }) => {
  return (
    <Bar
      options={{
        plugins: { legend: { display: false } },
        scales: {
          x: { display: false },
          y: { display: false },
        },
      }}
      data={{
        labels: Array.from(Array(40).keys()),
        datasets: [
          {
            data: props.data,
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
          },
        ],
      }}
    ></Bar>
  );
};

export default GraphBar;
