//6.variableScope.js

function myF(){
    var name="im rakibn"
    console.log(name);
}
myF();//console.log(name);  local scope so can not console becose that is inside the scope

//ANOTHER EXAMPLE
var name1="RAKIB"
function myF1(){
    console.log(name1)
}
myF1();// RAKIB  it means it works