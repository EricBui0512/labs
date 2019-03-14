
// require('dotenv').config();
// require('babel-register');
// require('babel-polyfill');



let HDWalletProvider = require("truffle-hdwallet-provider");
let mnemonic = "ecology agent holiday shy sample carpet aim fury fence eager cupboard method fade angle focus";

//let mnemonic = "i don't know what it should be.... ";
//var utils = require('ethereumjs-util')
/*const bip39 = require('bip39');
 const hdkey = require('ethereumjs-wallet/hdkey');
 const hdwallet = hdkey.fromMasterSeed(bip39.mnemonicToSeed(mnemonic));
 const path = "m/44'/60'/0'/0/0";*/

const bip39 = require('bip39');
const hdkey = require('ethereumjs-wallet/hdkey');
const hdwallet = hdkey.fromMasterSeed(bip39.mnemonicToSeed(mnemonic));
const path = "m/44'/60'/0'/0/0";



//const privateKey = new Buffer( mnemonic )
//console.log("privateKey" + privateKey);
//address will be: 0x2273066ac87d87ebd4cefd9f7b2c30152a474c5b

let provider = new HDWalletProvider(mnemonic,"https://rpc-poa.veloxchain.io",0,5);
// let provider = new HDWalletProvider(mnemonic,"https://rinkeby.infura.io/v3/76a5261501804768ad2a2b0cb81e6937")


//console.log(provider.wallet._privKey.toString("hex"))

module.exports = {
    // See <http://truffleframework.com/docs/advanced/configuration>
    // for more about customizing your Truffle configuration!
    networks: {
        development: {
            host: "127.0.0.1",

            port: 8545,
            gas: 10000000,
            gasPrice: 4000000000,
            // from: "0x438cb5211D33684d2261877947E2E71913FB255E",
            network_id: "*" // Match any network id
        },
        coverage: {
            host: "127.0.0.1",
            network_id: "*",
            port: 8555,
            gas: 0xfffffffffff,
            gasPrice: 0x01
        },
        bikecoin: {
            provider: function () {
                return provider
            },
            network_id: 99,
            gas: 3800000,
            gasPrice: 4000000000,

        },
        veloxChain: {
            provider: function () {
                return provider
            },
            network_id: 99,
            gas: 10000000,
            gasPrice: 4000000000,
        }
    },
    compilers: {
        solc: {
            version: "0.4.24", // ex:  "0.4.20". (Default: Truffle's installed solc)
            optimizer: {
                enabled: true,
                runs: 200
            }
        },
    },
}
