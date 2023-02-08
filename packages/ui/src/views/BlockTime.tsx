import { Grid } from '@mui/material';
import NumberCardTitle from '../componoments/NumberCardTitle';
import NumberCard from '../componoments/NumberCard';
import GraphBar from '../componoments/BarGraph';

const BlockTime = (props: { blockTime: Array<number> }) => {
  return (
    <Grid xs={2}>
      <NumberCard style={{ borderLeft: '1px solid rgba(255, 255, 255, 0.2)' }}>
        <NumberCardTitle>block time</NumberCardTitle>
        <GraphBar
          data={props?.blockTime}
          background={{ hover: 'rgba(15, 240, 130, 0.6)', normal: 'rgba(15, 240, 130, 0.4)' }}
        ></GraphBar>
      </NumberCard>
    </Grid>
  );
};

export default BlockTime;
