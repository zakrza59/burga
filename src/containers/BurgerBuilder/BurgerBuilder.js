import React, { Component } from 'react';
import ReactAux from '../../hoc/ReactAux/ReactAux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Spinner from '../../components/UI/Spinner/Spinner';
import WithErrorHandler from '../../hoc/WithErrorHandler/WithErrorHandler';
import axios from '../../axios-orders';

const INGREDIENT_PRICES = {
  salad: 0.5,
  bacon: 1.5,
  cheese: 1,
  meat: 1.2
}

class BurgerBuilder extends Component {
  state = {
    ingredients: null,
    totalPrice: 4,
    purchasable: false,
    purchasing: false,
    loading: false
  }

  componentDidMount() {
    axios.get('https://burga-ee8d3.firebaseio.com/ingredients')
    .then(response => {
      this.setState({ingredients: response.data})
    })
  }

  updatePurchaseState(ingredients) {
    const sum = Object.keys(ingredients)
      .map(igKey => {
        return ingredients[igKey];
      })
      .reduce((sum, el) => {
        return sum + el;
      }, 0);
    this.setState({ purchasable: sum > 0 })
  }

  addIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;
    const updatedIngredients = {
      ...this.state.ingredients
    }
    updatedIngredients[type] = updatedCount;
    const priceAdition = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAdition;
    this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });
    this.updatePurchaseState(updatedIngredients);
  }

  removeIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    if (oldCount <= 0) {
      return;
    }
    const updatedCount = oldCount - 1;
    const updatedIngredients = {
      ...this.state.ingredients
    }
    updatedIngredients[type] = updatedCount;
    const priceDeduction = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - priceDeduction;
    this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });
    this.updatePurchaseState(updatedIngredients);
  }

  purchaseHandler = () => {
    this.setState({ purchasing: true });
  }

  purchaseCancelHandler = () => {
    this.setState({ purchasing: false });
  }

  purchaseContinueHandler = () => {
    // alert('You continue!');
    this.setState({ loading: true });

    const order = {
      ingredients: this.state.ingredients,
      price: this.state.totalPrice,
      customer: {
        name: 'Wixa Cziken',
        address: {
          street: 'Nibyczegolada 1',
          zipCode: '9-912',
          country: 'PRLAND'
        },
        email: 'donotsendhere@g.com'
      },
      deliveryMethod: 'uberEats'
    }

    axios.post('/orders.json', order)
      .then(response => {
        this.setState({ loading: false, purchasing: false })
      })
      .catch(error => {
        this.setState({ loading: false, purchasing: false })
      })
  }


  render() {
    const disabledInfo = {
      ...this.state.ingredients
    };
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0
    }

    let orderSummary = <OrderSummary
      ingredients={this.state.ingredients}
      purchaseCanceled={this.purchaseCancelHandler}
      purchaseContinued={this.purchaseContinueHandler}
      price={this.state.totalPrice} />

    if (this.state.loading) {
      orderSummary = <Spinner />
    }

    return (
      <ReactAux>
        <Modal
          show={this.state.purchasing}
          modalClosed={this.purchaseCancelHandler}>
          {orderSummary}
        </Modal>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          ingredientAdded={this.addIngredientHandler}
          ingredientRemoved={this.removeIngredientHandler}
          disabled={disabledInfo}
          price={this.state.totalPrice}
          purchasable={this.state.purchasable}
          ordered={this.purchaseHandler} />
      </ReactAux>
    );
  }
}

export default WithErrorHandler(BurgerBuilder, axios);