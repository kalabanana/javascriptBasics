/**
 * Created by Mei on 7/11/17.
 */

/*function add(a,b) {
    if (!a === NaN && !b === NaN){
        return a + b;
    }
    else {
        return function (b){
            return a+b;
        };
    }

}*/
function add(a,b){
    var val = function (b){
        return a+b;
    };
    if(typeof b =='undefined'){
        return val;
    }else{
        return val(b);
    }
}
var a = [1,2,3,4];
var b = [3,4];

console.log(add(2,5));
console.log(add(2)(5));


function reverse(str){
    if(str === ""){
        return "";
    }else {
        return reverse(str.substr(1)) + str.charAt(0);
    }
}
console.log(reverse('sfddsfg'));


// by dajie

function doubleCheck(a, b) {
    result = [];

    result = result.concat(a.filter((e) => b.indexOf(e) === -1));
    result = result.concat(b.filter((e) => a.indexOf(e) === -1));

    return result;
}

///
var text = 'aaabbaaaa';
function charCount(str) {

    var count = 1;
    var previousChar = str.charAt(0);
    var characters = '';

    for (var i = 1; i < str.length; i++) {
        var currentChar = str[i];
        if(previousChar === currentChar) {
            count++;
        } else if (count === 1) {
            characters += previousChar;
            previousChar = currentChar;
        } else {
            characters += previousChar + count;
            previousChar = currentChar;
            count = 1;
        }
    }

    if (count === 1) {
        characters += currentChar;
    } else {
        characters += currentChar + count;
    }
    return characters;
}

console.log(charCount(text));

//JSON Stringify
var list = [
    {user:"mike", age:19},
    {user:"mike", age:21},
    {user:"mike", age:19},
    {user:"Dave", age:31},
    {user:"Tom", age:18},
    {user:"Tom", age:18},
];
var jsvalue = JSON.stringify(list);
console.log(jsvalue.toLocaleString([0]));

/*
var hist = {};
jsvalue.map( function (a) { if (a in hist) hist[a] ++; else hist[a] = 1; } );
console.log(hist);

hist = jsvalue.reduce( function (prev, item) {
    if ( item in prev ) prev[item] ++;
    else prev[item] = 1;
    return prev;
}, {} );
console.log(hist);
*/


//////
var list2 = [
    {user:"mike"},
    {user:"mike"},
    {user:"mike"},
    {user:"Dave"},
    {user:"Tom"},
    {user:"Tom"},
];

var uniq = new Set();

list2.forEach(e => uniq.add(JSON.stringify(e)));

//var res = Array.from(uniq).map(e => JSON.parse(e));
console.log(uniq);



counter = {}
list2.forEach(function(obj) {
    var key = JSON.stringify(obj)
    counter[key] = counter[key]+1 || 1;
})

console.log(counter);

list2.reduce((count, per)=>{
    count[per] = (count[per] || +1);
    return count;
},[]);



var a = new Set ([1,2,3,4]);
var b = new Set ([2,3,4]);
var intersection = [...a].filter(a1 => b.has(a1) );
console.log(intersection);

///


var list3 = [1,2,3,5,6,7];

for (var i = 0; i < list3.length; i++) {
    (function(index) {
        setTimeout(function() {
            console.log("index:"+index +" value:"+list3[index]);
            }, i * 2000);
    })(i);
}



//check whether it has scripts

var scripts = document.scripts;

if (scripts.length !== 0){
    console.log('Current page has script');
}

// var person = {
//     name: "Jerry"
// };
//
// var proxy = new Proxy(person, {
//     get: function(target, property) {
//         if (property in target) {
//             return target[property];
//         } else {
//             throw new ReferenceError("Property \"" + property + "\" does not exist.");
//         }
//     }
// });
//
// proxy.name //"jerry"
// proxy.age //Exception


let unique = function (arr) {
    var table ={}
    var data = []
    for(let i = 0; i< arr.length; i++){
        if(!table[arr[i]]){
            table[arr[i]] = true;
            data.push(arr[i]);
        }
    }
    return data;
}

var sentence = "blah blah";

unique(sentence);


// function reverse(str) {
//     var str = '';
//     if(str === ""){
//         return str = "";
//     }else{
//         return reverse(str.substr(1)+str.charAt(0))
//     }
// }