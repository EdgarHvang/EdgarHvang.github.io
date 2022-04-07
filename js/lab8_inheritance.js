/**
 * Question 1
 * Create an object student using object literal which has
 * properties: firstName:String ,lastName:String ,grades:Array
 * computeAverageGrade() return average of grades
 * Create an Array with multiple students which are created using Object,create()
 * Then compute the average grade for all students in the array
 */

let student = {
    firstName: "John",
    lastName: "Smith",
    grades: [97, 88, 87],
    inputNewGrade: function (newGrade) {
        this.grades.push(newGrade)
    },
    computeAverageGrade: function () {
        let sum = this.grades.reduce((a, b) => (a + b), 0)
        return sum / this.grades.length;
    }

}

let students = [];
let lily = Object.create(student);
lily.firstName = "Lily";
lily.lastName = "Wentworth";
lily.grades = [100, 90, 80];
lily.inputNewGrade(100);
lily.inputNewGrade(90);
lily.inputNewGrade(80);
console.log(lily.computeAverageGrade());
students.push(lily);

let adam = Object.create(student)
adam.firstName = "Adam";
adam.lastName = "Bennington";
adam.grades = [90, 80, 85];
console.log(adam.computeAverageGrade());
students.push(adam);

let aaron = Object.create(student);
aaron.firstName = "Aaron";
aaron.lastName = "Winchester";
aaron.grades = [70, 75, 80];
console.log(aaron.computeAverageGrade());
students.push(aaron)

console.log(students);
//compute all average grades for all students
let avgGradesAll = students.map((student) => {
    return student.computeAverageGrade() / students.length;
}).reduce((a, b) => (a + b), 0)
console.log("all students :" + avgGradesAll)



/**
 * Question 2
 *Redo the Question 1 using Constructor Function 
 */

function Student(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.grades = [];
}

Student.prototype.inputNewGrades = function (newGrade) {
    this.grades.push(newGrade);
}

Student.prototype.computeAverageGrade = function () {
    let sum = this.grades.reduce((a, b) => (a + b), 0);
    return sum / this.grades.length
}

let students2 = [];

let lily = new Student("Lily", "WenthWorth");
lily.inputNewGrades(80);
lily.inputNewGrades(90);
lily.inputNewGrades(100);
console.log(lily.computeAverageGrade());
students.push(lily);
console.log(lily);

let adam = new Student("Adam", "Bennington");
adam.inputNewGrades(70);
adam.inputNewGrades(75);
adam.inputNewGrades(80);
console.log(adam.computeAverageGrade());
students.push(adam)

let aaron = new Student("Aaron", "Winchester");
aaron.inputNewGrades(60);
aaron.inputNewGrades(65);
aaron.inputNewGrades(70);
console.log(aaron.computeAverageGrade());
students.push(aaron)

console.log(students);
//compute all average grades for all students
let avgGradesForAll = students.map((student) => {
    return student.computeAverageGrade() / students.length;
}).reduce((a, b) => (a + b), 0)
console.log("all students :" + avgGradesAll)

/**
 * Question 3
 * Add a new method named sort() without parameters in the buildt -in contsructoer function Array
 * It'll sort all elements in the array in ascending order
 * 
*/

Array.prototype.sort = function () {
    for (let i = 0; i < this.length - 1; i++) {
        for (let j = 0; j < this.length - 1 - i; j++) {
            if (this[j] > this[j + 1]) {
                let tmp = Array[j];
                this[j] = this[j + 1];
                this[j + 1] = tmp;
                // console.log("test");
            }
        }
    }
    return this;
}

const testArray = [90, 87, 12, 3];
testArray.sort();



/** Question 4
 *Use object literal and constructor function to implement a Singly Linkedlist
 * Use case
 * let linkedlist = new Linkedlist();
 * linkedlist.add(1)
 * linkedlist.add(2)
 * linkedlist.add(3)
 * linkedlist.print() expect result:Linkedlist{1,2,3}
 * linkedlist.remove(2)
 * linkedlist.print() expect result:Linkedlist{1,3}
 */



 function Node(element) {
    this.element = element;
    this.next = null;
    //   console.log(":ssss");

}

function Linkedlist() {
    // console.log(":ssss");
    this.head = null;

}

Linkedlist.prototype.find = function (aElement) {
    let currNode = this.head;
    while (!(currNode.next == null) && (currNode.next.element != aElement)) {
        currNode = currNode.next;
    }
    return currNode;
}

Linkedlist.prototype.add = function (newElement) {
    let newNode = new Node(newElement);

    if (this.head == null) {
        this.head = newNode;
    } else {
        let cur = this.head;
        while (cur.next != null) {
            cur = cur.next;
        }
        cur.next = newNode;
    }


}

Linkedlist.prototype.remove = function (aElement) {
    let preNode = this.find(aElement);
    if (!(preNode.next == null)) {
        preNode.next = preNode.next.next;
    }
}

Linkedlist.prototype.print = function () {
    let result = 'LinkedList{';
    let node = this.head;
    while (node != null) {
        result += node.element + ",";
        node = node.next;
        console.log("xxx");
    }
    result += '}';
    console.log(result);

}


let linkedlist = new Linkedlist();
linkedlist.add(1);
linkedlist.add(2);
linkedlist.add(3);
linkedlist.print();
linkedlist.remove(2);
linkedlist.print();
console.log(linkedlist);