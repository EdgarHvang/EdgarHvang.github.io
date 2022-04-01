//Create a function using function declaration named sum with one parameter of Array type, the
// returned result is the sum of all elements which are greater than 20.
function sum(param){
    let res = 0;
    for(let i = 0; i < param.length;i++){
      if(param[i] > 20){
        res += param[i];
      }
    }
    return res;
  }
  
  let testarr = [21,34,3,4,5];
  sum(testarr);