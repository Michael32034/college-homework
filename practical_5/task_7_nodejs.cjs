const { stdin, stdout } = require("node:process");
const { createInterface } = require("node:readline/promises")

const rl = createInterface({
  input: stdin, output: stdout
})

async function main() {
  let x = parseInt(await rl.question("Введіть перше число: "));
  let y = parseInt(await rl.question("Ввведіть друге число: "));

  console.log("Результати:")
  console.log(`${x} & ${y} = ${x & y}`);
  console.log(`${x} | ${y} = ${x | y}`);
  console.log(`${x} ^ ${y} = ${x ^ y}`);
  console.log(`${x} << 1 = ${x << 1}`);
  console.log(`${x} >> 1 = ${x >> 1}`);

  process.exit(0)
}

main()
