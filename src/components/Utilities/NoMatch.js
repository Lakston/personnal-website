import React from 'react';
import { Link } from 'react-router'

import './NoMatch.sass'

const NoMatch = ({location}) => (
  <div className='fourOhfour'>
    <div className='fourOhfourInner'>
      <p className='fourOhNumbers'>404</p>
      <Link to='/'><button className='fourOhButton'>Home</button></Link>
    </div>
  </div>
);

export default NoMatch
