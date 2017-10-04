/**
 * Created by Mei on 7/14/17.
 */
/*get Instance
*
* 2.Common way to implementation Singleton
 */

var singleton = (function () {
    var instance;
    function createInstance() {
        var obj = new Object("this is a new object");
        return obj;
    };
    return {
        getInstance: function () {
            if(!instance){
                instance = new createInstance();
            }
            return instance;
        }
    }
})();

var obj1 = singleton.getInstance();
var obj2 = singleton.getInstance();

console.log(obj1 === obj2);