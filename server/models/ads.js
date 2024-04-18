const express = require('express')
const router = express.Router()
const sqlQuery = require('../mysql')
const imgLists = [
    "https://nathan-blog-img.oss-cn-nanjing.aliyuncs.com/blog_img/travel1.png?Expires=1713343657&OSSAccessKeyId=TMP.3KivGbBcEjeYLrhw1uuj2bQw2K2JrsFx9vXKNqsEqssx8UsuMXfwJf3HC9ZMNh4q11rBEgcHSBVXocgtapWhRu4wPvnj3g&Signature=P0y6cDv4mNFHZwdo0IbkvtPlvZc%3D",
    "https://nathan-blog-img.oss-cn-nanjing.aliyuncs.com/blog_img/travel2.png?Expires=1713343678&OSSAccessKeyId=TMP.3KivGbBcEjeYLrhw1uuj2bQw2K2JrsFx9vXKNqsEqssx8UsuMXfwJf3HC9ZMNh4q11rBEgcHSBVXocgtapWhRu4wPvnj3g&Signature=Dxmh92f3hubGaMjelQjQ4VxKi8g%3D",
    "https://nathan-blog-img.oss-cn-nanjing.aliyuncs.com/blog_img/travel3.png?Expires=1713343688&OSSAccessKeyId=TMP.3KivGbBcEjeYLrhw1uuj2bQw2K2JrsFx9vXKNqsEqssx8UsuMXfwJf3HC9ZMNh4q11rBEgcHSBVXocgtapWhRu4wPvnj3g&Signature=V7ffJPyG%2Bu4J3zoVDwgP2GID%2FwM%3D"
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
