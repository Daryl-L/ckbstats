import { Grid } from '@mui/material';
import NumberCardTitle from '../componoments/NumberCardTitle';
import GraphCard from '../componoments/GraphCard';
import GraphBar from '../componoments/BarGraph';
import { ReactComponent as BlockTimeIcon } from '../icons/block-time.svg';

const BlockTime = (props: { blockTime: Array<number> }) => {
  return (
    <Grid xs={2}>
      <GraphCard>
        <NumberCardTitle>
          <BlockTimeIcon style={{ verticalAlign: 'middle' }}></BlockTimeIcon> block time
        </NumberCardTitle>
        <GraphBar
          data={props?.blockTime}
          background={{ hover: 'rgba(15, 240, 130, 0.6)', normal: 'rgba(15, 240, 130, 0.4)' }}
        ></GraphBar>
      </GraphCard>
    </Grid>
  );
};

export default BlockTime;
