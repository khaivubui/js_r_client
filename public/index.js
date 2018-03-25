const jsNthFibonacci = (num) => {
  if (num < 2) return num;
  return jsNthFibonacci(num - 1) + jsNthFibonacci(num - 2);
};

let rustNthFibonacci;

const loadRustFibonacci = async () => {
  const rustWASM = await WebAssembly.instantiateStreaming(fetch('js_r_client.wasm'), {});
  rustNthFibonacci = rustWASM.instance.exports.nth_fibonacci;
};

loadRustFibonacci();

const jsFibBtn = document.getElementById('js-fib-btn');
const rustFibBtn = document.getElementById('rust-fib-btn');
const jsOutput = document.getElementById('js-output');
const rustOutput = document.getElementById('rust-output');

jsFibBtn.addEventListener('click', () => {
  const startTime = new Date();

  let num = 1;
  while (num <= 42) {
    const div = document.createElement('div');
    div.append(jsNthFibonacci(num));
    jsOutput.append(div);
    num++;
  }

  const benchMarkDiv = document.createElement('div');
  benchMarkDiv.append(`Time: ${(new Date() - startTime) / 1000}s`);
  jsOutput.append(benchMarkDiv);
});

rustFibBtn.addEventListener('click', () => {
  const startTime = new Date();

  let num = 1;
  while (num <= 42) {
    const div = document.createElement('div');
    div.append(rustNthFibonacci(num));
    rustOutput.append(div);
    num++;
  }

  const benchMarkDiv = document.createElement('div');
  benchMarkDiv.append(`Time: ${(new Date() - startTime) / 1000}s`);
  rustOutput.append(benchMarkDiv);
});
