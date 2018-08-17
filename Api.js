/** 
 *  @file       [main] Api.js
 *  @brief      8.17 2주차 3강 - Restful API 접근 및 생성
 *  @author     Wonseok. Jang
 *  @todo       Socket.IO 를 학습하기 위해 선행되어야 합니다.
 */

// 웹 API 구축을 위한 변수 선언 부분
const express = require('express');
const app = express();
const bodyparser = require('body-parser');
app.use(bodyparser.urlencoded({
    extended: true
}));
app.use(bodyparser.json());

/**                          --API 구현 내역 -*
 * [POST] /api/v1/state
 * [GET]  /api/v1/apilist
 * [GET]  /api/v1/apilist/:id               
 */                          

/** [POST]  /api/v1/state
 *  @brief  현재 상태를 파라미터로 입력받아 출력
 *  @param  (body) 내에 app, state
 */
app.post('/api/v1/state', async (req, res) => {
    var app = req.body.app;
    var state = req.body.state;
    console.log(app);
    console.log(state);
    res.json({app:app.toString(), state:state.toString()});
});


app.get('/api/v1/apilist', async( req, res) =>{
    res.json("/api/v1/state");
})

app.get('/api/v1/apilist/:id', async( req,res) =>{ 
    console.log('here');
    res.json(req.params.id);
})

app.listen(8080, () =>{
    console.log("Web api is running on 8080");
});
