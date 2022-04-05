
/**
 * 
 * Global lexical environment(LE)
 * LE for make Army()
 * LE for LE of the while loop
 * LE for army[0]
 * 
 */

/*    
 ----------------------------------------------------------
|army[0] EX:creation -> execution           | TDZ:         |
|  LE{0}                                    |     0        |
|                        outer:global       |              |
 ----------------------------------------------------------
                             ^                        
 ----------------------------------------------------------
|shooter EX:creation -> execution           | TDZ:         |
|                                           |              |
|                        outer:while        |              |
 ----------------------------------------------------------
                             ^                     
 ----------------------------------------------------------
|while EX:creation -> execution             | TDZ:         |
|LE{shooter }                               |    shooter   |
|                        outer:makeArmy     |              |
 ----------------------------------------------------------
                             ^                                                        
 ----------------------------------------------------------
|makeArmy EX:creation -> execution          | TDZ:         |
|LE{shooters, i }                           | shooters,i   |
|                        outer:global       |              |
 ----------------------------------------------------------
                             ^                          
 ----------------------------------------------------------
|global EX:creation -> execution            | TDZ:         |
|LE{func:makeArmy}                          | army         |
|                        outer:null         |              |
 ----------------------------------------------------------

*/

// function makeArmy(){
//     let shooters = [];
//     let i = 0;
//     while(i < 2){
//         let shooter = function(){
//             alert(i);
//         }
//         shooters.push(shooter);
//         i++;
//     };
//     return shooters;
// }
// let army = makeArmy();
// army[0];

// what will army[0] alert?
// It won't alert because i is not initialized

//Can you fix the code
function makeArmy() {
    let shooters = [];
    let i = 0;
    while (i < 2) {
        let shooter = (i) => {
            console.log(i);
        }
        shooters.push(shooter);
        i++;
    }
    return shooters;
}

let army = makeArmy();
// army[0];

army.forEach((item, idx) => {
    item(idx);
});

//How will the diagram change
//  ----------------------------------------------------------
// |army function EX:creation -> execution     | TDZ:         |
// |  LE{0 - > 1}                              |     0 ->1    |
// |                        outer:global       |              |
//  ----------------------------------------------------------

/**
 * Question 2 
 * write a function printNumbers(from, to) that outputs every number every second start from end to
 */

function printNumbers(from, to) {

    let timerx = setInterval(() => {
        console.log(from)
        from += 1;
        if (from > to) {
            clearInterval(timerx);
        }
    }, 1000, from, to)

}

printNumbers(1, 10);

/**
 * Question 3
 * in the code below there is a setTimeOut call scheduled,then a heavy calculation is run,that takes more than 100ms to finish
 * 
 * When will the sheduled function run?
 * After the loop
 * Before the loop
 * In the begginning of the loop
 * what is the alert going to show
 * 
 */

// after the loop
// the alert going to show 100000000
// I think it's because the sync(for loop) code part execute before async(setTimeout) code


let i = 0;

setTimeout(() => {
    alert[i]

}, 100);

for(let j = 0; j < 100000000;j++){
    i++;
}