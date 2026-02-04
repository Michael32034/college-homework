# Практична робота 4

1. Вирішення:
  ```javascript
  let name, city;
  name = "Іван";
  city = name;
  console.log(city);
  ```
2. ```console.log(`привіт ${name}`);```
3. Вирішення:
  ```javascript
  let a = "5";
  let b = "13cvb";
  let c = "12.9sxdcfgv";
  let a_int = parseInt("5");
  let b_int = parseInt("13cvb");
  let c_int = parseInt("12.9sxdcfgv"); //Або parseFloat(c)
  console.log(typeof a_int);
  console.log(typeof b_int);
  console.log(typeof c_int);
  ```
4. ```parseFloat((0.1+0.2).toFixed(1)) === 0.3```
5. ```console.log(Math.max(20, 10, 50, 40))```
6. ```console.log(Math.floor(Math.random() * (4 - 2 + 1)) + 2;)```
7. Вирішення:
  ```javascript
  const message = "Welcome to Bahamas!";
  console.log(message.length)
  ```
8. ```console.log("hello".toUpperCase())```
9. Вирішення:
  ```javascript
  let obj = {};
  obj.name = "Name";
  obj.age = 17;
  obj.city = "SomeCity";
  console.log(obj);
  delete obj.city;
  obj["like flowers"] = true;
  console.log(obj);
  ```
10. Вирішення на прикладі console:
  ```javascript
  for (const i in console){
    console.log(`${i} == ${console[i]}`);
  };
  ``` 
