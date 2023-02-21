import { Grid } from '@mui/material';
import NumberCardTitle from '../componoments/NumberCardTitle';
import NumberCardContent from '../componoments/NumberCardContent';
import NumberCard from '../componoments/NumberCard';

const LastBlock = (props: { blockTime: string }) => {
  return (
    <Grid xs={2}>
      <NumberCard>
        <NumberCardContent style={{ color: '#0FF082' }}>{props.blockTime} s</NumberCardContent>
        <NumberCardTitle>last block</NumberCardTitle>
      </NumberCard>
    </Grid>
  );
};

export default LastBlock;
