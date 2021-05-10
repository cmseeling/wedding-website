require('dotenv').config();
const fs = require('fs');

console.log('Prebuild started. Gathering environment variables.');

const config = {
  endpoint: process.env.COSMOS_ENDPOINT,
  key: process.env.COSMOS_KEY,
  databaseId: process.env.COSMOS_DATABASE,
  containerId: process.env.COSMOS_CONTAINER,
  partitionKey: { kind: "Hash", paths: ["/DocType"] }
}

fs.writeFileSync('./src/lambdas/cosmos/config.ts', `export default ${JSON.stringify(config)};\n`);