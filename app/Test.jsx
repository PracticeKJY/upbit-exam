'use client'

import axios from "axios";
import { useState,useEffect } from "react";
// const WebSocket = require('ws')



const Test = () => {

  // let [coin,setCoin] = useState([]);
  
  // useEffect(()=>{ //state가 변경되면서 중복 실행되는것을 막기 위해 사용
  //   axios.request({
  //     method: 'GET',
  //     url: 'https://api.upbit.com/v1/ticker',
  //     headers: {accept: 'application/json'}
  //   })
  //   .then(function (response) {
  //     console.log(response.data)	
  //     setCoin(response.data);
  //   });
  // },[])






  // let recvData = "";
  
  // function tradeServerConnect(codes) {
  //     console.log('codes',codes);
  //     let ws = new WebSocket('wss://api.upbit.com/websocket/v1');
  //     ws.on('open', ()=>{
  //         console.log('trade websocket is connected')
  //         const str = `[{"ticket":"find"},{"type":"trade","codes":${codes}}]`;
  //         ws.send(str);
  //     })  
  //     ws.on('close', ()=>{
  //         console.log('trade websocket is closed');
  //         setTimeout(function() {
  //             console.log('trade 재접속');
  //             tradeServerConnect(codes);
  //         }, 1000);
  //     })  
  //     ws.on('message', (data)=>{
  //     // console.log('data',data);
  //         try {
  //             let str = data.toString('utf-8')
  //             recvData = JSON.parse(str)
  //             // console.log('recvData',recvData);
  //         } catch (e) {
  //             console.log(e)
  //         }
  //     })
  // }
  
  // async function start() {
  //   tradeServerConnect("[\"KRW-BTC\"]")
  //     function print()
  //     {
  //         console.log('recvData',recvData['trade_price']);
  //     }
  //     setInterval(print,10000);
  
  // }
  
  // start()












  return (
    <div>
      <div>gh2h2h2</div>
    </div>
  )
}



export default Test