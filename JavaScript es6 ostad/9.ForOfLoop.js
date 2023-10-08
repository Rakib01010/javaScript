//9.ForOfLoop.js

let Arr=['rakib','sakib','sajid','tamim']
for(let oneName of Arr){
    console.log(oneName)
}
//The output will be 
// rakib
// sakib
// sajid
// tamim

//Another way
Arr.forEach((value) =>{
    console.log(value);

});
// rakib
// sakib
// sajid
// tamim