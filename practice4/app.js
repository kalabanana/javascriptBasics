/**
 * Created by Mei on 7/8/17.
 */
//Name space


var english = {
    greetings:{
        basics: "Hello"
    }
}

var spanish = {}

spanish.greet = 'Halo';
console.log(english);
console.log(spanish.greet);


console.log('<---------->')


//object literal vs json
var objectLiteral = {
    firstname: "Mary",
    isAProgrammer: true
}

console.log(objectLiteral);

console.log(JSON.stringify(objectLiteral));

var jsonValue = JSON.parse('{"firstname": "Mary", "isAProgrammer": true}');

console.log (jsonValue);
console.log('<---------->')


//
var user = {
    firstname: "mary",
    lastname: "doe",
    getFullName(){
        return this.lastname + this.firstname;
    },

    toJSON: function () {
        var data = {
            firstname: this.firstname,
            lastname: this.lastname
        }
        return data;
    }
};
console.log(user);
console.log(JSON.stringify(user));
console.log('<---------->')


//this keyword example
function a(){
    console.log(this); //window
    console.log(this.newvariable = "hello!");//hello
}
a();

var c = {
    name :'this is C object',
    method: function () {
        var self = this; // added to ensure it points to the correct object

        //this.name = 'update c object name!'; //updates the name property in object c
        //console.log(this);

        self.name = 'update c object name!'; // first mutation remain in the c object
        console.log(self);

        var setname = function(newname){ //second mutation
            //this.name = newname;
            self.name = newname; // js engine will look to the scope chain where self lies at the above
        }
        setname('Fiannly updates the new object name!');
        //console.log(this); this keyword points to the global object
        console.log(self); //calls self instead of this
    }
}
c.method();
console.log('<---------->')


//functions

function sayHi (fname, lname, lang){
    lang = lang || 'en';

    if (lang === 'en' ){
        console.log (fname + lname + ' Hello!');
    }
    if (lang === 'es'){
        console.log (fname + lname + ' Hola!');
    }
}

function sayEnglish (fname, lname){
    sayHi(fname,lname,'en');
}
function sayEspanol (fname, lname){
    sayHi(fname,lname,'es')

}

sayHi('Qiu ', 'Mei', 'en');
sayHi('Qiu ', 'Mei', 'es');
sayEnglish('Q ', 'M ');
sayEspanol('Q ', 'M ');

console.log('<---------->')


// IIEF
//This is a function express
function statement (name){
    console.log("HI "+name);
}
statement('John');

//this is function statement
var expression = function (name){
    console.log('HI '+name);
}
expression('John');

//expression has been created
var iief = function (name){
    return 'HI '+name;
    // it will automatic return if use console.log
}('JOHN');

//now call the variable
console.log(iief);
console.log('<---------->')


//Closures

function buildFunction(){

    var arr = [];

    for(var i = 0; i < 3; i++){

        arr.push(

            function(){
                console.log(i);
            }
        )
    }

    return arr;
}

var callfunction = buildFunction();
callfunction[0]();
callfunction[1]();
callfunction[2]();
console.log('<---------->')


// the correct print out of array *****s

function buildFunction2() {
    var arr2 = [];

    for(var x = 0; x < 3; x++){
        // or let j = x; and console log (j)
        arr2.push(
            (function (j) {// creates its own execution context
                return function () {
                    console.log(j);
                }
            }(x))
        )
    }
    return arr2;
}
var runFunction = buildFunction2();
runFunction[0]();
runFunction[1]();
runFunction[2]();
console.log('<---------->')

//set time out

function time () {

    var greeting = 'Hi from time-out';

    setTimeout(function () {
        console.log(greeting);
    }, 3000)
    
}

time();
console.log('<---------->')

//infinite timer

/*var timeInterval = setInterval(function () {
    console.log(3);

}, 1000);*/

setTimeout(function () {
    console.log('Timeout');
},0);
function a(x) {
    console.log("a() start running");
    b(x);
    console.log("a() ended");
}
function b(y) {
    console.log("b() start running");
    console.log("The value is " +y);
    console.log("b() ended");

}
console.log("start the current task");
a(42);
console.log('<---------->')


//callback

function tellMeWhenDone(callback) {
    var a = 3000; //somework
    var b = 1000;

    callback(); //when it is done, it runs the function that i give it
}

tellMeWhenDone(function () {
    console.log('I am done!');
})

tellMeWhenDone(function () {
    alert('Alert; IT IS DONE');
})
console.log('<---------->')

// bind, call, apply passes parameter

var person = {
    firstname:'John',
    lastname:'Doe',
    getFullName: function () {

        var fullname = this.firstname+' ' + this.lastname;

        return fullname;
    }
}

var loggedName = function (lang1, lang2) {
    console.log('Logged: ' + this.getFullName());
    console.log('Arguments: '+lang1+' '+lang2);
    console.log('---------------')
}.bind(person); //.call or .appy also will works

loggedName();
console.log('<---------->')

// or

var loggedPerson = loggedName.bind(person); //makes a copy

loggedPerson('en');

loggedName.call(person, 'en','es'); //excutes it
loggedName.apply(person, ['en','es']);//it only works array argument
console.log('<---------->')


//function borrowing

var person2 ={
    firstname: 'Jasimine',
    lastname:'Doe',
}
console.log(person.getFullName.call(person2));//setting this keyword to person2 object

//you can borrow functions as long as you have similar property names. such as firstname and lastname
console.log('<---------->')

//function currying, does copy the function

function divide(x,y) {
    if (y===0){
        return console.log('invalid')
    }else return x/y;

}
var divideBytwo = divide.bind(this,2); //set x always to be 2 no matter what
var divideBythree = divide.bind(this,3);
console.log(divideBytwo(20));
console.log('<---------->')

//functional programming

function mapforEach(arr, func) {
    var newArr = [];

    for(var i=0;i<arr.length;i++){
        newArr.push(
            func(arr[i])
        )
    }
    return newArr;
};

var arr =[1,2,3];
console.log(arr);

var arr2 = mapforEach(arr, function (item) {
    return item * 2;
})
console.log(arr2);
var arr3 = mapforEach(arr, function (item) {
    return item > 2;
})
console.log(arr3);

var checkPastLimiter = function (limiter, item) {
    return item > limiter;
}

var arr4 = mapforEach(arr, checkPastLimiter.bind(this, 1));
console.log(arr4);

var simplifiedLimiter = function (limiter) {
    return function (limiter, item) {
        return item > limiter ;
    }.bind(this,limiter);
};

var arr5 = mapforEach(arr, simplifiedLimiter(1));
console.log(arr5);
console.log('<---------->')

//*** using map ***

var arr6 = _.map(arr, function (item) {
    return item * 3;
});

console.log(arr6);

var arr7 = _.filter([1,2,3,4,5,6,7], function (item) {
    return item %2 === 0;

});

console.log(arr7);

console.log('<---------->')


// prototype and extend

var people = {
    firstname:'Default',
    lastname:'Default',

    getFullname: function () {
        return this.firstname + ' ' + this.lastname
    }

}

var joseph ={
    firstname:'Joesph',
    lastname:'Doe'
}
console.log('<---------->')

//DO NOT USE THIS EVER!!!
joseph.__proto__= people;


for (var props in joseph){
    if (joseph.hasOwnProperty(props)){
        console.log(props+': '+joseph[props]);
    }
}

var olive = {
    address: '11 Main St.',
    getformalFullname: function () {
        return this.firstname + this.lastname;
    }
}

var garry = {
    getFirstName : function () {
        return firstname;
    }
}

_.extend(joseph,olive,garry);
console.log(joseph);
console.log('<---------->')

//new object

function Person (firstname, lastname) {
    console.log(this);
    this.firstname = firstname;
    this.lastname = lastname;
    console.log('this function is invoked!')
}

var john = new Person('John','Doe'); //creating new class first letter must be uppercase
console.log(john);

var jasmine = new Person('Jasmine','Doe')
console.log(jasmine);
console.log('<---------->')

// date

new Date();

var today = new Date();

console.log(today);
console.log('<---------->')


/// css in console log

var number = 11 * 9;

var color = 'red';

console.log ('%d %s ballons', number,color);
//99 ballons

console.log('%cThis text is styled!', 'color:red; background: yellow; font-size:24px;'
)
console.log('<---------->')

// a table
console.table();
var languages =[
{name: "Javascript", fileExtension:".js"},
{name: "TypeScript", fileExtension:".ts"},
{name: "CoffeeScript", fileExtension: ".coffee"}
];

console.table(languages);

console.log('<---------->')

//create new object

var human = {
    firstname :'Default',
    lastname: 'Default',
    greet: function () {
        return 'Hi '+ this.firstname;
    }
}

var joe = Object.create(human);
joe.firstname = 'Joesph';
joe.lastname = 'Doe';
console.log(joe);

////////
var fullname = 'John Doe';
var obj = {
    fullname: 'Colin Ihrig',
    prop: {
        fullname: 'Aurelio De Rosa',
        getFullname: function() {
            return this.fullname;
        }
    }
};

console.log(obj.prop.getFullname());

var test = obj.prop.getFullname;

console.log(test());

//
var a = [2,3,1];
a.concat(a);
function indexOfZero(){
    a.sort(function(a,b) {
        return a-b;})
    return a[0];}

console.log(indexOfZero);