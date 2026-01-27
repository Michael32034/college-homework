const { stdin, stdout } = require("node:process");
const { createInterface } = require("node:readline/promises");

const rl = createInterface({
  input: stdin, output: stdout
})

async function main() {
  let hasT‌alonPrompt = await rl.question("Ви маєте абонемент?(y/n): ");
  let yesList = ["y", "Y", "Yes", "yes",];
  let hasTalon = yesList.includes(hasT‌alonPrompt);

  let cash = parseInt(await rl.question("Скільки грошей у вас на рахунку?: "));

  console.log(hasTalon && cash >= 100 ? "Доступ дозволено" : "Доступ заборонено");

  process.exit(0);
}

main();
