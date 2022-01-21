const DB = require('../DB')
var Request = require('tedious').Request;  

async function numberofrows(tableName){
    let result = {}
    const getnumberofrows = (`SELECT count(*) FROM ${tableName}`) 
   return await new Promise((resolve , reject) =>{
        let request = new Request(getnumberofrows, function(err) {  
            if (err) {  
                resolve("no such table or error hes accurd");
            }
        });
         request.on('row', (columns) => {
            columns.forEach((column) => {
              if (column.value === null) {
                 reject('NULL');
              } else {
                 result.columnname = tableName;
                  result.rownum = column.value;
              }
            });
          });

          request.on('requestCompleted', function () {
            console.log(result.columnname)
            numofindex(tableName).then((value) => {
                result.indexnum = value.index
                result.hesprimekey = value.hesprimekey.hesindex
                result.primekey = value.index
                resolve(result)
            });
           
        });

          DB.execSql(request);
        })

    }
    async function numofindex(tableName){
        let obj = {}
        const getnumofindexs = (`SELECT count(*) 
        FROM  sys.indexes AS IND
        WHERE object_id = object_ID('${tableName}')
        AND index_id != 0
        `)
        return await new Promise((resolve , reject) =>{
             let request = new Request(getnumofindexs, function(err) {  
                 if (err) {  
                     resolve(err);
                 }
             });
              request.on('row', (columns) => {
                 columns.forEach((column) => {
                   if (column.value === null) {
                      reject('NULL');
                   } else {
                      obj.index = column.value;
                   }
                 });
               });
     
               request.on('requestCompleted', function () {
                primarykeyhes(tableName).then((value => {
                    obj.hesprimekey = value
                    resolve(obj)
                }))
             });
     
               DB.execSql(request);
             })
         }

         async function primarykeyhes(tableName){
             let response = { }
            const getnumofindexs = (`SELECT CASE
            WHEN Count(index_id) = 1 THEN 'true'
                ELSE 'false'
                END
            FROM sys.indexes 
            WHERE object_id = object_id('${tableName}') 
            AND is_primary_key = 1;
            
            `)
            return await new Promise((resolve , reject) =>{
                 let request = new Request(getnumofindexs, function(err) {  
                     if (err) {  
                         resolve(err);
                     }
                 });
                  request.on('row', (columns) => {
                     columns.forEach((column) => {
                       if (column.value === null) {
                          reject('NULL');
                       } else {
                         response.hesindex = column.value;
                       }
                     });
                   });
         
                   request.on('requestCompleted', function () {
                    primarykeynum(tableName).then((value =>{
                        response.indexnum
                        resolve(response);
                    }))
                 });
         
                   DB.execSql(request);
                 })
         
             }

             async function primarykeynum(tableName){
                const getnumofindexs = (`SELECT COUNT(INC.column_id)
                FROM sys.indexes as IND
                        INNER JOIN sys.index_columns as INC
                            ON IND.object_id = INC.object_id
                            AND IND.index_id = INC.index_id
                WHERE IND.object_id = object_id('${tableName}}') 
                    AND IND.is_primary_key = 1;
                `)
                return await new Promise((resolve , reject) =>{
                     let request = new Request(getnumofindexs, function(err) {  
                         if (err) {  
                             resolve(err);
                         }
                     });
                      request.on('row', (columns) => {
                         columns.forEach((column) => {
                           if (column.value === null) {
                              reject('NULL');
                           } else {
                              resolve(column.value);
                           }
                         });
                       });
             
                       request.on('requestCompleted', function () {
                         
                     });
             
                       DB.execSql(request);
                     })
             
                 }
    

                 module.exports = numberofrows;