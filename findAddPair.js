var array = [45, 22, 90, 24, 56, 78];
var findNumber = 46;
var flag = 0;
var obj = {};
for (let index = 0; index < array.length; index++) {
  for (let j = index + 1; j < array.length; j++) {
    var addition = array[index] + array[j];
    if (addition == findNumber) {
      obj[index] = array[index];
      obj[j] = array[j];
      flag = 1;
      break;
    }
  }
}
if (flag == 0) {
  console.log("the pair is not in list");
} else {
  console.log("find the pair", obj);
}
