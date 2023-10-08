//13.function.js

//SIMPLE FUNCTION
console.log("SIMPLE FUNCTION...............................myF")
function myf(){
    var x=10
    var y=1
    var z=x+y
    console.log(z)
}
myf();  // Output will be 11

//__________________________________________________________________
//__________________________________________________________________
//PARAMITERIZED FUNCTION
console.log("PARAMITERIZED FUNCTION...........................myF1")
function myf1(x,y){
    
    var z=x+y
    console.log(z)
}
myf1(10,22) //output will be 32

//__________________________________________________________________
//__________________________________________________________________
//REST PARAMETER FUNCTION
console.log("REST PARAMETER FUNCTION...........................myF3")
function myF3(...x){ // 3 dot plus paramente =rest parameter

 console.log(x); // output will be an array
 // [
//     1, 2, 3, 4,
//     5, 6, 7
//   ]


 // we can add index 
 console.log(x[2]);  //output will be 3
}
myF3(1,2,3,4,5,6,7); 
//__________________________________________________________________
//__________________________________________________________________
//RETURN FUNCTION ===== (It can retuen anything)

console.log("RETURN FUNCTION...........................myF4,myF5,myF6,myF7")

//type 1
//_________
function myF4(x,y){
    
    return x+y // it can return string,int,float,double
    //now return ==x+y
}
myF4(10,22)
console.log(myF4(10,22))  // output will be 32

//Type 2
//_________

function myF5(){
    return 2// here retuen == 2
   }
console.log(myF5()+myF4(12,4)); // output will be  18



//Type 3
//__________
function myF6(){
 return "rakib"// here retuen == rakib
}
console.log(myF6());// output will be rakib

// we can calculate by function



//Type 4
//__________

function myF7(){
    return myF4(10,20); // Its retuen another function
   
}
 console.log(myF7()) // output will be 30
//__________________________________________________________________
//__________________________________________________________________

//Anonyomous Function == wihtout name function(**IT CAN BE REASSIGNED)
console.log("Anonyomous Function == wihtout name function..........")
 //Type 1
 //------
var f=function(){
    return " hello"
 }
console.log(f())  // output will be hello

//Type 2
//---------
var f1=function(x){
    return x
 }
console.log(f1("hello rakib")) // output will be "hello rakib"

//Type 3
//-------

var f2=function(...x){
    return x
 }
console.log(f2(1,2,4,6)) // output will be [ 1, 2, 4, 6 ]
//__________________________________________________________________
//_____________________________________________________________________________________

//Arroe function
console.log("Arroe function=Anonyomous Function (thats why iot can return anything)...................")

// SYNTAX              ()=>{}



//Type 1
//---------
let MyAr=()=>{
   console.log("my first arrow function") // my first arrow function
}
MyAr();



//Type 2
//---------
let MyAr1=(a)=>{
    console.log(a) // my first arrow function1
 }
 MyAr1("my first arrow function1");



//Type 3
//---------
let MyAr2=(...a)=>{
    console.log(a) // [ 1, 2, 3, 4, 5 ]
 }
 MyAr2(1,2,3,4,5);


 //Type 4
//---------
let MyAr3=()=>{
     return "Hello im Arrow function MyAr3"
 }
console.log( MyAr3()); //Hello im Arrow function MyAr3
