import { Grid } from '@mui/material';
import NumberCardTitle from '../componoments/NumberCardTitle';
import NumberCardContent from '../componoments/NumberCardContent';
import NumberCard from '../componoments/NumberCard';

const BestBlock = (props: { blockNumber: number }) => {
  return (
    <Grid xs={2}>
      <NumberCard style={{ borderLeft: '1px solid rgba(255, 255, 255, 0.2)' }}>
        <NumberCardTitle>best block</NumberCardTitle>
        <NumberCardContent style={{ color: '#F84447' }}>#{props.blockNumber}</NumberCardContent>
      </NumberCard>
    </Grid>
  );
};

export default BestBlock;
