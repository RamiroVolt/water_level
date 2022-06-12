import { useState} from 'react';
import './styles.css';
 
function Home(){
  return(
    <div>
      <div className="container">
        <h1 className="volume">Volume: 35% </h1>
        <div className="cup" ></div>
        <div className='water' style={{height: `${15}vh`}}></div>
      </div>
    </div>
  )
}

export default Home