//18.class.js
// we can not  call function from other function in the class
class className{
    // here we don't need to decelear function keyword
     myF(){
     console.log("im from function inside class");
    }
    myF1(){
        console.log("im from function1 inside class");
       }
     myF2(){
        console.log("im from function2 inside class");
       }   
    myF3(){
       return 6;
       }
    myF4(){
        return 5;
        }       
}
// first creat object 
var obj1=new className;
obj1.myF();// im from function inside class
obj1.myF1();// im from function1 inside class
obj1.myF2();// im from function2 inside class
console.log(obj1.myF3()+obj1.myF4()); //11

