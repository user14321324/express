const mysql = require('mysql')

// 创建mysql连接
const Pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'root',
    port: '3306',
    database: 'mybatis'
})

// connection.connect();
//
// const sql = "select * from amount"; // 执行查询语句
//
// connection.query(sql,(err,result)=>{
//     if(err) {
//         console.log(err);
//         return
//     }
//     console.log(result)
//     connection.destroy(); // 释放资源
// })

function query(sql,callback){
    Pool.getConnection(function (err,connection){
        if (err){
            console.log('连接失败')
            return;
        }else {
            console.log('连接成功')
            connection.query(sql,function (err,rows){
                callback(err,rows)
                // 当不再使用时，归还到连接池中
                connection.release()
                // 当不再使用时并要从连接池中移除
                // connection.destroy()
            })
        }
        // 当连接池不需要使用时，关闭连接池
        // Pool.end()
    })
}
exports.query = query