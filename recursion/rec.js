//  function factorial(n){
//  if (n === 0){
//     return 1;
//  }
//  return  n * factorial(n-1);
// }

console.log(factorial(5));


//  using Indirect recursion, it is a bawasir you have to do operation to get rid of it

 function factorial(n){
 if (n === 0){
    return 1;
 }
 let val = logic(n);
 return val
}

function logic(n){
    return  n * factorial(n-1);
}