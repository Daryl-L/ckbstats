import { Grid } from '@mui/material';
import NumberCardTitle from '../componoments/NumberCardTitle';
import NumberCardContent from '../componoments/NumberCardContent';
import NumberCard from '../componoments/NumberCard';

const BestBlock = (props: { blockNumber: number }) => {
  return (
    <Grid sm={2}>
      <NumberCard style={{ borderLeft: '0' }}>
        <NumberCardContent style={{ color: '#F84447' }}>
          #{props.blockNumber ? props.blockNumber.toLocaleString() : '0'}
        </NumberCardContent>
        <NumberCardTitle>best block</NumberCardTitle>
      </NumberCard>
    </Grid>
  );
};

export default BestBlock;
