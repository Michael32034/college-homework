const { stdin, stdout } = require("node:process");
const { createInterface } = require("node:readline/promises")

const rl = createInterface({
  input: stdin, output: stdout
})

async function main() {
  let x = parseInt(await rl.question("Введіть перше число: "));
  let y = parseInt(await rl.question("Ввведіть друге число: "));

  console.log(`Додавання: ${x + y}`);
  console.log(`Віднімання: ${x - y}`);
  console.log(`Множення: ${x * y}`);
  console.log(`Ділення: ${x / y}`);
  console.log(`Залишок від ділення: ${x % y}`);

  process.exit(0)
}

main()
