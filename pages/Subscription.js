import React, { useState, Fragment } from 'react';

var mqtt    = require('mqtt');
var options = {
	protocol: 'mqtts',
	// clientId uniquely identifies client
	// choose any string you wish
	clientId: 'b09GADRG53' 	
};
var client  = mqtt.connect('mqtt://test.mosquitto.org:8081', options);

// preciouschicken.com is the MQTT topic
client.subscribe('testtopic/1856');

function App() {
  var note;
  function mqtt_connect(topic, message){
    note = message.toString();
    // Updates React state with message 
    setMesg(parseFloat(note).toFixed(0) + ' cm');

    if(client.listenerCount('connect') > 1){
      client.removeListener('connect', mqtt_connect);
    }
    
  }

  client.on('message', mqtt_connect);

  // Sets default React state 
  const [mesg, setMesg] = useState(<Fragment><em>nothing heard</em></Fragment>);

  return (mesg
    /*
    <div className="App">
    <header className="App-header">
    <h1>A taste of MQTT in React</h1>
    <p>The message is: {mesg}</p>
		<p>
		<a href="https://www.preciouschicken.com/blog/posts/a-taste-of-mqtt-in-react/"    
		style={{
			color: 'white'
		}}>preciouschicken.com/blog/posts/a-taste-of-mqtt-in-react/</a>
		</p>
		</header>
		</div>
    */
  );
}

export default App;