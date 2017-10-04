/**
 * Created by Mei on 7/14/17.
 */
function isPrime(number) {
    var divisor = 3;
    if(number <= divisor){
        return true;
    }
    else if(number < 0){
        console.log('please enter positive number!');
    }

    while(number > divisor){
        if(number % divisor == 0)
        {
        return false;
        }else {
            divisor++;
        }
        return true;
    }

}
console.log(isPrime(42));
console.log(isPrime(13));

//<------------------------>

function isPrime(n)
{
    var divisor = 3,
        limit = Math.sqrt(n);

    //check simple cases
    if (n == 2 || n == 3)
        return true;
    if (n % 2 == 0)
        return false;

    while (divisor <= limit)
    {
        if (n % divisor == 0)
            return false;
        else
            divisor += 2;
    }
    return true;
}

console.log(isPrime(137));

//THIS IS THE BETTER VERSION!

