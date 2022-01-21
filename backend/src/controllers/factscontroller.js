const numberofrows = require('../utils/fatchfromDb')





             

const get_facts =  async (req, res)  => { 
    let tableName = req.query.tableName
    resposne = await numberofrows(tableName)
    console.log(resposne)
    
    res.send(resposne)
    
}




module.exports = {
    get_facts
};