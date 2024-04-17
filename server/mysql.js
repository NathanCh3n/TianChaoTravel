const mysql = require('mysql2')

const options = {
    host: '127.0.0.1',
    port: '3306',
    user: 'root',
    password: '153193',
    database: 'yuanfang',
}

// 创建数据库连
const connection = mysql.createConnection(options);
connection.connect(err => {
    if(err) {
        console.log(err)
        return
    }
    console.log('数据库连接成功！')
})

// 执行mysql查询命令
/**
 * @param
 */
const sqlQuery = (strsql) => {
    return new Promise((resolve, reject) => {
        connection.query(strsql, (err, res) => {
            if(err) {
                reject(err)
            } else {
                resolve(res)
            }
        })
    })
}

module.exports = sqlQuery