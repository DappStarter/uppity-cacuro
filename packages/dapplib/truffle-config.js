require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'install logic bottom trophy name random machine huge include kangaroo army gift'; 
let testAccounts = [
"0x16c5c711a25a3721c109b6fa0609cd0c0561c13163804d6860e9bf4a944dd74e",
"0x112004bd4e5efa3cee04758cd1b226ae2265ddea99036bfa8a4bda543f67bfa3",
"0x83de5928d9afecd195a2f3e54739e186e328c3a00e0d4f2606fad46d1f96cda6",
"0x24b402fb07954bcaa6be78e732332ae75bd52f4dab68984329ccd880c32ef384",
"0xe0d6abe1d22d3c49f8b2e0f3415d52ef1213cd323f2d3d439cf2ed6ed28557a1",
"0x9029d3bf7eb79e779dcd7b9e240b8003ce92e3cdad3659a06c1ab242b7fa4f9b",
"0xd225c2fb09563f9482e159f076703585625d52a52828051fa73577abfb5f1ab7",
"0x769377f2c656b75e73749b7b0df0788719d76e4f6916391b4b1a6b4e82586a81",
"0xfee9c56fe322c152d1f3e710af36b6da7cba25fa738d69642e93f3d232907f9d",
"0x9e7bf535409e56bd462adc9a35abaa474c3dfa5bacae827a4b3a8427405ec7ba"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
