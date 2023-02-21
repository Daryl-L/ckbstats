import { Grid } from '@mui/material';
import NumberCardTitle from '../componoments/NumberCardTitle';
import GraphCard from '../componoments/GraphCard';
import GraphBar from '../componoments/BarGraph';
import { ReactComponent as BlockPropagationIcon } from '../icons/block-propagation.svg';

const BlockPropagation = (props: { blockPropagation: number[] }) => {
  return (
    <Grid xs={2}>
      <GraphCard>
        <NumberCardTitle>
          <BlockPropagationIcon style={{ verticalAlign: 'middle' }}></BlockPropagationIcon> block propagation
        </NumberCardTitle>
        <GraphBar
          background={{ normal: 'rgba(248, 68, 71, 0.4)', hover: 'rgba(248, 68, 71, 0.6)' }}
          data={props.blockPropagation}
        ></GraphBar>
      </GraphCard>
    </Grid>
  );
};

export default BlockPropagation;
