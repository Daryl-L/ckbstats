import { Grid } from '@mui/material';
import NumberCardTitle from '../componoments/NumberCardTitle';
import NumberCard from '../componoments/NumberCard';
import GraphBar from '../componoments/BarGraph';

const BlockPropagation = (props: { blockPropagation: number[] }) => {
  return (
    <Grid xs={2}>
      <NumberCard style={{ borderLeft: '1px solid rgba(255, 255, 255, 0.2)' }}>
        <NumberCardTitle>block propagation</NumberCardTitle>
        <GraphBar
          background={{ normal: 'rgba(248, 68, 71, 0.4)', hover: 'rgba(248, 68, 71, 0.6)' }}
          data={props.blockPropagation}
        ></GraphBar>
      </NumberCard>
    </Grid>
  );
};

export default BlockPropagation;
