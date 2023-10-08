//21.0inheritance.js

// parent class and child class
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


    //now all in child
    // hello1(){
    //     console.log("hello1 function");
    //  }
    //  hello2(){
    //     console.log("hello1 function");
    //  }

}

let obj =new child;
obj.hello1();
obj.hello2();