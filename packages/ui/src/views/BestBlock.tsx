import { Grid } from '@mui/material';
import NumberCardTitle from '../componoments/NumberCardTitle';
import NumberCardContent from '../componoments/NumberCardContent';
import NumberCard from '../componoments/NumberCard';

const BestBlock = (props: { blockNumber: number }) => {
  return (
    <Grid xs={2}>
      <NumberCard style={{ borderLeft: '0' }}>
        <NumberCardContent style={{ color: '#F84447' }}>#{props.blockNumber}</NumberCardContent>
        <NumberCardTitle>best block</NumberCardTitle>
      </NumberCard>
    </Grid>
  );
};

export default BestBlock;
