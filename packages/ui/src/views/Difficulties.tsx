import { Grid } from '@mui/material';
import NumberCardTitle from '../componoments/NumberCardTitle';
import NumberCard from '../componoments/NumberCard';
import GraphBar from '../componoments/BarGraph';
import { ReactComponent as DifficultiesIcon } from '../icons/difficulties.svg';

const Difficulties = (props: { difficulties: number[] }) => {
  return (
    <Grid xs={2}>
      <NumberCard style={{ borderLeft: '1px solid rgba(255, 255, 255, 0.2)' }}>
        <NumberCardTitle>
          <DifficultiesIcon style={{ verticalAlign: 'middle', color: 'red' }}></DifficultiesIcon> difficultis
        </NumberCardTitle>
        <GraphBar
          background={{ normal: 'rgba(248, 68, 71, 0.4)', hover: 'rgba(248, 68, 71, 0.6)' }}
          data={props.difficulties}
        ></GraphBar>
      </NumberCard>
    </Grid>
  );
};

export default Difficulties;
