/*
/!**
 * Created by Mei on 7/15/17.
 *!/
/!*. Given an array of size n, find the majority element.
The majority element is the element that appears more than ⌊ n/2 ⌋ times.*!/

var arr = [3,4,4,5,7,8,4,5,3,2,1];

function findElement(arr) {
    var newArr = [];
    if(arr.length == 1){
        return arr[0];
    }
    arr.sort(function () {
        while(arr.length > 0){
            return newArr = arr.push(arr(arr.length/2));
        }
    })
}

console.log(findElement(arr));*/
