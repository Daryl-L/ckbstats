import { Grid } from '@mui/material';
import NumberCardTitle from '../componoments/NumberCardTitle';
import NumberCardContent from '../componoments/NumberCardContent';
import NumberCard from '../componoments/NumberCard';

const AvgBlockTime = (props: { averageBlockTime: string }) => {
  return (
    <Grid xs={2}>
      <NumberCard>
        <NumberCardContent style={{ color: '#00AEFC' }}>{props.averageBlockTime} s</NumberCardContent>
        <NumberCardTitle>avg block time</NumberCardTitle>
      </NumberCard>
    </Grid>
  );
};

export default AvgBlockTime;
