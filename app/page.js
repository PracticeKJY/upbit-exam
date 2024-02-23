import {
  ExchangeProvider,
  SummaryProvider,
  UserProvider,
  OrderbookProvider,
} from './ExchangeContext';

import TradingSimulator from './TradingSimulator';




import Test from "./Test";
const jwt = require('jsonwebtoken');
const {v4: uuidv4} = require('uuid');
const WebSocket = require("ws");



// const payload = {
//   access_key: "jEqIjgzCzMDUamaT6pKDRNZVkDZbAwLE1Yt7DbQ3",
//   nonce: uuidv4(),
// };

// const jwtToken = jwt.sign(payload, "uWtY06gzaW3MY1CrmOjC9Ua6oUsGnwtviiOJEz59");



// const ws = new WebSocket("wss://api.upbit.com/websocket/v1", {
//     headers: {
//       authorization: `Bearer ${jwtToken}`
//     }
// });


// ws.on("open", () => {
//   console.log("connected!");
//   // Request after connection
//   ws.send('[{"ticket":"test example"}]');

// });

// ws.on("error", console.error);

// ws.on("message", (data) => console.log(data.toString()));

// ws.on("close", () => console.log("closed!"));






export default function Home() {




  return (
    <ExchangeProvider>
    <SummaryProvider>
      <UserProvider>
        <OrderbookProvider>
          <TradingSimulator />
        </OrderbookProvider>
      </UserProvider>
    </SummaryProvider>
  </ExchangeProvider>
  );
}


