
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



function askPassword(ok,fail){
    let password = prompt("password","");
    if(password == "rockstar") ok();
    else fail();
}

let user = {
    name : "john",

    loginOk(){
        alert(`${this.name} logged in`)
    },

    loginFail(){
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

let group = {
    title: "Our group",
    students: ["John", "Peter", "Alice"],
    showList: function () {
        this.students.forEach(function (student) {
            console.log(this.title + ":" + student);
        }.bind(this));
    }
}

group.showList();
