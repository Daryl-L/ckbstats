import { Grid } from '@mui/material';
import GraphCardTitle from '../componoments/GraphCardTitle';
import GraphCard from '../componoments/GraphCard';
import GraphBar from '../componoments/BarGraph';
import { ReactComponent as GasSpendingIcon } from '../icons/gas-spending.svg';

const GasSpending = (props: { gasSpending: number[] }) => {
  return (
    <Grid xs={2}>
      <GraphCard>
        <GraphCardTitle>
          <GasSpendingIcon style={{ verticalAlign: 'middle' }}></GasSpendingIcon> gas spending
        </GraphCardTitle>
        <GraphBar
          background={{ normal: 'rgba(15, 240, 130, 0.4)', hover: 'rgba(15, 240, 130, 0.6)' }}
          data={props.gasSpending}
        ></GraphBar>
      </GraphCard>
    </Grid>
  );
};

export default GasSpending;
