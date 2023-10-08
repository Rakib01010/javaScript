//22.super.js
//---> we can call chile method from parent method(only in Inharitence)

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
      childF(){
     super.hello1(); // we called parent method in a chile method
     super.hello2(); // we called parent method in a chile method
      }
   }
   
   let obj =new child;
   obj.childF(); // here we called the method which is inside the child

   //output will be
//    hello1 function1
//    hello1 function2
