const numberofrows = require('../utils/fatchfromDb')
const log = require('../loginutils/savelogs')





             

const get_facts =  async (req, res)  => { 
  
  log.requestmade("getfacts" , Date())
    let tableName = req.query.tableName
    resposne = await numberofrows(tableName)
    console.log(resposne)
    log.calculated("facts" , Date() , resposne)
    res.send(resposne)
    
}




module.exports = {
    get_facts
};