require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid climb frame sugar fire ridge remain hospital hockey knee suit tube'; 
let testAccounts = [
"0xe60220449d08f5cc8f1551cab79aa864bce15bb7cb043e4ced95a0cf7c1dd025",
"0xa198eee2743c4792f2149bd39b4b06a1568e4926eb138c18eeb470b6dfe0f472",
"0x9b6d0d03f743d73dbf8f5610cb02ef71ec8f26fa19a94823f3659eb8f842c4af",
"0x62fb453c06329c092a5c2419bdff3cb1111d7c6266b8c88946c0698487a171e5",
"0xd93e812c3ce7f1d11f544e8b1e6895fabd2b4139fc81a27330927211605cb1fb",
"0x0be51e27ba31146e0d7907d4714f1daec4f95e34f7cf6cf444caea9cde2a8f02",
"0x4e0e24653690da168c64655cdda9602c9fd8af1eff11ab78b57e99bbfff6b1ee",
"0x7c33ad97d9ebd55d7ecfb9d52aed37b2c0eadb3d1fe05e8cb8311673f4bb77fa",
"0x0fb6e1e38c488aa1fa8a7cc4dbb4e32711835bcefb44ac9b27b014e16498d3db",
"0x87c11e26b01789855f47278a9a8a8d44988131b690cc1391c05a2cdfc1c6fa1a"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


