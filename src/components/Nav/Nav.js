import React from 'react';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'

import './Nav.scss';

const Nav = () => (
    <div className="Nav">
      <nav className='home-header'>
        <div className='logo-wrapper'>
          {/* <div className='logo'>
            TEACH<div id='logo-for'>FOR</div>AMERICA
          </div> */}
          <img className="logo-img" src="https://www.teachforamerica.org/themes/custom/polaris/assets/img/logo.svg" alt="Teach For America"/>
        </div>
        <div className='signout-wrapper'>
          <AmplifySignOut />
        </div>
      </nav>
    </div>
);

export default withAuthenticator(Nav);
