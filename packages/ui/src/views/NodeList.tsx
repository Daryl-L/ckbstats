import Table from '@mui/material/Table';
import { Tooltip } from '@mui/material';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Node from '@ckbstats/types/src/node';
import { ReactComponent as NameIcon } from '../icons/name.svg';
import { ReactComponent as VersionIcon } from '../icons/version.svg';
import { ReactComponent as NodeLatencyIcon } from '../icons/node-latency.svg';
import { ReactComponent as PeersIcon } from '../icons/peers.svg';
import { ReactComponent as BlockNumberIcon } from '../icons/block-number.svg';
import { ReactComponent as PendingTransactionsIcon } from '../icons/pending-transactions.svg';
import { ReactComponent as TotalDifficultyIcon } from '../icons/total-difficulty.svg';
import { ReactComponent as UnclesIcon } from '../icons/uncles.svg';
import { ReactComponent as LastBlockTimeIcon } from '../icons/last-block-time.svg';

const NodeItem = styled(TableCell)`
  font-family: 'Montserrat', sans-serif;
  color: #00aefc;
  border-bottom: 1px solid #1c1d23;
`;

const NodeList = (props: { rows: Node[] }) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650, color: 'white', backgroundColor: 'black' }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <NodeItem align="left">
              <Tooltip title="name">
                <NameIcon></NameIcon>
              </Tooltip>
            </NodeItem>
            <NodeItem align="left">
              <Tooltip title="version">
                <VersionIcon></VersionIcon>
              </Tooltip>
            </NodeItem>
            <NodeItem align="left">
              <Tooltip title="Node latency">
                <NodeLatencyIcon></NodeLatencyIcon>
              </Tooltip>
            </NodeItem>
            <NodeItem align="left">
              <Tooltip title="peers">
                <PeersIcon></PeersIcon>
              </Tooltip>
            </NodeItem>
            <NodeItem align="left">
              <Tooltip title="block number">
                <BlockNumberIcon></BlockNumberIcon>
              </Tooltip>
            </NodeItem>
            <NodeItem align="left">
              <Tooltip title="pending transactions">
                <PendingTransactionsIcon></PendingTransactionsIcon>
              </Tooltip>
            </NodeItem>
            <NodeItem align="left">
              <Tooltip title="total difficulty">
                <TotalDifficultyIcon></TotalDifficultyIcon>
              </Tooltip>
            </NodeItem>
            <NodeItem align="left">
              <Tooltip title="uncles">
                <UnclesIcon></UnclesIcon>
              </Tooltip>
            </NodeItem>
            <NodeItem align="left">
              <Tooltip title="last block time">
                <LastBlockTimeIcon></LastBlockTimeIcon>
              </Tooltip>
            </NodeItem>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.rows.map((row) => (
            <TableRow key={row.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <NodeItem align="left">{row.name}</NodeItem>
              <NodeItem align="left">{row.version}</NodeItem>
              {row.latency === 0 ? (
                <NodeItem align="left" style={{ color: '#FB9556' }}>
                  {row.latency} ms
                </NodeItem>
              ) : (
                <NodeItem align="left">{row.latency} ms</NodeItem>
              )}
              <NodeItem align="left">{row.peers}</NodeItem>
              <NodeItem align="left">{row.blockNumber}</NodeItem>
              <NodeItem align="left">{row.pendingTransactions}</NodeItem>
              {Number(row.totalDifficulty) === 0 ? (
                <NodeItem align="left">{row.totalDifficulty}</NodeItem>
              ) : (
                <NodeItem align="left" style={{ color: '#F1403F' }}>
                  {row.totalDifficulty}
                </NodeItem>
              )}
              <NodeItem align="left">{row.uncles}</NodeItem>
              <NodeItem align="left">{((Date.now() - row.lastBlockTime) / 1000).toFixed(0)} s</NodeItem>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default NodeList;
