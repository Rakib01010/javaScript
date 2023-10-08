//21.1inheritance1.js

// parent class and child class but chile power is more than parent
class parent{
    hello1(){
       console.log("hello1 function1");
    }
    hello2(){
       console.log("hello1 function2");
    }
   }
   
   // we increase chileName extends parentsname
   class child extends parent {
   // child can change parent item =overwriting
   hello1(b){
    console.log(b);
 }
   hello2(a){
    console.log(a);
     }

   
   }
   
   let obj =new child;
let x=   obj.hello1(4); 
 let y=  obj.hello2(2);

// output will be 4 and 2

//HERE IS A PROBLEM****************
//we can calculate 
//console.log(obj.hello2(2)+obj.hello1(4));   