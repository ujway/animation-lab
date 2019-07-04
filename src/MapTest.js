import React from 'react';
import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl"

import Config from './config'
const { accessToken } = Config

const Map = ReactMapboxGl({
  accessToken: accessToken,
});

const MapTest = props => {
  return(
    <Map
      style="mapbox://styles/mapbox/streets-v11"
      containerStyle={{
        height: "100vh",
        width: "100vw"
      }}>
      <Layer
        type="symbol"
        id="marker"
      >
        <Feature coordinates={[-0.481747846041145, 51.3233379650232]}/>
      </Layer>
    </Map>
  )
}

export default MapTest;
