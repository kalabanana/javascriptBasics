/**
 * Created by Mei on 7/15/17.
 */
/*Given an array containing n distinct numbers taken
from 0, 1, 2, ..., n, find the one that is missing from the array.

 // Java program to find missing Number

 class Main
 {
 // Function to ind missing number
 static int getMissingNo (int a[], int n)
 {
 int i, total;
 total  = (n+1)*(n+2)/2;
 for ( i = 0; i< n; i++)
 total -= a[i];
 return total;
 }

/* /!* program to test above function *!/
public static void main(String args[])
{
    int a[] = {1,2,4,5,6};
    int miss = getMissingNo(a,5);
    System.out.println(miss);
}
}
 *!/*/

function getMissingNo(arr, num){
    var total;
    total = (num +1) *(num+2)/2;

    for(var i = 0; i<num ; i++){
        total -= arr[i];
    }
    return total;
}

var arr = [1,2,3,5,6];
var missing = getMissingNo(arr,5);
console.log(missing);

