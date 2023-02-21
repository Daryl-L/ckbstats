import { Grid } from '@mui/material';
import NumberCardTitle from '../componoments/NumberCardTitle';
import GraphCard from '../componoments/GraphCard';
import GraphBar from '../componoments/BarGraph';
import { ReactComponent as DifficultiesIcon } from '../icons/difficulties.svg';

const Difficulties = (props: { difficulties: number[] }) => {
  return (
    <Grid xs={2}>
      <GraphCard>
        <NumberCardTitle>
          <DifficultiesIcon style={{ verticalAlign: 'middle', color: 'red' }}></DifficultiesIcon> difficultis
        </NumberCardTitle>
        <GraphBar
          background={{ normal: 'rgba(248, 68, 71, 0.4)', hover: 'rgba(248, 68, 71, 0.6)' }}
          data={props.difficulties}
        ></GraphBar>
      </GraphCard>
    </Grid>
  );
};

export default Difficulties;
