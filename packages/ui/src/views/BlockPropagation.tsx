import { Grid } from '@mui/material';
import GraphCardTitle from '../componoments/GraphCardTitle';
import GraphCard from '../componoments/GraphCard';
import GraphBar from '../componoments/BarGraph';
import { ReactComponent as BlockPropagationIcon } from '../icons/block-propagation.svg';

const BlockPropagation = (props: { blockPropagation: number[] }) => {
  return (
    <Grid sm={2}>
      <GraphCard>
        <GraphCardTitle>
          <BlockPropagationIcon style={{ verticalAlign: 'middle' }}></BlockPropagationIcon> block propagation
        </GraphCardTitle>
        <GraphBar
          background={{ normal: 'rgba(248, 68, 71, 0.4)', hover: 'rgba(248, 68, 71, 0.6)' }}
          data={props.blockPropagation}
        ></GraphBar>
      </GraphCard>
    </Grid>
  );
};

export default BlockPropagation;
