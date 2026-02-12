class Abonent{
  constructor(){
    this.name = "Невідомий";
    this.phone_number = "-";
  }

  set(name, phone_number){
    this.name = name;
    this.phone_number = phone_number;
  }

  get(){
    console.log(`${this.name}: ${this.phone_number}`)
  }
}

let abonent1 = new Abonent()
abonent1.set("Іван Мазепа", "+380 00-000-0000")

let abonent2 = new Abonent()
abonent2.set("Нестор Махно", "+380 01-234-5678")

let abonent3 = new Abonent()
abonent3.set("Юрій Хмельницький", "+380 87-654-3210")

abonent1.get()
abonent2.get()
abonent3.get()
