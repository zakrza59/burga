import React, { Component } from 'react';
import Button from '../../../components/UI/Button/Button';

class ContactData extends Component {
  state = {
    name: '',
    email: '',
    address: {
      street: '',
      postalCode: ''
    }
  }
  
  render () {
    return (
      <div>
        <h4>Entry your Contact Data</h4>
        <form>
          <input type="text" name="name" placeholder="Your Name"/>
          <input type="email" name="email" placeholder="Your Mail"/>
          <input type="text" name="street" placeholder="Your street"/>
          <input type="text" name="postal" placeholder="Postal Code"/>
          <Button btnType="Success">ORDER</Button>
        </form>
      </div>
    )
  }
}

export default ContactData;