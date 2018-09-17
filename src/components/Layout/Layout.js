import React from 'react';
import ReactAux from '../../hoc/ReactAux';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import classes from './Layout.css';

const Layout = (props) => (
  <ReactAux>
    <Toolbar />
    <main className={classes.Content}>
      {props.children}
    </main>
  </ReactAux>
);

export default Layout;