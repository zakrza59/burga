import React from 'react';
import ReactAux from '../../hoc/ReactAux';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
import classes from './Layout.css';

const Layout = (props) => (
  <ReactAux>
    <Toolbar />
    <SideDrawer />
    <main className={classes.Content}>
      {props.children}
    </main>
  </ReactAux>
);

export default Layout;