import { Grid } from '@mui/material';
import NumberCardTitle from '../componoments/NumberCardTitle';
import NumberCard from '../componoments/NumberCard';
import GraphBar from '../componoments/BarGraph';

const Transactions = (props: { transactions: number[] }) => {
  return (
    <Grid xs={2}>
      <NumberCard style={{ borderLeft: '1px solid rgba(255, 255, 255, 0.2)' }}>
        <NumberCardTitle>transactions</NumberCardTitle>
        <GraphBar
          background={{ normal: 'rgba(0, 174, 252, 0.4)', hover: 'rgba(0, 174, 252, 0.6)' }}
          data={props.transactions}
        ></GraphBar>
      </NumberCard>
    </Grid>
  );
};

export default Transactions;
