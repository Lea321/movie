const express = require('express');
const fs = require('fs');

const app = express();
// 允许跨域
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});

app.get('/get', (req, res) => {
    try {
        const data = fs.readFileSync('./api.json', 'utf8');
        const apiList = JSON.parse(data);
        res.send(apiList.data);
    } catch (err) {
        res.send(err)
    }
});


app.listen(666)