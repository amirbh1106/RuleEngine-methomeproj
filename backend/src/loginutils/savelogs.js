fs = require('fs');


module.exports = loggingfunctions = {
    error: function (errortype , time , location){
        fs.appendFile('logs.txt'," ERROR:  what kind of error : " +errortype + " at :" + time + "in function" + location +"\n" , function (err) {
            if (err) return console.log(err);
            console.log("log written");
          });
    },
    calculated: function (type , time , data){
        fs.appendFile('logs.txt'," LOG:  what was calculated : " +type + " at :" + time + "resulted in this json" +JSON.stringify(data)  +"\n" , function (err) {
            if (err) return console.log(err);
            console.log("log written");
          });
    },
    requestmade: function (type , time){
        fs.appendFile('logs.txt', " LOG: request type :" +type + " at :" + time + "\n", function (err) {
            if (err) return console.log(err);
            console.log("log written");
          });
    },
    unauthorizedpath: function (type){
        time = Date();
        fs.appendFile('logs.txt'," ERROR:  what kind of error : " + "api unauthorizedpath " + " at :" + time + "the path is " + type +"\n" , function (err) {
            if (err) return console.log(err);
            console.log("log written");
          });
        console.log(type)
    }
}