var Singleton = (function () {
    var instance; 
    //create object
    function createInstance() {
        var object = new Object("I am the instance");
        return object;
    }
     //provide interface to create object
    return {
        getInstance: function () {
            if (!instance) {        //create object when not present
                instance = createInstance();
            }
            return instance;
        }
    };
})();
 
function run() { 
    var instance1 = Singleton.getInstance();
    var instance2 = Singleton.getInstance(); 
    alert("Same instance? " + (instance1 === instance2));  
}