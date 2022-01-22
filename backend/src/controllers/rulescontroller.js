
const numberofrows = require('../utils/fatchfromDb')
const log = require('../loginutils/savelogs')


const get_rules =  async (req, res)  => {
    log.requestmade("getrules" , Date())
    let rules = {}
    let tableName = req.query.tableName     
    resposne = await numberofrows(tableName)
    rules.Tablename = tableName
    rules.Rule1 = {}
    rules.Rule1.name = "High number of rows"
    if(resposne.rownum >= 10,000,000){
        rules.Rule1.status = "faild"
        rulse.Rule1.Massage = `warning table hes high number of rows (${resposne.rownum})`
    }else{
        rules.Rule1.status = "Pass"
        rules.Rule1.Massage = `The table has a small number of rows (${resposne.rownum})`
    }
    rules.Rule2 = {}
    rules.Rule2.name = "A table without a PK"
    if(resposne.hesprimekey){
        rules.Rule2.status = "pass"
        rules.Rule2.Massage = "The table has a Primary Key"
    }else{
        rules.Rule2.status = "faild"
        rules.Rule2.Massage = "The table does not have a Primary Key"
    }
    rules.Rule3 = {}
    rules.Rule3.name = "a Primary Key with many columns"
    if(resposne.primekey >= 4){
        rules.Rule3.status = "faild"
        rules.Rule3.Massage = `High number of columns in the PK (${resposne.primekey})`
    }else{
        rules.Rule3.status = "pass"
        rules.Rule3.Massage = `the number of columns in PK is(${resposne.primekey})`
    }

    log.calculated("rules" , Date() , rules)
  res.send(rules)  
};

 

module.exports = {
    get_rules
};