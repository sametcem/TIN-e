//5a)	Use object initializer to create an object, it should have at least 2-3 fields and 2-3 methods. Write a function accepting the object as a parameter and printing all its properties and their types
var person = {
    name: "Ronnie",
    surname: "Wood",
    year_of_birth: 1953,
    getInfo() {
        return this.name + " " + this.surname + " was born in " + this.year_of_birth;
    },
    isOlder(age) {
        cdate = new Date();
        temp = cdate.getFullYear() - this.year_of_birth;
        return temp > age;
    },
    reversedName(str) {
        return str.split('').reverse().join('');
    }
};
console.log(person.getInfo());
console.log(person.isOlder(46));
console.log(person.reversedName(person.name));

function showPerson(person) {
    return person.name + " " + typeof (person.name) + "\n" + person.surname + " " + typeof (person.surname) +
        "\n" + person.year_of_birth + " " + typeof (person.year_of_birth);
}

console.log(showPerson(person));
console.log("//");


//5b) b)Implement a constructor function, creating objects representing students –
// they should include first and last name, id, array with grades (without subject names, just grades) ,
// a method printing first and last name and grade average of a student

function Student(firstname, lastname, id, grades) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.id = id;
    this.grades = grades;

    this.getAverage = function () {
        var temp = 0;
        for (var g of grades) {
            temp = temp + parseInt(g);
        }
        return temp / grades.length
        },
        this.getInfo = function () {
            return this.firstname + " " + this.lastname;
        },
        this.aggregatedData = function () {
           return this.getInfo() + " " + this.getAverage();
        }
}

var grd = [55, 75, 70, 80];
var std = new Student("Tom", "Perry", 1, grd);

console.log(std.getInfo());
console.log(std.getAverage());
console.log(std.aggregatedData());
console.log("//");



//c)	Create a prototype of a student object using initializer.
// The object should contain an array with list of courses each student should take.
// Write a function creating new objects based on this prototype, setting their first and last name and id properties

var studentx = {
    courses: ["PRI", "TIN", "BYT", "ZPR"]
}
function createBasedOnPro(hisname, hissurname, hisid) {
    stud = Object.create(studentx);
    stud.name = hisname;
    stud.surname = hissurname;
    stud.id = hisid;
    return stud;
}

var test = createBasedOnPro("Beth", "Hart", 18);
console.log(test.name + " " + test.surname + " " + test.id + " [" + test.courses + " ]");
console.log("//");








