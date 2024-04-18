const express = require("express");
const router = express.Router();
const sqlQuery = require("../mysql");
const request = require("request")

//创建机场城市列表mysql
request("https://www.brown77.cn/city/airportList", {json: true}, async (err, res, body) => {
  const strSql1 =
  `
    create table airport_list(
      id int not null auto_increment,
      cityName char(50) not null,
      cityId int not null,
      firstLetter char(50) not null,
      airportName char(50) not null,
      primary key (id)
    ) engine=innodb;
  `
  // 删除表
  await sqlQuery(`drop table if exists airport_list`)
  await sqlQuery(strSql1)
  for (let i = 0; i < body.result.length; i++) {
    const { id, cityId, cityName, firstLetter, airportName } = body.result[i]
    const strSql2 = `insert into airport_list(id, cityName, cityId, firstLetter, airportName) values (${id}, '${cityName}', ${cityId}, '${firstLetter}', '${airportName}');`
    await sqlQuery(strSql2)
  }
})

router.get("/airportList", async(req, res) => {
    const strSql = `select * from airport_list`;
    try {
      const result = await sqlQuery(strSql);
      res.send({
        code: 1,
        mes: "请求成功",
        result,
      })
    } catch(err) {
      res.send({
        code: -1,
        mes: "请求失败"
      });
    }
  })
  
  module.exports = router