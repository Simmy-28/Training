function fun1() {
    //convert into json
    var myObj = { name: "dm", age: 35, city: "PUne" };
    var myJSON = JSON.stringify(myObj);
    console.log(myJSON)

    //convert into js object
    var json = '{"name":"dm","age":35,"city":"PUne"}';
    var js = JSON.parse(json)
    console.log(js)
}