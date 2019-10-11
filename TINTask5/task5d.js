//d)	Extend task B with getter for average grade property and getter and setter for student’s full name
function Student(name, lastname, id, grades) {
    this.name = name;
    this.lastname = lastname;
    this.id = id;
    this.grades = grades;

    this.info = function () {
        var temp = 0;
        for (var g of grades) {
            temp = temp + parseInt(g);
        }
        var result =  temp / grades.length;
        return this.name + " " + this.lastname + " " + this.id + " " + result;
    }
}

var student = new Student('Ted', 'Torch', 19873, [50, 70,70, 20]);

Object.defineProperty(student, 'avg', {
    get: function () {
        var temp = 0;
        for (var g of student.grades) {
            temp = temp + parseInt(g);
        }
        var result =  temp / student.grades.length;
        return result;
    }
});

Object.defineProperty(student, 'setfullName', {
    set: function (fullname) {
        var words = fullname.split(' ');
        this.name = words[0] || '';
        this.lastname = words[1] || '';
    }
});

Object.defineProperty(student, 'getFullName', {
    get: function () {
        return this.name + " " + this.lastname;
    }
});


console.log(student.info());
student.setfullName = "Samet Habiboglu";
console.log(student.info());
console.log(student.getFullName);
console.log("Avg Grade Getter: " + student.avg);


