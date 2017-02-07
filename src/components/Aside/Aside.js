import React from 'react';
import { Link } from 'react-router'

import LanguageSwitch from './LanguageSwitch'

import './Aside.sass'

const Aside = (props) => (
        <aside>
            <div className='aside-links'>∷ <a href='mailto:fab.pomata@gmail.com'>contact</a> ∷
            </div>
            <div className='aside-text'>  <Link to='/' className='aside-text--name'>FABRICE<strong>POMATA</strong></Link></div>
            <LanguageSwitch />
        </aside>
    )

export default Aside
