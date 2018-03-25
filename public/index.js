let rustNthFibonacci;

const loadRustFibonacci = async () => {
  const rustWASM = await WebAssembly.instantiateStreaming(fetch('js_r_client.wasm'), {});
  rustNthFibonacci = rustWASM.instance.exports.nth_fibonacci;
  window.rustNthFibonacci = rustNthFibonacci; // just for test
};

loadRustFibonacci();
