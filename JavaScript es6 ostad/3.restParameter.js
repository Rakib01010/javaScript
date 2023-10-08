//3.restParameter.js
function myf(...x){
    //Example 1
console.log(x);  // returns an Array [ 1, 3, 4, 5, 6 ]

for(let item of x){
       //Example 2
    console.log(item);
    //it will give        1
    // 3
    // 4
    // 5
    // 6
}
         //Example 3
let total=0;
for(let items of x){

total+=items;

}
console.log(total); //19
}
myf(1,3,4,5,6);
