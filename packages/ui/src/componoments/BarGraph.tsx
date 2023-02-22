import { Bar } from 'react-chartjs-2';

const GraphBar = (props: { data: Array<number>; background: { hover: string; normal: string } }) => {
  return (
    <Bar
      style={{ padding: '0 10px 0 10px' }}
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
            backgroundColor: props.background.normal,
            hoverBackgroundColor: props.background.hover,
          },
        ],
      }}
    ></Bar>
  );
};

export default GraphBar;
