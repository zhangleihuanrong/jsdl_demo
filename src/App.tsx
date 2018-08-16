import * as React from 'react';
import './App.css';

import NavBar from './NavBar';

class App extends React.Component {
  public render() {
    return (
      <div>
        <NavBar/>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
