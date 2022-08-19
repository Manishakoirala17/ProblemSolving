var value1 = "aba";
var length = value1.length;
var lastIndex = length - 1;
var count = 0;
for (let index = 0; index < length; index++) {
  if (value1[index] == value1[lastIndex]) {
    count++;
    lastIndex--;
  }
}
if (length == count) {
  console.log("word is palindrome");
} else {
  console.log("not palindrome");
}
