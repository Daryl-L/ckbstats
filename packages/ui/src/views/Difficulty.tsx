import { Grid } from '@mui/material';
import NumberCardTitle from '../componoments/NumberCardTitle';
import NumberCardContent from '../componoments/NumberCardContent';
import NumberCard from '../componoments/NumberCard';

const Difficulty = (props: { difficulty: number }) => {
  return (
    <Grid sm={2}>
      <NumberCard>
        <NumberCardContent style={{ color: '#00AEFC' }}>{props.difficulty} PH</NumberCardContent>
        <NumberCardTitle>difficulty</NumberCardTitle>
      </NumberCard>
    </Grid>
  );
};

export default Difficulty;
