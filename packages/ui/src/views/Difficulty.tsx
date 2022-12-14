import { Grid } from '@mui/material';
import NumberCardTitle from '../componoments/NumberCardTitle';
import NumberCardContent from '../componoments/NumberCardContent';
import NumberCard from '../componoments/NumberCard';

const Difficulty = (props: { difficulty: number }) => {
  return (
    <Grid xs={2}>
      <NumberCard>
        <NumberCardTitle>avg network hashrate</NumberCardTitle>
        <NumberCardContent>{props.difficulty} PH</NumberCardContent>
      </NumberCard>
    </Grid>
  );
};

export default Difficulty;
