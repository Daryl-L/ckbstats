import { Grid } from '@mui/material';
import NumberCardTitle from '../componoments/NumberCardTitle';
import NumberCardContent from '../componoments/NumberCardContent';
import NumberCard from '../componoments/NumberCard';

const AvgNetworkHashrate = (props: { hashrate: string }) => {
  return (
    <Grid xs={2}>
      <NumberCard>
        <NumberCardTitle>avg network hashrate</NumberCardTitle>
        <NumberCardContent>{props.hashrate} PH/s</NumberCardContent>
      </NumberCard>
    </Grid>
  );
};

export default AvgNetworkHashrate;
