//Insertion Sorting

function Ascending(array) {
    for (let index = 1; index < array.length; index++) {
        let c = array[index];
        let j = index - 1;
        while (j >= 0 && array[j] > c) {
            array[j + 1] = array[j];
            j = j - 1;
        }
        array[j + 1] = c;
    }
    console.log(array);
}

function descending(array) {
    for (let index = 1; index < array.length; index++) {
        let c = array[index];
        let j = index - 1;
        while (j >= 0 && array[j] < c) {
            array[j + 1] = array[j];
            j = j - 1;
        }
        array[j + 1] = c
    }
    console.log(array);
}

let array1 = [22, 12, 6, 8, 1, 20, 34];
Ascending(array1);
descending(array1)
