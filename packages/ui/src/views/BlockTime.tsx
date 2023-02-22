import { Grid } from '@mui/material';
import GraphCardTitle from '../componoments/GraphCardTitle';
import GraphCard from '../componoments/GraphCard';
import GraphBar from '../componoments/BarGraph';
import { ReactComponent as BlockTimeIcon } from '../icons/block-time.svg';

const BlockTime = (props: { blockTime: Array<number> }) => {
  return (
    <Grid xs={2}>
      <GraphCard>
        <GraphCardTitle>
          <BlockTimeIcon style={{ verticalAlign: 'middle' }}></BlockTimeIcon> block time
        </GraphCardTitle>
        <GraphBar
          data={props?.blockTime}
          background={{ hover: 'rgba(15, 240, 130, 0.6)', normal: 'rgba(15, 240, 130, 0.4)' }}
        ></GraphBar>
      </GraphCard>
    </Grid>
  );
};

export default BlockTime;
