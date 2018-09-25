import React, { Component } from 'react';
import ReactAux from '../../../hoc/ReactAux';
import Backdrop from '../Backdrop/Backdrop';

import classes from './Modal.css'

class Modal extends Component {
  render() {
    return (
      <ReactAux>
        <Backdrop
          show={this.props.show}
          clicked={this.props.modalClosed} />
        <div
          className={classes.Modal}
          style={{
            transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
            opacity: this.props.show ? '1' : '0'
          }}>
          {this.props.children}
        </div>
      </ReactAux>
    )
  }
}

export default Modal;