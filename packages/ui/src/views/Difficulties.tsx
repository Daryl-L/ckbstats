import { Grid } from '@mui/material';
import NumberCardTitle from '../componoments/NumberCardTitle';
import NumberCard from '../componoments/NumberCard';
import GraphBar from '../componoments/BarGraph';

const Difficulties = (props: { difficulties: number[] }) => {
  return (
    <Grid xs={2}>
      <NumberCard style={{ borderLeft: '1px solid rgba(255, 255, 255, 0.2)' }}>
        <NumberCardTitle>difficultis</NumberCardTitle>
        <GraphBar data={props.difficulties}></GraphBar>
      </NumberCard>
    </Grid>
  );
};

export default Difficulties;
