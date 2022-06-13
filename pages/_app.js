import { useState} from 'react';
import './styles.css';
import React from 'react';
import App from './Subscription'
import { Connector } from 'mqtt-react-hooks';

function Home(){
  let level = 200 - parseInt(App());
  let height = level * 35/ 200
  return(
    
    <div>
      <div className="container">
        <h1 className="volume">Volume: {level/ 2} % </h1>
        <div className="cup" ></div>
        <div className='water' style={{height: `${parseInt(height) }vh`}}></div>
      </div>
    </div>
  )
}

export default Home