/**
 * Created by Mei on 7/14/17.
 */
/*var arr = [2,5,4,8,9];

function bubbling(li) {
    li = arr.length;
    arr2 = {};
    for(var i = 0; i< li; i++){
        if(i-1 > i){
            console.log(i.indexOf());
        }
    }
}

bubbling(arr);*/

var a = [34, 203, 3, 746, 200, 984, 198, 764, 9];

function bubbleSort(a)
{
    var swapped;
    do {
        swapped = false; //define swapped is at false state
        for (var i=0; i < a.length-1; i++) { //length-1 = 8
            if (a[i] > a[i+1]) { // if the previous index greater than the next index
                var temp = a[i];  //temp value is the previous index
                a[i] = a[i+1]; // value is now the next index
                a[i+1] = temp; // next index goes back to the temp value
                swapped = true; //swap function set true
            }
        }
    } while (swapped);
}

bubbleSort(a);
console.log(a.toString());