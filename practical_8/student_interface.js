
/**
 * @example
 * let student = new Student("Mike Iva", "IT", [5,4,4,4])
 * student.introduceYourself()
 */
class Student {
  constructor(full_name, major, average_grade){
    this.full_name = full_name;
    this.major = major;
    this.average_grade = average_grade;
  }
  getAverageGrade(){
    let counter = 0
    this.average_grade.forEach(element => { counter += element });
    console.log(counter)
    return Math.floor(counter / this.average_grade.length)
  }
  introduceYourself(){
    console.log(
      `Привіт! Я ${this.full_name}.\n Я навчаюсь но спеціальності ${this.major}.\nМоя середня оцінка ${this.getAverageGrade()}`
    )
  }
}

export default Student;
