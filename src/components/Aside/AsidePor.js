import React from 'react';
import { Link } from 'react-router'

import LanguageSwitch from './LanguageSwitch'

import './AsidePor.sass'

const Aside = (props) => (
        <aside className='aside-por'>
            <div className='aside-text-por'>  <Link to='/' className='aside-text--name-por'>FABRICE<strong>POMATA</strong></Link></div>
            <div className='aside-links-por'>∷ <a href='mailto:fab.pomata@gmail.com'>contact</a> ∷</div>
            <div className='switch'>
              <LanguageSwitch mobile/>
            </div>
        </aside>
    )

export default Aside
