class Calculator{
  x;
  y;
  read(){
      self.x = parseInt(prompt("Введіть перше число"));
      while (True) {
        if (self.x==NaN) {
          self.x = parseInt(prompt("Введіть перше число (помилка введення):"));
        }
        break;
      }
      self.y = parseInt(prompt("Введіть друге число"));
      while (True) {
        if (self.y==NaN) {
          self.y = parseInt(prompt("Введіть друге число (помилка введення):"));
        }
        break;
      }
  }
  sum(){
    switch (self) {
      case (typeof self.x) == "undefined" | (typeof self.y) == "undefined":
        console.error("Значення ще не визначені")
        break;

      default:
        return self.x + self.y
    }    
  }
  mul(){
    switch (self) {
      case (typeof self.x) == "undefined" | (typeof self.y) == "undefined":
        console.error("Значення ще не визначені")
        break;

      default:
        return self.x * self.y
    }    
  }
}
