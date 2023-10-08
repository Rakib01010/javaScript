//20.static.js
class myc{
    static hello(){
       console.log("hello static"); //hello static"
    }
   
   }
// directly from class
myc.hello();






//on the other hand
class myc1{
 hello1(){
    console.log("hello obj");
 }

}
var obj =new myc1;
// dircrely from object
obj.hello1();