import { Grid } from '@mui/material';
import NumberCardTitle from '../componoments/NumberCardTitle';
import NumberCardContent from '../componoments/NumberCardContent';
import NumberCard from '../componoments/NumberCard';

const Difficulty = (props: { difficulty: number }) => {
  return (
    <Grid xs={2}>
      <NumberCard>
        <NumberCardContent style={{ color: '#00AEFC' }}>{props.difficulty} PH</NumberCardContent>
        <NumberCardTitle>avg network hashrate</NumberCardTitle>
      </NumberCard>
    </Grid>
  );
};

export default Difficulty;
