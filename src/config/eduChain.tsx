import { Chain } from 'wagmi/chains'

// Define the custom chain
export const OpenCampusCodexChain: Chain = {
  id: 656476,
  name: 'OpenCampus Codex',
  network: 'opencampus-codex',
  nativeCurrency: {
    name: 'OpenCampus Codex Token',
    symbol: 'OCC', // Replace with the correct symbol if applicable
    decimals: 18,
  },
  rpcUrls: {
    default: { http: ['https://rpc.open-campus-codex.gelato.digital'] },
    public: { http: ['https://rpc.open-campus-codex.gelato.digital'] },
  },
  blockExplorers: {
    default: { name: 'Blockscout', url: 'https://opencampus-codex.blockscout.com/' },
  },
  testnet: true, // Set to true if this is a test network
};