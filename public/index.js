let rustNthFibonacci;

const loadRustFibonacci = async () => {
  const rustWASM = await WebAssembly.instantiateStreaming(fetch('js_r_client.wasm'), {});
  rustNthFibonacci = rustWASM.instance.exports.nth_fibonacci;
  window.rustNthFibonacci = rustNthFibonacci; // just for test
};

loadRustFibonacci();

const jsFibBtn = document.getElementById('js-fib-btn');
const rustFibBtn = document.getElementById('rust-fib-btn');
const jsOutput = document.getElementById('js-output');
const rustOutput = document.getElementById('rust-output');

jsFibBtn.addEventListener('click', () => {
  const div = document.createElement('div');
  div.append('lol');
  jsOutput.append(div);
});

rustFibBtn.addEventListener('click', () => {
  const div = document.createElement('div');
  div.append('lol');
  rustOutput.append(div);
});
