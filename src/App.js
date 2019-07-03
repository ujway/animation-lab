import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl"

import Config from './config'
const { accessToken } = Config

const Map = ReactMapboxGl({
  accessToken: accessToken,
});

class App extends Component {
  render() {
    return (
      <Map
        style="mapbox://styles/mapbox/streets-v11"
        containerStyle={{
          height: "100vh",
          width: "100vw"
        }}>
        <Layer
          type="symbol"
          id="marker"
          // layout={{ "icon-image": "marker-15" }}
        >
          <Feature coordinates={[-0.481747846041145, 51.3233379650232]}/>
        </Layer>
      </Map>
    );
  }
}

export default App;
