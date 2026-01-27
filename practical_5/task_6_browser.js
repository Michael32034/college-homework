let num = parseInt(prompt("Введіть ціле число(1-7): "));
switch (num) {
  case 1:
    console.log("Це Понеділок");
    break;
  case 2:
    console.log("Це Вівторок");
    break;
  case 3:
    console.log("Це Середа");
    break;
  case 4:
    console.log("Це Четвер");
    break;
  case 5:
    console.log("Це П'ятниця");
    break;
  case 6:
    console.log("Це Субота");
    break;
  case 7:
    console.log("Це Неділя");
    break;

  default:
    console.log("Некоректне число");
    break;
}
