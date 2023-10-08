//17.set.js
var sets= new Set();
sets.add("rakib");
sets.add("hasib");
sets.add("sakib");
sets.add("tamim");
sets.add("hasib");// set will not count this because it is double used
console.log(sets); //{ 'rakib', 'hasib', 'sakib', 'tamim' }
//NB:set will not count this because it is double used but map can do

//Ex2
//___________________________________
//_________________________________
var sets1= new Set(['a','a','b','c']);
console.log(sets1); // { 'a', 'b', 'c' }

//MORE about sets
// clear(),delete(),has(),values(),set.size
// clear()
sets1.clear();
console.log(sets1); //{}

//delete('the value)
sets.delete('rakib');
console.log(sets); //{ 'hasib', 'sakib', 'tamim' }

// setName.sixe
console.log(sets.size); //3

//setName.values()
console.log(sets.values());// { 'hasib', 'sakib', 'tamim' }

//setName.has()---> to fine the value is there is or not
console.log(sets.has('sakib'));//true