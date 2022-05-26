var express = require('express') ;
var router = express.Router() ;
const sqlconfig = require('./sqlConfig.js') ;
const sql = require('mssql') ;

async function search(param){
    await sql.connect(sqlconfig.config);
    const querystr = `select * from z_bong_blog_store 
                        where bs_part like '%${param}%' ` ; 
    const result = await sql.query(querystr) ;
    return result ;
}
router.get('/',function(req, res, next){
    search(req.query.bs_part).then((result) => {
       res.send(result.recordset)
   })
})

module.exports = router ;