import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';

import Backdrop from '../../UI/Backdrop/Backdrop';
import ReactAuth from '../../../hoc/ReactAux';

import classes from './SideDrawer.css';
import ReactAux from '../../../hoc/ReactAux';

const SideDrawer = (props) => {
  return (
    <ReactAux>
      <Backdrop show/>
      <div className={classes.SideDrawer}>
        <div className={classes.Logo}>
          <Logo />
        </div>
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </ReactAux>
  )
}

export default SideDrawer;