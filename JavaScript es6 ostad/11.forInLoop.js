//11.forInLoop.js
//VVI
//to call the proparty only 'proparty'********
//to call the value 'objec[proparty]'*********


// we use it in object 
var Arr={
    name:"rakib",
    age:12,
    address:"satkhira"
}
console.log("THIS IS LOOF 1 TO GET PROPARTIES_________________1")
//EXAMPLE 1
//THIS IS LOOF 1 TO GET PROPARTIES
for(let Proparty in Arr){
    console.log(Proparty);// here we want proparties
    // Output will be
    // name
    // age

}


console.log("THIS IS LOOP 2 TO GET VALUE____________________2")
//EXAMPLE 2
//THIS IS LOOP 2 TO GET VALUE 
 for(let Proparti in Arr){
   
     console.log(Arr[Proparti]);   //here we wanted value
   
    //Output will be the value
    // rakib
    // 12
    // satkhira

}


console.log("THIS IS LOOP 3 TO GET PROPARTIES = VALUE___________3")
//EXAMPLE 3
//THIS IS LOOP 3 TO GET PROPARTIES = VALUE 
for(let Prop in Arr){
   
    console.log(Prop +" = "+  Arr[Prop]);   //here we wanted proparty=value
  
   //Output will be the value
   // name =rakib
   // age = 12
   // address =satkhira

}