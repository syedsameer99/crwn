import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import {Switch,Route} from 'react-router-dom';

  const Hatspage=()=>(
    <div>
      <h1>Hats Page</h1>
    </div>
  );

  function App() {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route exact  path='/shop' component={ShopPage}/>

        </Switch>
      </div>
    
      
      );

  }

export default App;
