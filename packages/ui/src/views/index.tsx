import { Grid, Box } from '@mui/material';
import { useEffect, useState } from 'react';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend } from 'chart.js';
import Info from '@ckbstats/types/src/info';
import { useQuery } from 'react-query';
import Uncles from './Uncles';
import BestBlock from './BestBlock';
import AvgBlockTime from './AvgBlockTime';
import LastBlock from './LastBlock';
import AvgNetworkHashrate from './AvgNetworkHashrate';
import Difficulty from './Difficulty';
import BlockTime from './BlockTime';
import UncleCount from './UncleCount';
import BlockPropagation from './BlockPropagation';
import Transactions from './Transactions';
import Difficulties from './Difficulties';
import GasSpending from './GasSpending';
import NodeList from './NodeList';

export const View = () => {
  ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

  const [now, setNow] = useState(Date.now() / 1000);
  const [info, setInfo] = useState<Info>();
  useQuery(
    'info',
    () => {
      //eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      fetch(process.env.REACT_APP_SERVER_URL!).then((res) => {
        res.json().then((info: Info) => {
          setInfo(info);
        });
      });
    },
    {
      refetchInterval: 2000,
    },
  );

  useEffect(() => {
    const i = setInterval(() => setNow(Date.now() / 1000));
    return () => clearInterval(i);
  }, [now]);

  return (
    <Box sx={{ height: 400, width: '100%' }}>
      <Grid container textAlign="left">
        <BestBlock blockNumber={info?.bestBlock ?? 0}></BestBlock>
        <Uncles uncles={info?.uncles ?? '0/0'}></Uncles>
        <LastBlock blockTime={info ? (now - info.lastBlock).toFixed(0) : '0'}></LastBlock>
        <AvgBlockTime averageBlockTime={info?.averagBlockTime ?? '0'}></AvgBlockTime>
        <AvgNetworkHashrate hashrate={info?.averageNetworkHashrate ?? '0'}></AvgNetworkHashrate>
        <Difficulty difficulty={info?.difficulty ?? 0}></Difficulty>
        <BlockTime blockTime={info?.blockTime ?? Array<number>(50)}></BlockTime>
        <UncleCount uncleCount={info?.uncleCount ?? Array<number>(50)}></UncleCount>
        <BlockPropagation blockPropagation={info?.blockPropagation ?? Array<number>(50)}></BlockPropagation>
        <Transactions transactions={info?.transactions ?? Array<number>(50)}></Transactions>
        <GasSpending gasSpending={info?.gasSpending ?? Array<number>(50)}></GasSpending>
        <Difficulties difficulties={info?.difficulties ?? Array<number>(50)}></Difficulties>
      </Grid>
      <NodeList rows={info?.nodeList ?? []}></NodeList>
    </Box>
  );
};
