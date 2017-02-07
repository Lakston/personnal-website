import React, { PropTypes } from 'react';
import { Link } from 'react-router'

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
            {/* {isActive ? <svg className='card-glyph' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 250.5 176.4" ><path width="249.5" height="175.36" fill="none" stroke="#f63249" strokeMiterlimit="10" d="M0.5 0.5 L250 0.5 L250 175.86 L0.5 175.86 Z" className="HjJuQnEN_0"/><path width="41" height="136.23" fill="#fafafa" stroke="#f63249" strokeMiterlimit="10" d="M200.5 20.1 L241.5 20.1 L241.5 156.32999999999998 L200.5 156.32999999999998 Z" className="HjJuQnEN_1"/><path width="44.1" height="146.38" fill="#fafafa" stroke="#f63249" strokeMiterlimit="10" d="M169 15 L213.1 15 L213.1 161.38 L169 161.38 Z" className="HjJuQnEN_2"/><path width="46" height="152.92" fill="#fafafa" stroke="#f63249" strokeMiterlimit="10" d="M138 11.7 L184 11.7 L184 164.61999999999998 L138 164.61999999999998 Z" className="HjJuQnEN_3"/><path width="41" height="136.23" transform="translate(83 176.4) rotate(180)" fill="#fafafa" stroke="#f63249" strokeMiterlimit="10" d="M21 20.1 L62 20.1 L62 156.32999999999998 L21 156.32999999999998 Z" className="HjJuQnEN_4"/><path width="44.1" height="146.38" transform="translate(143 176.4) rotate(180)" fill="#fafafa" stroke="#f63249" strokeMiterlimit="10" d="M49.5 15 L93.6 15 L93.6 161.38 L49.5 161.38 Z" className="HjJuQnEN_5"/><path width="46" height="152.92" transform="translate(203 176.4) rotate(180)" fill="#fafafa" stroke="#f63249" strokeMiterlimit="10" d="M78.5 11.7 L124.5 11.7 L124.5 164.61999999999998 L78.5 164.61999999999998 Z" className="HjJuQnEN_6"/><path width="48.1" height="159.66" fill="#fafafa" stroke="#f63249" strokeMiterlimit="10" d="M107 8.4 L155.1 8.4 L155.1 168.06 L107 168.06 Z" className="HjJuQnEN_7"/><path fill="none" stroke="#f63249" strokeMiterlimit="10" d="M9.8,0.5L9.8,175.9" className="HjJuQnEN_8"/></svg> : null } */}

            <h1 className='card-project-name' >{name}</h1>
            {isActive ? <Link to={`/${link}/`}>
              <div className='card-link-outer'>
                <svg className='next-svg' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"  viewBox="0 0 81.4 81.4" >
                  <rect className='outer' x="12.9" y="12.9" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -16.8972 40.6348)" fill="none" stroke="#F74765" strokeWidth="2" strokeMiterlimit="10" width="55.5" height="55.5"/> <polyline className='inner' fill="none" stroke="#F74765" strokeWidth="2" strokeMiterlimit="10" points="40.7,20.5 60.8,40.7 40.7,60.8 "/>
                  </svg>

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
