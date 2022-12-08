import { Grid } from '@mui/material';
import NumberCardTitle from '../componoments/NumberCardTitle';
import NumberCard from '../componoments/NumberCard';
import GraphBar from '../componoments/BarGraph';

const GasSpending = (props: { gasSpending: number[] }) => {
  return (
    <Grid xs={2}>
      <NumberCard style={{ borderLeft: '1px solid rgba(255, 255, 255, 0.2)' }}>
        <NumberCardTitle>gas spending</NumberCardTitle>
        <GraphBar data={props.gasSpending}></GraphBar>
      </NumberCard>
    </Grid>
  );
};

export default GasSpending;
