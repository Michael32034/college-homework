let hasT‌alonPrompt = prompt("Ви маєте абонемент?(y/n): ");
let yesList = ["y", "Y", "Yes", "yes",];
let hasTalon = yesList.includes(hasT‌alonPrompt);

let cash = parseInt(prompt("Скільки грошей у вас на рахунку?: "));

console.log(hasTalon && cash >= 100 ? "Доступ дозволено" : "Доступ заборонено");
