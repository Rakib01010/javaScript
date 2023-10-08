//classConstructor.js


// it is called  then object is created so dent need t o call****
//it can not return****
// one class must have one constractor****
class myClass{
    constructor(){
        console.log("this is constructor"); 
    }
}
new myClass;

console.log('______________________________________________________________');
//Parameter with constractyor
class myClass1{
    constructor(a,b){
     console.log(a+b);
    

    }
}
new myClass1(1,3); //4

console.log('______________________________________________________________');
// example 3
class myClass2{
    constructor(a,b){
        // we can assign this
     this.n1=a; // we can use this in this keywork to access from other fucntion in the class
     this.n2=b;
    }
    add(){
        // we will use that assigned value
        let x=this.n1+this.n2+this.n1+this.n2
        console.log(x);//8
        console.log(this.n1+this.n2);//4
    }
}
var obj=new myClass2(1,3); //4 // perameterrized constructor
obj.add();// to call the object we need to creat object