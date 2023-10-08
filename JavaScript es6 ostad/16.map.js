//16.map.js
var map =new Map();
// Syntax    mapName.set('key','value')   NB: key must be diffrent
map.set('key1','bangladesh');
map.set('key2','india');
map.set('key3','pakistan');
map.set('key4','srilanka');
console.log(map.values());//{ 'bangladesh', 'india', 'pakistan', 'srilanka' }
console.log(map.keys()); //{ 'key1', 'key2', 'key3', 'key4' }


//LOOP works
//___________
for(let myValue of map.values()){
  console.log(myValue);
// bangladesh
// india
// pakistan
// srilanka
}

for(let mykey of map.keys()){
    console.log(mykey);
// key1
// key2
// key3
// key4
  }


  //MODIFIE map
  //____________ __________________   delete("key"),get("key"),clear(),has("key")
//delete(key)
  map.delete("key1"); //delete(key)  --> it will delete thats key's value
for(let myValue of map.values()){
    console.log(myValue);
  // india
  // pakistan
  // srilanka
  }

// //clear()
// map.clear();
// console.log(map);  //Map(0) {}


//get(key)-----> particular value;
console.log(map.get("key3"));//pakistan


//has(value)  ----> true and false
console.log(map.has("key1")); // false true and false


//NB: commment clear() to se get()