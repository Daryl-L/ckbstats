import { Grid } from '@mui/material';
import NumberCardTitle from '../componoments/NumberCardTitle';
import NumberCardContent from '../componoments/NumberCardContent';
import NumberCard from '../componoments/NumberCard';

const LastBlock = (props: { blockTime: string }) => {
  return (
    <Grid xs={2}>
      <NumberCard>
        <NumberCardTitle>last block</NumberCardTitle>
        <NumberCardContent style={{ color: '#0FF082' }}>{props.blockTime} s</NumberCardContent>
      </NumberCard>
    </Grid>
  );
};

export default LastBlock;
