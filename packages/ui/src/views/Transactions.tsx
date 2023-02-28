import { Grid } from '@mui/material';
import GraphCardTitle from '../componoments/GraphCardTitle';
import GraphCard from '../componoments/GraphCard';
import GraphBar from '../componoments/BarGraph';
import { ReactComponent as TransactionsIcon } from '../icons/transactions.svg';

const Transactions = (props: { transactions: number[] }) => {
  return (
    <Grid sm={2}>
      <GraphCard>
        <GraphCardTitle>
          <TransactionsIcon style={{ verticalAlign: 'middle' }}></TransactionsIcon> transactions
        </GraphCardTitle>
        <GraphBar
          background={{ normal: 'rgba(0, 174, 252, 0.4)', hover: 'rgba(0, 174, 252, 0.6)' }}
          data={props.transactions}
        ></GraphBar>
      </GraphCard>
    </Grid>
  );
};

export default Transactions;
