import { Grid } from '@mui/material';
import NumberCardTitle from '../componoments/NumberCardTitle';
import GraphCard from '../componoments/GraphCard';
import GraphBar from '../componoments/BarGraph';
import { ReactComponent as TransactionsIcon } from '../icons/transactions.svg';

const Transactions = (props: { transactions: number[] }) => {
  return (
    <Grid xs={2}>
      <GraphCard>
        <NumberCardTitle>
          <TransactionsIcon style={{ verticalAlign: 'middle' }}></TransactionsIcon> transactions
        </NumberCardTitle>
        <GraphBar
          background={{ normal: 'rgba(0, 174, 252, 0.4)', hover: 'rgba(0, 174, 252, 0.6)' }}
          data={props.transactions}
        ></GraphBar>
      </GraphCard>
    </Grid>
  );
};

export default Transactions;
