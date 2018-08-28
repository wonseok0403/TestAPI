/** 
 *  @file       [main] Api.js
 *  @brief      8.17 3주차 1강 - Restful API 접근 및 생성
 *  @author     Wonseok. Jang
 *  @todo       Socket.IO 를 학습합니다.
 */

// 웹 API 구축을 위한 변수 선언 부분
const express = require('express');
const app = express();
const server = require('http').createServer(app);
var socket = require('socket.io-client')('http://localhost:54321');
const bodyparser = require('body-parser');
app.use(bodyparser.urlencoded({
    extended: true
}));
app.use(bodyparser.json());

/**                          --API 구현 내역 -*
 * [GET]  /api/v1/connect
 */                          

/** [POST]  /api/v1/state
 *  @brief  현재 상태를 파라미터로 입력받아 출력
 *  @param  (body) 내에 app, state
 */
app.get('/api/v1/connect', async (req, res) => {
    console.log('connect accepted!');
    socket.connect();
});

app.get('/api/v1/login/:id/:pw', async(req, res) => {
    console.log(' login!!! ');
    Id = req.params.id;
    Pw = req.params.pw;
    data = JSON.stringify({id:Id, pw:Pw});
    socket.emit('login', data);
    
});
socket.on('SomeoneLogined', function(data){
    ID = JSON.parse(data);

    console.log(ID.id + ' is logined!');
});

app.listen(8000, () =>{
    console.log("Web api is running on 8000");
});
