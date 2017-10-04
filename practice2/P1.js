/**
 * Created by Mei on 7/14/17.
 */
/*1.Singleton constructor


 Ex：use “new” keyword is create new instance;


 Var instance1 = new Singleton();


 Var instance2 = new Singleton();


 Console.log(instance1 == instance2);*/

class Singleton{
    constructor(){
        if(!Singleton.instance){
            Singleton.instance = this;
        }
        else {
            return Singleton.instance;
        }
    }
}

const sing = new Singleton();
const sing2 = new Singleton();

console.log(sing == sing2);


var singleton = (function(){

    var instance

    function createInstance(){
        var obj = "new obj"
        return obj
    };
    return {
        getInstance: function () {
            if(!instance){
                instance = new createInstance()
            }
            return instance;
        }
    }
})()

var b = singleton.getInstance();
var c = singleton.getInstance();