import Table from '@mui/material/Table';
import { Tooltip } from '@mui/material';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import styled from 'styled-components';
import ComputerIcon from '@mui/icons-material/Computer';
import DevicesIcon from '@mui/icons-material/Devices';
import AvTimerIcon from '@mui/icons-material/AvTimer';
import HandymanIcon from '@mui/icons-material/Handyman';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import Storage from '@mui/icons-material/Storage';
import PausePresentationIcon from '@mui/icons-material/PausePresentation';
import CalculateIcon from '@mui/icons-material/Calculate';
import LinkIcon from '@mui/icons-material/Link';
import HourglassEmptyIcon from '@mui/icons-material/HourglassEmpty';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import Node from '@ckbstats/types/src/node';

const NodeItem = styled(TableCell)``;

const NodeList = (props: { rows: Node[] }) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650, color: 'white', backgroundColor: 'black' }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <NodeItem sx={{ color: '#4dabf5' }}>
              <Tooltip title="name">
                <ComputerIcon></ComputerIcon>
              </Tooltip>
            </NodeItem>
            <NodeItem sx={{ color: '#4dabf5' }} align="right">
              <Tooltip title="version">
                <DevicesIcon></DevicesIcon>
              </Tooltip>
            </NodeItem>
            <NodeItem sx={{ color: '#4dabf5' }} align="right">
              <Tooltip title="Node latency">
                <AvTimerIcon></AvTimerIcon>
              </Tooltip>
            </NodeItem>
            <NodeItem sx={{ color: '#4dabf5' }} align="right">
              <Tooltip title="peers">
                <Diversity3Icon></Diversity3Icon>
              </Tooltip>
            </NodeItem>
            <NodeItem sx={{ color: '#4dabf5' }} align="right">
              <Tooltip title="block number">
                <Storage></Storage>
              </Tooltip>
            </NodeItem>
            <NodeItem sx={{ color: '#4dabf5' }} align="right">
              <Tooltip title="pending transactions">
                <PausePresentationIcon></PausePresentationIcon>
              </Tooltip>
            </NodeItem>
            <NodeItem sx={{ color: '#4dabf5' }} align="right">
              <Tooltip title="total difficulty">
                <CalculateIcon></CalculateIcon>
              </Tooltip>
            </NodeItem>
            <NodeItem sx={{ color: '#4dabf5' }} align="right">
              <Tooltip title="uncles">
                <LinkIcon></LinkIcon>
              </Tooltip>
            </NodeItem>
            <NodeItem sx={{ color: '#4dabf5' }} align="right">
              <Tooltip title="last block time">
                <HourglassEmptyIcon></HourglassEmptyIcon>
              </Tooltip>
            </NodeItem>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.rows.map((row) => (
            <TableRow key={row.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <NodeItem sx={{ color: '#4dabf5' }} align="right">
                {row.name}
              </NodeItem>
              <NodeItem sx={{ color: '#4dabf5' }} align="right">
                {row.version}
              </NodeItem>
              <NodeItem sx={{ color: '#4dabf5' }} align="right">
                {row.latency} ms
              </NodeItem>
              <NodeItem sx={{ color: '#4dabf5' }} align="right">
                {row.peers}
              </NodeItem>
              <NodeItem sx={{ color: '#4dabf5' }} align="right">
                {row.blockNumber}
              </NodeItem>
              <NodeItem sx={{ color: '#4dabf5' }} align="right">
                {row.pendingTransactions}
              </NodeItem>
              <NodeItem sx={{ color: '#4dabf5' }} align="right">
                {row.totalDifficulty}
              </NodeItem>
              <NodeItem sx={{ color: '#4dabf5' }} align="right">
                {row.uncles}
              </NodeItem>
              <NodeItem sx={{ color: '#4dabf5' }} align="right">
                {((Date.now() - row.lastBlockTime) / 1000).toFixed(0)} s
              </NodeItem>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default NodeList;
