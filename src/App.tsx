import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.scss';

//components
import TheNavigation from './components/TheNavigation';

//views
import Homepage from './views/Homepage'
import Tunes from './views/Tunes'
import About from './views/About'

function App() {

  return (

    <div className="App">

      <header>
        <TheNavigation />
      </header>

      <main className='content'>
        <Switch>
            <Route path='/' component={Homepage} exact/>
          <Route path='/tunes' component={Tunes} />
          <Route path='/about' component={About} />
        </Switch>
      </main>

    </div>
  );
}

export default App;
