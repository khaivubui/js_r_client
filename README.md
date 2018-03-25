# Using Rust with JavaScript (NodeJS) Client Side

## Setup

1. `rustup toolchain install nightly`
2. `rustup update`
3. `rustup target add wasm32-unknown-unknown --toolchain nightly`
4. `cargo  +nightly build --target wasm32-unknown-unknown --release`
5. `npm install`
6. `npm start`
7. Visit [localhost:3000](localhost:3000)

More details about Rust wasm set up [here](https://www.hellorust.com/setup/wasm-target/)
