export default () => ({
  ckb: {
    indexerUrl: process.env.CKB_INDEXER_URL,
    rpcUrl: process.env.CKB_RPC_URL,
    network: process.env.CKB_NETWORK,
  },
  ckbstats: {
    url: process.env.CKBSTATS_URL,
    name: process.env.CKBSTATS_NAME,
  },
});
