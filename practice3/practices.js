let numbers = [2,4,5,6,7];
let sum = (numbers.forEach((number)=>{
    sum+=number;
})());

console.log(sum);

var doubleNum = numbers.map(number=>{
    return number * 2;
})

console.log(doubleNum);

numbers.sort(
    function (a,b) {
        return a-b;
    }
)

cars.sort(function(a, b){
    var x = a.type.toLowerCase();
    var y = b.type.toLowerCase();
    if (x < y) {return -1;}
    if (x > y) {return 1;}
    return 0;
});

var text = "dsgdfhfd";

function revString(str){
    if(str === ""){
        return "";
    }
    else {
        return revString(str.substr(0)) + str.charAt(1);
    }
}

function reverse(str){
    var reversed = "";
    if(str ===""){
        return "";
    }
    for(let i =0; i<str.length(); i--){
        reversed.push(str[i]);
    }
    return reversed;
}

function reverseString(str) {
    let newString = "";
    for(let i = str.length-1; i>=0; i--){
        newString += str[i];
    }
    return newString;
}

function reverseSort(str){
    var string2 = str.split("").reverse().join("");
    return string2;
}

function repeat(str, num){
    var newString = "";
    while(num>0){
        newString+=str;
        num--;
    }
    return newString;

}

function repeat2(str, num) {
    return num>0 ? str.repeat(num) : "";
}

function repeat3(str, num){
    if(num === 0){
        return ""
    }else if (num === 1){
        return str;
    } else {
        return str + repeat3(str, num-1);
    }
}

function factorialize(num){
    if(num < 0){
        return -1;
    }else if( num === 0){
        return 1;
    }
    else {
        return (num * factorialize(num - 1));
    }
}

function capitalizeFirstLetter(str){
    str = str.toLowerCase().split(" ");
    for(var i =0; i < str.length; i++){
        str[i]= str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    return str.join(" ");
}

function capital(str){
    str = str.toLowerCase().split(" ").map((word)=>{
        return (word.charAt(0).toUpperCase() + word.slice(1))
    }).join(" ");
    return str;
}


function capitalize(str){
    str = str.toLowerCase().split(" ").map( (word)=>{
        return word.replace(word[0], word[0].toUpperCase())
    })
    return str;
}

function counter(){
    var counter = 0;
    return function count(){
        counter ++;
        return counter;
    }
}
var count1 = counter();
var count2 = counter();

//these two counters will return "1"

function classroom(){
    var instructors = ['Ellie','Emily','Tom'];
    return{
        getInstructor: function () {
            return instructors.slice();
        },
        addInstructor: function (instructor) {
            return instructors.push(instructor).slice();
        }
    }
}

var firstRoom = classroom();
firstRoom.addInstructor("Mei");

//better version


var products =[
    {name:'apple',type:'fruit'},
    {name:'orange',type:'fruit'},
    {name:'cucumber',type:'vegetable'}
]
products.filter(product =>{
    return product.type === 'fruit';
})


var post = {id:4, title:'New Post'};
var comments = [
    {postId:4, content:'comment by id 4'},
    {postId:3, content:'comment by id 4'},
    {postId:4, content:'comment by id 4'}
];

function filterComments(post, comments){
    return comments.filter((comment) => {
        return comment.postId === post.id;
    })
}

function ending(str, char){
    if(str.substr(-char.length)=== char){
        return true;
    }else {
        return false;
    }
}

function confirmEnding(str,char) {
    return str.endsWith(char);
}

function sum(str){
    var sum=0;
    str.split("").map(letter=>{
        return sum+=letter.charCodeAt(letter);
    })
    return sum;
}

function palindrome(str){
    var len = Math.floor(str.length/2);
    for(var i = 0; i<len; i++){
        if(str[i] !== (str.length - i -1)){
            return false;
        }
        else return true;
    }
}

function isPalindrome(str){
    var front = 0;
    var back = str.length-1;
    while(front<back){
        if(str.charAt(front) !== str.charAt(back)){
            return false;
        }
        front++;
        back--;
    }
    return true;
}

var longestPalindrome = function (string) {
    var longest = '';
    for (var i = 0; i < string.length; i++) {
        var currentLetter = string[i];

        for (var j = i + 1; j < string.length; j++) {

            var subString = string.slice(i, j + 1);

            if (subString.length > longest.length &&
                subString.toLowerCase() === subString.split('').reverse().join('').toLowerCase()) {
                longest = subString;
            }
        }
    }
    return longest;
};

const fruit = ['banana', 'cherry', 'orange', 'apple', 'cherry', 'orange', 'apple', 'banana', 'cherry', 'orange', 'fig' ];

fruit.reduce((counter, fruit)=>{
    counter[fruit] = (counter[fruit]|| 0) + 1;
    return counter;
},[]);
// [] = initial value, by defining an empty array, elements will be pushed into the new array

const data = [
    {a: 'happy', b: 'robin', c: ['blue','green']},
    {a: 'tired', b: 'panther', c: ['green','black','orange','blue']},
    {a: 'sad', b: 'goldfish', c: ['green','red']}
];

data.reduce((total,amount)=>{
    amount.c.forEach((color)=>{
        if(total.indexOf(color) === -1){
            total.push(color);
        }

    })
    return total;
},[]);