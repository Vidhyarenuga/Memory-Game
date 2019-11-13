import React from 'react';
import Generate from './Generate';
import Output from './Output';
import {BrowserRouter, Route} from 'react-router-dom';

import './App.css';

function App() {  
  return (
    <BrowserRouter>
    <div className="App">
    <Route exact path='/' component={Generate} />
    <Route  path='/Output' component={Output} />
    </div>
    </BrowserRouter>
  );
}

export default App;
