
//10.objectBasic.js
//Example 2 object in object  =Nasted object
const obj={
    //object in a abject 
    rakib:{// another object
        name:"rakib",
        color:"brown",
        age:22,
        number:"0199723",
        about:()=>{
            console.log("${this.name}'s color is${this.color} and number is ${this.number}")
        }

    },
    //another objectcin the object
    sakib:{// another object
        name:"sakib",
        color:"white",
        age:21,
        number:"01997",
        about:()=>{
            console.log(this);
            
            
        }


    },
    
}
console.log(obj['rakib'])// calling a rakib object
console.log(obj['sakib'])// calling a sakib object

console.log(obj['rakib']['name'])// calling a rakib object's object
console.log(obj['sakib']['name'])// calling a sakib object's object
