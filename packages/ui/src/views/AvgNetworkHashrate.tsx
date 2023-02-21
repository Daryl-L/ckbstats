import { Grid } from '@mui/material';
import NumberCardTitle from '../componoments/NumberCardTitle';
import NumberCardContent from '../componoments/NumberCardContent';
import NumberCard from '../componoments/NumberCard';

const AvgNetworkHashrate = (props: { hashrate: string }) => {
  return (
    <Grid xs={2}>
      <NumberCard>
        <NumberCardContent style={{ color: '#868AFF' }}>{props.hashrate} PH/s</NumberCardContent>
        <NumberCardTitle>avg network hashrate</NumberCardTitle>
      </NumberCard>
    </Grid>
  );
};

export default AvgNetworkHashrate;
