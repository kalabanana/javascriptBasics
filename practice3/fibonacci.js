/**
 * Created by Mei on 7/14/17.
 */

function fibonacci(number) {

    if(number <= 1 && number > 0){
        return number;
    }
    else{
        return fibonacci(number-1) + fibonacci(number-2);
    }
}
console.log(fibonacci(12));