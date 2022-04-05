/**
 * Question 1: Fix using wrapper, bind, call, apply.
 * the call to askPassword() in the below should check the password should
 * call user.loginOk/loginFail depending on the answer
 * 
 * but it leads to an error.Why?
 * Fix the highlight line for everything to start working right
 * (other lines are not to be changed)
 */

"use strict"

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

askPassword(user.loginOk, user.loginFail);

// Wrapper function
function wrapperfunc() {
    askPassword(user.loginOk, user.loginFail);
}
wrapperfunc();

// bind
askPassword(user.loginOk.bind(user), user.loginFail.bind(user));

// bind call
askPassword(user.loginOk.bind(user), user.loginFail.bind(user));
askPassword(() =>
    user.loginOk.call.user
    , () => user.loginFail.call.user);

//bind apply
askPassword(user.loginOk.bind(user), user.loginFail.bind(user));
askPassword(() =>
    user.loginOk.apply.user
    , () => user.loginFail.apply.user);

/**
 * Question 2
 * fix the code below using bind
 */

// let group = {
//     title: "Our group",
//     students: ["John", "Peter", "Alice"],
//     showList: function () {
//         this.students.forEach(function (student) {
//             console.log(this.title + ":" + student);
//         });
//     }
// }

// group.showList();

// First way change the function to an Arrow function

// let group = {
//     title: "Our group",
//     students: ["John", "Peter", "Alice"],
//     showList: function () {
//         this.students.forEach( (student) => {
//             console.log(this);
//             console.log(this.title + ":" + student);
//         });
//     }
// }

// group.showList();

// Second way use bind

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
