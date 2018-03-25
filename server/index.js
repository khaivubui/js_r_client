const express = require('express');
const path = require('path');

const app = express();

const port = process.env.PORT || 3000;

const BUNDLE_PATH = path.join(__dirname, '../dist/bundle.js');
const WASM_PATH = path.join(
  __dirname,
  '../target/wasm32-unknown-unknown/release/js_r_client.wasm'
);
const HTML_PATH = path.join(__dirname, '../public/index.html');

app
  .get('/bundle.js', (req, res) => res.sendFile(BUNDLE_PATH))
  .get('/js_r_client.wasm', (req, res) => res
    .set('content-type', 'application/wasm')
    .sendFile(WASM_PATH))
  .get('*', (req, res) => res.sendFile(HTML_PATH));

app.listen(
  port,
  () => console.log(`Running on port ${port}...`)
);
