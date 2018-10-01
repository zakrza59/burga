import React, { Component } from 'react';
import Layout from './hoc/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout';
import { Route } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Route path="/" component={BurgerBuilder}/>
          <Route path="/checkout" component={Checkout}/>
        </Layout>
      </div>
    );
  }
}

export default App;
