import React, { Component } from 'react';
import ReactAux from '../../hoc/ReactAux';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
import classes from './Layout.css';

class Layout extends Component {
  render() {
    return (
      <ReactAux>
        <Toolbar />
        <SideDrawer />
        <main className={classes.Content}>
          {this.props.children}
        </main>
      </ReactAux>
    )
  }
}

export default Layout;