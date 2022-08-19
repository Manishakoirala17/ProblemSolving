var string = "Manishakoirala";
var obj = {};
for (let index = 0; index < string.length; index++) {
  var key = string[index];
  if (obj[key]) {
    obj[key] = obj[key] + 1;
  } else {
    obj[key] = 1;
  }
}
console.log(obj);
// for (let index = 0; index < string.length; index++) {
//   var count = 0;
//   for (let j = 0; j < string.length; j++) {
//     if (string[index] == string[j] && index > j) {
//       //   console.log(index, j);
//       break;
//     }
//     if (string[index] == string[j]) {
//       count++;
//     }
//   }
//   if (count > 0) {
//     console.log(string[index], "-", count);
//   }
// }
