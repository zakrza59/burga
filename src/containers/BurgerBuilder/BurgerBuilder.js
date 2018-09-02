import React, { Component } from 'react';
import ReactAux from '../../hoc/ReactAux';
import Burger from '../../components/Burger/Burger';

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 1,
      bacon: 1,
      cheese: 2,
      meat: 2
    }
  }

  render () {
    return (
      <ReactAux>
        <Burger ingredients={this.state.ingredients}/>
        <div>Build Controls</div>
      </ReactAux>
    );
  }
}

export default BurgerBuilder;