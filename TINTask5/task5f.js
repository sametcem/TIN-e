//f)	Create class Person with first and last name,
// as well as getter and setter for full name.
// Rewrite Student class from task E to extend class Person
class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }
    get fullname() {
        return this.name + ' ' + this.surname;
    }
    set setFullname(fname) {
        let words = fname.split(' ');
        this.name = words[0];
        this.surname = words[1];
    }
}

class Student extends Person {
    constructor(id, name, surname, grades) {
        super(name, surname);
        this.id = id;
        this.grades = grades;
    }

    showInfo() {
        var temp = 0;
        for (var g of this.grades) {
            temp = temp + parseInt(g);
        }
        var result =  temp / this.grades.length;
        console.log(this.name + ' ' + this.surname + ' ' + result);

    }
    get averageGrade() {
        var temp = 0;
        for (var g of student.grades) {
            temp = temp + parseInt(g);
        }
        var result =  temp / student.grades.length;
        return result;
    }
}

var student = new Student(71, 'Marina', 'Rossell', [80, 70, 70, 40]);
student.showInfo();
console.log(student.fullname);
student.setFullname = 'Chao Thung';
console.log(student.fullname);
console.log(student.averageGrade);
student.showInfo();