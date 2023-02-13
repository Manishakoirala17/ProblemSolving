function ascending(array) {
    for (let index = 0; index < array.length; index++) {
        let minIndex = index;
        for (let j = index + 1; j < array.length; j++) {
            if (array[j] < array[minIndex]) {
                minIndex = j;
            }
        }
        if (index != minIndex) {
            let temp = array[index];
            array[index] = array[minIndex];
            array[minIndex] = temp;
        }
    }
    console.log(array);

}
function descending(array) {
    for (let index = 0; index < array.length; index++) {
        let maxIndex = index;
        for (let j = index + 1; j < array.length; j++) {
            if (array[j] > array[maxIndex]) {
                maxIndex = j;
            }
        }
        if (index != maxIndex) {
            let temp = array[index];
            array[index] = array[maxIndex];
            array[maxIndex] = temp;
        }
    }
    console.log(array);
}
let array1 = [22, 12, 6, 8, 1, 20, 34];

ascending(array1)
descending(array1)