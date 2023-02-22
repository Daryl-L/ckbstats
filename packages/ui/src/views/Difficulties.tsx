import { Grid } from '@mui/material';
import GraphCardTitle from '../componoments/GraphCardTitle';
import GraphCard from '../componoments/GraphCard';
import GraphBar from '../componoments/BarGraph';
import { ReactComponent as DifficultiesIcon } from '../icons/difficulties.svg';

const Difficulties = (props: { difficulties: number[] }) => {
  return (
    <Grid xs={2}>
      <GraphCard>
        <GraphCardTitle>
          <DifficultiesIcon style={{ verticalAlign: 'middle', color: 'red' }}></DifficultiesIcon> difficultis
        </GraphCardTitle>
        <GraphBar
          background={{ normal: 'rgba(248, 68, 71, 0.4)', hover: 'rgba(248, 68, 71, 0.6)' }}
          data={props.difficulties}
        ></GraphBar>
      </GraphCard>
    </Grid>
  );
};

export default Difficulties;
