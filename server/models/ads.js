const express = require('express')
const router = express.Router()
const sqlQuery = require('../mysql')
const imgLists = [
    "https://nathan-blog-img.oss-cn-nanjing.aliyuncs.com/blog_img/01.png",
    "https://nathan-blog-img.oss-cn-nanjing.aliyuncs.com/blog_img/12.png",
    "https://nathan-blog-img.oss-cn-nanjing.aliyuncs.com/blog_img/13.png"
]
const createTable = async (req, res) => {
    try {
        // 创建表
        const createTableSql = `
            CREATE TABLE IF NOT EXISTS ads (
                id INT AUTO_INCREMENT, 
                imgUrl char(255) not null,
                primary key (id)
            ) engine=innodb; 
        `
        await sqlQuery(createTableSql)
        for(let i = 0; i < imgLists.length; i++) {
            const insertSql = `insert into ads(id, imgUrl) values(null, '${imgLists[i]}')`
            await sqlQuery(insertSql)
        }
    } catch (err) {
        console.log(err)
    }
}
createTable()

router.get("/advertising", async (req, res) => {
    const strSql = `select * from ads`;
    try {
        const result = await sqlQuery(strSql);
        res.send({
        code: 1,
        message: '请求成功',
        result,
        })
    } catch (err) {
        res.send({
        code: -1,
        message: '失败'
        }) 
    }
})

module.exports = router
