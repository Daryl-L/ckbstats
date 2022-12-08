import { Grid } from '@mui/material';
import NumberCardTitle from '../componoments/NumberCardTitle';
import NumberCardContent from '../componoments/NumberCardContent';
import NumberCard from '../componoments/NumberCard';

const Uncles = (props: { uncles: string }) => {
  return (
    <Grid xs={2}>
      <NumberCard>
        <NumberCardTitle>uncles</NumberCardTitle>
        <NumberCardContent>{props.uncles}</NumberCardContent>
      </NumberCard>
    </Grid>
  );
};

export default Uncles;
