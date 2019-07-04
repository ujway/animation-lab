import React, { Component } from 'react';
import { Canvas } from 'react-three-fiber'
import Thing from './Thing'

class App extends Component {
  render() {
    return (
      <Canvas>
        <Thing
          vertices={[[-1, 0, 0], [0, 1, 0], [1, 0, 0], [0, -1, 0], [-1, 0, 0]]}
        />
      </Canvas>
    );
  }
}

export default App;
