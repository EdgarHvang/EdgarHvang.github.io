
// function makeArmy(){
//     let shooters = [];
//     let i = 0;
//     while(i < 2){
//         // let shooter = function(){
//         //     // alert(i);
//         //     console.log(i);
//         // }
//         let shooterg = ()=>{
//             console.log(i);
//         }
//         shooters.push(shooterg);
//         i++;
//     };
//     return shooters;
// }
// let army = makeArmy();
// army[0];

// console.log("end")

// function makeArmy() {
//     let shooters = [];
//     let i = 0;
//     while (i < 2) {
//         let shooter = (i) => {
//             alert(i);
//         };
//         shooters.push(shooter);
//         i++;
//     }
//     return shooters;
// }

// let army = makeArmy();
// army.forEach((item, idx) => {
//     item(idx)
// })


// function printNumbers(from , to){

//    let timerx = setInterval(()=>{
//         console.log(from)
//         from += 1;
//         if(from > to){
//             clearInterval(timerx);
//         }
//     },1000,from,to)

// }

// printNumbers(1,10);


// let i = 0;

// setTimeout(() => {
//     alert[i]

// }, 100);

// for(let j = 0; j < 100000000;j++){
//     i++;
// }



function askPassword(ok, fail) {
    let password = prompt("password", "");
    if (password == "rockstar") ok();
    else fail();
}

let user = {
    name: "john",

    loginOk() {
        alert(`${this.name} logged in`)
    },

    loginFail() {
        alert(`${this.name} failed to log in`)
    },
}

// askPassword(user.loginOk,user.loginFail);
// this.askPassword(this.user.loginOk,this.user.loginFail)

// function wrapperfunc(){
//     askPassword(user.loginOk,user.loginFail);
// }
// wrapperfunc();

// askPassword(user.loginOk.bind(user),user.loginFail.bind(user));

// askPassword(()=>
//     user.loginOk.call.user
// ,()=> user.loginFail.call.user);

// askPassword(user.loginOk.bind(user),user.loginFail.bind(user));
// askPassword(()=>
//     user.loginOk.apply.user
// ,()=> user.loginFail.apply.user);


// let group = {
//     title: "Our group",
//     students: ["John", "Peter", "Alice"],
//     showList: function () {
//         this.students.forEach(function (student) {
//             console.log(this);
//             console.log(this.title + ":" + student);
//         });
//     }
// }

// group.showList();

// First way to solve this change function to an Arrow function

// let group = {
//     title: "Our group",
//     students: ["John", "Peter", "Alice"],
//     showList: function () {
//         this.students.forEach(function (student) {
//             console.log(this.title + ":" + student);
//         }.bind(this));
//     }
// }

// group.showList();

// let animal = {
//     eat : true,
// }
// let rabbit = Object.create(animal);
// alert(rabbit.eat)

// let animal = {
//     eat:true,
// }
// let rabbit = Object.create(animal);
// rabbit.jumps = true;
// console.log(rabbit);

// console.log(rabbit.jumps);
// console.log(rabbit.eat);

// let animal = {
//     eat: true,
//     walk: function(){
//        alert("walk");
//     }
// }

// let rabbit = Object.create(animal);
// rabbit.jumps = true;
// // console.log(rabbit);
// // rabbit.walk();
// let longear = Object.create(rabbit);
// longear.earlength = 20;
// // longear.walk;
// // console.log(longear);

// rabbit.walk = function(){
//     alert("bouncy bob");
// }

// // rabbit.walk();
// animal.walk();

/**
 * Question 1
 * Create an object student using object literal which has
 * properties: firstName:String ,lastName:String ,grades:Array
 * inputNewGrade(newGrade): push newGrade to grades
 * computeAverageGrade() return average of grades
 * Create an Array with multiple students which are created using Object,create()
 * Then compute the average grade for all students in the array
 */

// let student = {
//     firstName : "John",
//     lastName : "Smith",
//     grades :[97,88,87],
//     inputNewGrade: function(newGrade){
//         this.grades.push(newGrade)
//     },
//     computeAverageGrade: function(){
//        let sum = this.grades.reduce((a,b)=>(a + b),0)
//        return sum/this.grades.length;
//     }

// }

// let students = [];
// let lily = Object.create(student);
// lily.firstName = "Lily";
// lily.lastName = "Wentworth";
// lily.grades = [100,90,80];
// lily.inputNewGrade(100);
// lily.inputNewGrade(90);
// lily.inputNewGrade(80);
// console.log(lily.computeAverageGrade());
// students.push(lily);

// let adam = Object.create(student)
// adam.firstName = "Adam";
// adam.lastName = "Bennington";
// adam.grades = [90,80,85];
// console.log(adam.computeAverageGrade());
// students.push(adam);

// let aaron = Object.create(student);
// aaron.firstName = "Aaron";
// aaron.lastName = "Winchester";
// aaron.grades = [70,75,80];
// console.log(aaron.computeAverageGrade());
// students.push(aaron)

// console.log(students);
// //compute all average grades for all students
// let avgGradesAll = students.map((student)=>{
//     return student.computeAverageGrade()/students.length;
// }).reduce((a,b)=>(a + b),0)
// console.log("all students :" + avgGradesAll)

/**
 * Question 2
 *Redo the Question 1 using Constructor Function 
 */

//  function Student(firstName,lastName){
//      this.firstName = firstName;
//      this.lastName = lastName;
//      this.grades = [];
//  }

//  Student.prototype.inputNewGrades = function(newGrade){
//      this.grades.push(newGrade);
//  }

// Student.prototype.computeAverageGrade = function(){
//     let sum = this.grades.reduce((a,b)=>(a + b), 0);
//     return sum / this.grades.length
// }

// let students = [];

//  let lily = new Student("Lily","WenthWorth");
//  lily.inputNewGrades(80);
//  lily.inputNewGrades(90);
//  lily.inputNewGrades(100);
//  console.log(lily.computeAverageGrade());
// students.push(lily);
// console.log(lily);

//  let adam = new Student("Adam","Bennington");
// adam.inputNewGrades(70);
// adam.inputNewGrades(75);
// adam.inputNewGrades(80);
// console.log(adam.computeAverageGrade());
// students.push(adam)

//  let aaron = new Student("Aaron","Winchester");
//  aaron.inputNewGrades(60);
//  aaron.inputNewGrades(65);
//  aaron.inputNewGrades(70);
//  console.log(aaron.computeAverageGrade());
//  students.push(aaron)

//  console.log(students);
// //compute all average grades for all students
// let avgGradesAll = students.map((student)=>{
//     return student.computeAverageGrade()/students.length;
// }).reduce((a,b)=>(a + b),0)
// console.log("all students :" + avgGradesAll)

/**
 * Question 3
 * Add a new method named sort() without parameters in the buildt -in contsructor function Array
 * It'll sort all elements in the array in ascending order
 * 
*/

// Array.prototype.sort = function(){
//     for(let i = 0; i < this.length - 1;i++){
//         for(let j = 0; j < this.length - 1 - i;j++){
//             if(this[j] > this[j + 1]){
//                 let tmp = Array[j];
//                 this[j] = this[j + 1];
//                 this[j + 1] = tmp;
//                 // console.log("test");
//             }
//         }
//     }
//     return this;
// }

// const testArray = [90,87,12,3];
// testArray.sort();

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
    // result = this.printHelper(this, result);
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
