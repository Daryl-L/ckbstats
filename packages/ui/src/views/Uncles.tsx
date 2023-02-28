import { Grid } from '@mui/material';
import NumberCardTitle from '../componoments/NumberCardTitle';
import NumberCardContent from '../componoments/NumberCardContent';
import NumberCard from '../componoments/NumberCard';

const Uncles = (props: { uncles: string }) => {
  return (
    <Grid sm={2}>
      <NumberCard>
        <NumberCardContent style={{ color: '#EC8349' }}>{props.uncles}</NumberCardContent>
        <NumberCardTitle>uncles</NumberCardTitle>
      </NumberCard>
    </Grid>
  );
};

export default Uncles;
