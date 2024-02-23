'use client'

import React, { useEffect } from 'react';
import {
  getMarket,
  useExchangeDispatch,
  useUserDispatch,
} from './ExchangeContext';
// import CoinDetail from './CoinDetail';
import CoinListContainer from './CoinListContainer';
// import '../css/TradingSimulator.css';

function TradingSimulator() {
  const dispatch = useExchangeDispatch();
  const userDispatch = useUserDispatch();

  // 처음 거래소 오픈시 유저정보 등록.
  useEffect(() => {
    userDispatch({
      type: 'USER_REGISTER',
      data: {
        cash: 100000000,
        coin: {}
      },
    });
  }, [userDispatch]);

  useEffect(() => {
    getMarket(dispatch);
  }, [dispatch]);
  return (
    <div className="Trading__Simulator">
      {/* <CoinDetail /> */}
      <CoinListContainer />
    </div>
  );
}

export default TradingSimulator;
