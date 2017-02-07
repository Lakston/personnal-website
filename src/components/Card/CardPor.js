import React, { PropTypes } from 'react';
import { Link } from 'react-router'

import './CardPor.sass'

const propTypes = {
  isActive: PropTypes.bool.isRequired,
  style: PropTypes.object.isRequired,
  header: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
}

const Card = ({ handleClick, header, style, isActive, name, id, link }) => (

      <div className='card-wrapper-por' onClick={handleClick} >
        <div className='card-por' style={style}>
          {/* {isActive ? <div className='card-number card-active'>{header}</div> : <div className='card-number'>{header}</div> } */}
          <div className='card-number-por'>{header}</div>
          {isActive ? <div className='card-pinkbar-por'></div> : null }

          <div className='card-bottom-text-por'>
            <h1 className='card-project-name-por'>{name}</h1>

          </div>
          {isActive ? <Link to={`/${link}/`}>
          <div className='card-link-outer-por'>
            <svg className='next-svg-por' version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"  viewBox="0 0 81.4 81.4" enableBackground="new 0 0 81.4 81.4">
              <rect className='outer' x="12.9" y="12.9" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -16.8972 40.6348)" fill="#F74765" stroke="#F74765" strokeWidth="2" strokeMiterlimit="10" width="55.5" height="55.5"/> <polyline className='inner' fill="none" stroke="#F74765" strokeWidth="2" strokeMiterlimit="10" points="40.7,20.5 60.8,40.7 40.7,60.8 "/>
            </svg>

          </div>
          </Link> :
          <div className='card-link-outer-por'>
            <svg className='next-svg-inactive-por' version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
             viewBox="0 0 81.4 81.4" enableBackground="new 0 0 81.4 81.4">
              <rect className='outer-inactive' x="12.9" y="12.9" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -16.8972 40.6348)" fill="none" stroke="#000000" strokeWidth="2" strokeMiterlimit="10" width="55.5" height="55.5"/><polyline className='inner-inactive' fill="none" stroke="#000000" strokeWidth="2" strokeMiterlimit="10" points="40.7,20.5 60.8,40.7 40.7,60.8 "/>
            </svg>
          </div>}
          {isActive ? <div className='card-color-bottom-por'></div> : null}
        </div>
      </div>

);

Card.propTypes = propTypes;

export default Card
