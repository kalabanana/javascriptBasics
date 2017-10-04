/**
 * Created by Mei on 7/14/17.
 */
function insertionSort(array) {
    var length = array.length;

    for(var i = 1; i < length; i++) {
        var temp = array[i];
        for(var j = i - 1; j >= 0 && array[j] > temp; j--) {
            array[j+1] = array[j];
        }
        array[j+1] = temp;
    }

    return array;
}

var a = [3,4,6,8,6,5,1,23];

insertionSort(a);

console.log(a.toString());