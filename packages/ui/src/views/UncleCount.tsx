import { Grid } from '@mui/material';
import NumberCardTitle from '../componoments/NumberCardTitle';
import GraphCard from '../componoments/GraphCard';
import GraphBar from '../componoments/BarGraph';
import { ReactComponent as UncleCountIcon } from '../icons/uncle-count.svg';

const UncleCount = (props: { uncleCount: Array<number> }) => {
  return (
    <Grid xs={2}>
      <GraphCard>
        <NumberCardTitle>
          <UncleCountIcon style={{ verticalAlign: 'middle' }}></UncleCountIcon> uncle count
        </NumberCardTitle>
        <GraphBar
          background={{ normal: 'rgba(0, 174, 252, 0.4)', hover: 'rgba(0, 174, 252, 0.6)' }}
          data={props.uncleCount}
        ></GraphBar>
      </GraphCard>
    </Grid>
  );
};

export default UncleCount;
