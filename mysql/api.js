const connection = require('./db')
// const {amount} = require("../model/module");


//查询
const getAmount = () => {
    return new Promise((resolve, reject) => {
        //第一个参数：sql语句
        //第二个参数：回调函数（err：查询错误，data：查询结果）
        connection.query("SELECT  TYPE AS name, SUM( AMOUNT ) AS value FROM amount GROUP BY TYPE ORDER BY value desc",(err,data) => {
            resolve(data)
        })
    })
}

const type = 'node'
const amount = 11
//删除
const delAmount = ()=>{
    return new Promise((resolve, reject) => {
        //第一个参数：sql语句
        //第二个参数：回调函数（err：查询错误，data：查询结果）
        connection.query(`delete FROM amount where type='${type}' AND amount = '${amount}'`,(err,data) => {
            resolve(data)
        })
    })
}

module.exports = {
    getAmount,
    delAmount
}