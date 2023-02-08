import { Grid } from '@mui/material';
import NumberCardTitle from '../componoments/NumberCardTitle';
import NumberCardContent from '../componoments/NumberCardContent';
import NumberCard from '../componoments/NumberCard';

const AvgBlockTime = (props: { averageBlockTime: string }) => {
  return (
    <Grid xs={2}>
      <NumberCard>
        <NumberCardTitle>avg block time</NumberCardTitle>
        <NumberCardContent style={{ color: '#00AEF' }}>{props.averageBlockTime} s</NumberCardContent>
      </NumberCard>
    </Grid>
  );
};

export default AvgBlockTime;
