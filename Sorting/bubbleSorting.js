
function Ascending(array) {
    for (let index = 0; index < array.length; index++) {
        for (let j = 0; j < array.length - index; j++) {
            if (array[j] > array[j + 1]) {
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
    return array;
}

function descending(array) {
    for (let index = 0; index < array.length; index++) {
        for (let j = 0; j < array.length - index; j++) {
            if (array[j] < array[j + 1]) {
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
    return array;
}



let array1 = [22, 12, 6, 8, 1, 20, 34];

let asc = Ascending(array1);
console.log(asc);
let dec = descending(array1);
console.log(dec);