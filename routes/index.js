var express = require('express');
var app = express()
var router = express.Router();
const mysql = require('mysql');
const conn = mysql.createConnection({
  host:'localhost',
  user:'root',
  password:'root',
  database:'yunmeng'
})


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get("/aa",(req,res)=>{
  res.render('111111111111')
})
module.exports = router;
