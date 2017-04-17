import React, { PropTypes } from 'react';
import { Link } from 'react-router'
import store from '../Store'

import './Card.sass'

const propTypes = {
  handleClick: PropTypes.func.isRequired,
  header: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  style: PropTypes.object.isRequired,
  id: PropTypes.number.isRequired,
  link: PropTypes.string.isRequired,

}

const Card = ({ handleClick, header, style, isActive, name, id, link, icon }) => (

      <div className='card-wrapper' onClick={handleClick} >
        <div className='card' style={style}>
          <div className='card-number'>{header}</div>
          {isActive ? <div className='card-pinkbar'></div> : null }

          <div className='card-bottom-text'>
            <h1 className='card-project-name' >{name}</h1>
            {isActive ? <Link to={`/${link}/`}>
              <div className='card-link-outer'>
                <svg className='next-svg' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"  viewBox="0 0 81.4 81.4" >
                  <rect className='outer' x="12.9" y="12.9" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -16.8972 40.6348)" fill="none" stroke="#F74765" strokeWidth="2" strokeMiterlimit="10" width="55.5" height="55.5"/> <polyline className='inner' fill="none" stroke="#F74765" strokeWidth="2" strokeMiterlimit="10" points="40.7,20.5 60.8,40.7 40.7,60.8 "/>
                  </svg>
                  {id === 7 ? null : <div className='card-view-project'>{store.language === 'FR' ? 'Voir le projet' : 'View project'}</div>}
                </div>
              </Link> :
              <div className='card-link-outer'>
                <svg className='next-svg-inactive' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                  viewBox="0 0 81.4 81.4">
                  <rect className='outer-inactive' x="12.9" y="12.9" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -16.8972 40.6348)" fill="none" stroke="#000000" strokeWidth="2" strokeMiterlimit="10" width="55.5" height="55.5"/><polyline className='inner-inactive' fill="none" stroke="#000000" strokeWidth="2" strokeMiterlimit="10" points="40.7,20.5 60.8,40.7 40.7,60.8 "/>
                </svg>
              </div>}
          </div>
          {isActive ? <div className='card-color-bottom'></div> : null}
        </div>
      </div>

);

Card.propTypes = propTypes;

export default Card
