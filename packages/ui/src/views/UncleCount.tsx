import { Grid } from '@mui/material';
import GraphCardTitle from '../componoments/GraphCardTitle';
import GraphCard from '../componoments/GraphCard';
import GraphBar from '../componoments/BarGraph';
import { ReactComponent as UncleCountIcon } from '../icons/uncle-count.svg';

const UncleCount = (props: { uncleCount: Array<number> }) => {
  return (
    <Grid sm={2}>
      <GraphCard>
        <GraphCardTitle>
          <UncleCountIcon style={{ verticalAlign: 'middle' }}></UncleCountIcon> uncle count
        </GraphCardTitle>
        <GraphBar
          background={{ normal: 'rgba(0, 174, 252, 0.4)', hover: 'rgba(0, 174, 252, 0.6)' }}
          data={props.uncleCount}
        ></GraphBar>
      </GraphCard>
    </Grid>
  );
};

export default UncleCount;
