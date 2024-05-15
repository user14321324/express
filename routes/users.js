var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with12311 a resource');
});
module.exports = router;

const {getAmount,delAmount} = require('../mysql/api')


const db1 = require('../mysql/db1')
router.get("/get_account",(req,res,next) => {
    getAmount()
    .then(data => {
        console.log("data",data)
            res.send({
                code: "200",
                data:data
            })
        })
      .catch(err=>{
          console.log(err)
      })
})
router.post('/del',(req,res)=>{
    delAmount()
        .then(data=>{
            res.send({
                code: "200",
                data:data
            })
        })
        .catch(err=>{
            console.log(err)
        })
})

router.get('/index',(req,res)=>{
    db1.query("select * from amount",(err,data)=>{
        if (err){
            console.log(err)
            res.send("查询出错")
            return
        }else {
            res.send({
                code: "200",
                data:data
            })
        }
    })
})
router.get('/dept',(req,res)=>{
    db1.query("select * from dept",(err,data)=>{
        if (err){
            console.log(err)
            res.send("查询出错")
            return
        }else {
            res.send({
                code: "200",
                data:data
            })
            console.log(data)
        }
    })
})
const obj =
{
    amount: 111.0,
    type: "node"
}
const createTime = "2024-05-14 14:57:45"
router.post('/add',(req,res)=>{
    const amount = req.body.amount
    const type = req.body.type
    const sql = `insert into amount(amount,type,CREATE_TIME) values("${amount}","${type}","${createTime}")`;
    db1.query(sql,(err,data)=>{
        if (err){
            console.log(err)
            return
        }else {
            res.send({
                code: "200",
                message: "成功",
            });
        }
    })
})

// var db2 = require('../mysql/db2')
// var querystring = require("querystring");

// router.post('/add', function (req, res) {
//     //获取及处理增加的数据
//     var post = '';
//     req.on('data', function (chunk) {
//         post += chunk;
//         console.log(post)
//     });
//     req.on('end', function () {
//         //查询参数解析
//         post = querystring.parse(post);
//         var sql = 'insert into amount set amount=10000 '
//         var add_value = [post.id, post.amount]
//         db2.connection.query(sql, add_value, function (err, result) {
//             if (err) {
//                 console.log('新增数据失败');
//             }
//             res.send('增加数据成功') //   响应内容 增加数据成功
//         });
//     });
// })

