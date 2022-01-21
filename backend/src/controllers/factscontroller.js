const DB = require('../DB')



// return all todos
const get_facts =  async (req, res)  => { 

    DB.connect(function(err) {
        if (err) console.log(err);
      });
      
    DB.query("SELECT * FROM Courses", function (err, result) {
        if (err) console.log(err);
        console.log(result);
        res.send(result)
       
      });
      DB.end();
};




module.exports = {
    get_facts
};