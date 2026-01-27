const { stdin, stdout } = require("node:process");
const { createInterface } = require("node:readline/promises");

const rl = createInterface({
  input: stdin, output: stdout
})

async function main() {
  let num = parseInt(await rl.question("Введіть число: "));
  console.log(num / 2 == Math.floor(num / 2) ? "Число парне" : "Число непарне");

  process.exit(0);
}

main();
