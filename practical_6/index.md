# Практична робота 6

1.
  ```javascript
  let fruits = ["Яблуко", "Банан", "Груша", "Ківі", "Ананас"];
  console.log(`Перший елемент: ${fruits[0]}`);
  console.log(`Останній елемент: ${fruits[length-1]}`);
  console.log(``Кількість елементів: ${fruit.length}`);
  ```
2.
  ```javascript
  for (let i = 2; i <= 10; i += 2) {
    console.log(i);
  }
  ```
3.
  ```javascript
  let is_running = true;
  while (is_running) {
    let input = prompt("Введіть число більше 100: ");
    parseInt(input) > 100 ? (is_running = false) : null;
  }
  ```
4.
  ```javascript
  const users = [
    { id: 1, name: "Оля" },
    { id: 2, name: "Аня" },
    { id: 3, name: "Юля" },
  ];
  let users_names = [];
  for (const user of users) {
    users_names.push(user.name);
  }
  console.log(`Масив імен: ${users_names}`);
  ```
5.
  ```javascript
  const girls = [
    { name: "Оля", age: 22 },
    { name: "Аня", age: 17 },
    { name: "Юля", age: 35 },
  ];
  let age_sum = 0;
  girls.map((item)=>item.age).forEach((item)=>{age_sum+=item})
  let avgAge = Math.floor(age_sum / girls.length);
  console.log(avgAge);
  ```
