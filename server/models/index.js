module.exports = (app) => {
    // path: 路径
    // callback: 回调函数
    app.use('/ads', require('./ads'))   
}