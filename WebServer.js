/** 
 *  @file       [main] Api.js
 *  @brief      8.17 3주차 1강 - Restful API 접근 및 생성
 *  @author     Wonseok. Jang
 *  @todo       Socket.IO 를 학습합니다.
 */

// 웹 API 구축을 위한 변수 선언 부분
const express = require('express');
const app = express();
var http = require('http');
const server = http.createServer(function(req, res){
});
server.listen(54321);
var io = require('socket.io');
var sock = io.listen(server);

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
app.post('/api/v1/connect', async (req, res) => {
    console.log("연결 완료!");
});

sock.on('connection', function(socket) {
    console.log('someone connected!');
    socket.on('login', function(data){
        var obj = JSON.parse(data);

        var Id = obj.id;
        var pw = obj.pw;
        console.log(Id, pw);
        console.log(data);

        response = JSON.stringify({id:Id});
        sock.emit('SomeoneLogined', response);
    });
    
    socket.on('disconnect', function(data){
        console.log('bye bye~');
        socket.disconnect();
    });
});

app.listen(8080, () =>{
    console.log("Web api is running on 8080");
});
