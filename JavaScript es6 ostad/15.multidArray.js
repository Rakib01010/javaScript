//15.multidArray.js
const arr1=new Array(1,2,3,4);
const arr2=[5,6,7,8];
const arr3=[10,11,12,13];
const total=[arr1,arr2,arr3];
console.log(total);

// [ [ 1, 2, 3, 4 ], [ 5, 6, 7, 8 ], [ 10, 11, 12, 13 ] ]
// if we want 5
console.log(total[1][0]);  //5  [1]---> is aar2 ans [0] is arr2 arrays first item