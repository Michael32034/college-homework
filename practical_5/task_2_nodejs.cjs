const { stdin, stdout } = require("node:process");
const { createInterface } = require("node:readline/promises");

const rl = createInterface({
  input: stdin, output: stdout
})

async function main() {
  let age = await rl.question("Введiть ваш вік: ");
  console.log(`Ви повнолітній: ${age >= 18}`);

  process.exit(0)
}

main()
