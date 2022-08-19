var arr1 = [1, 3, 4, 5, 5, 3];
var arr2 = [];
var obj = {};
for (let index = 0; index < arr1.length; index++) {
  var key = arr1[index];
  if (!obj[key]) {
    obj[key] = 1;
  } else {
    console.log("2", key);
    obj[key] = obj[key] + 1;
  }
}
console.log(obj);
for (const key in obj) {
  console.log(key, obj[key]);
  var val = parseInt(key);
  arr2.push(val);
}
console.log(arr2);
// for (let index = 0; index < arr1.length; index++) {
//   var count = 0;
//   for (let j = 0; j < arr1.length; j++) {
//     if (arr1[index] === arr1[j]) {
//       count++;
//     }
//   }
//   if (count == 1) {
//     arr2.push(arr1[index]);
//   }
// }
// console.log(arr2);
