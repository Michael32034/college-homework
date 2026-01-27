let account = parseInt(prompt("Скільки грошей на вашому рахунку?: "));

account += 500;
console.log("Поповнено на 500 грн");

account -= 200;
console.log("Знято 200 грн");

let percent = Math.floor(account * 0.05);
account += percent;
console.log(`Нараховано 5%: ${percent} грн`);

console.log(`Підсумковий баланс: ${account} грн`)
