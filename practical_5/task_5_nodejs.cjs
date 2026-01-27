const { stdin, stdout } = require("node:process");
const { createInterface } = require("node:readline/promises");

const rl = createInterface({
  input: stdin, output: stdout
})

async function main() {
  let account = parseInt(await rl.question("Скільки грошей на вашому рахунку?: "));

  account += 500;
  console.log("Поповнено на 500 грн");

  account -= 200;
  console.log("Знято 200 грн");

  let percent = Math.floor(account * 0.05);
  account += percent;
  console.log(`Нараховано 5%: ${percent} грн`);

  console.log(`Підсумковий баланс: ${account} грн`)

  process.exit(0);
}

main();
