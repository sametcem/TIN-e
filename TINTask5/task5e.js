//5e)	Task D with classes
class Student {
    constructor(name, lastname, id, grades) {
        this.name = name;
        this.lastname = lastname;
        this.id = id;
        this.grades = grades;
    }
    showInfo() {
        var temp = 0;
        for (var g of this.grades) {
            temp = temp + parseInt(g);
        }
        var result =  temp / this.grades.length;
        return this.name + " " + this.lastname + " " + this.id + " " + result;
    }
    get average() {
        var temp = 0;
        for (var g of student.grades) {
            temp = temp + parseInt(g);
        }
        var result =  temp / student.grades.length;
        return result;
    }

    get NameAndSurname() {
        return this.name + ' ' + this.lastname;
    }
    set stuFullName(fullname) {
        var words = fullname.split(' ');
        this.name = words[0] || '';
        this.lastname = words[1] || '';
    }
}
const student = new Student('Karol', 'Frey', 23821, [50, 60, 46, 100]);
console.log(student.showInfo());
console.log("Avg:" + student.average);
console.log(student.NameAndSurname);
student.stuFullName= "Dave Torch";
console.log(student.showInfo());

