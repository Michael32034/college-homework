# Практична робота 6

1.
```javascript
function calculateRectangleArea(width, height){
  return width * height;
}
```
2.
```javascript
function isEven(num){
  return num/2==Math.floor(num/2);
}
```
3.
```javascript
function greetName(name){
  console.log(`Привіт, ${name}!`);
}
```
4.
```javascript
function sumArray(numbers){
  let sum = 0;
  numbers.forEach((num)=>{sum+=num});
  return sum;
}
```
5.
```javascript
function maxOfThree(a, b, c){
  let a_or_b = a > b ? a : b
  return a_or_b > c ? a_or_b : c
}
```
