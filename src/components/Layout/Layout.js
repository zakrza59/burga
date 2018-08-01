import React from 'react';
import ReactAux from '../../hoc/ReactAux';

const Layout = (props) => (
  <ReactAux>
    <div>Toolbar, SideDrawer, Backdrop</div>
    <main>
      {props.children}
    </main>
  </ReactAux>
);

export default Layout;