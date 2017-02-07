import React, { Component, PropTypes } from 'react'

import { Link } from 'react-router'
import { observer } from 'mobx-react'

import './Switcher.sass'
import store from '../../Store'

@observer
export default class Switcher extends Component {
  static propTypes = {
    project: PropTypes.string.isRequired
  }
  render() {
    let project = this.props.project

    return (

      <div className='project-switcher'>
        <Link to='/' className='project-switcher-btn close'>
          <div className='cross cross1'></div>
          <div className='cross cross2'></div>
        </Link>
          <div className='switcher-line one'></div>
          <div className='project-switcher-title--container'>
          <div className='project-switcher-title'>{store[project].Header} - {store[project].Name}</div>
          </div>
        <Link to={store[project].Next} className='project-switcher-btn next'>
          <div className='arrow'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 166.2 284.9"><path d="M222.7,135.9L89.7,2.9a9,9,0,0,0-13.1,0L62.2,17.1a9,9,0,0,0,0,13.1L174.4,142.5,62.2,254.7a9,9,0,0,0,0,13.1l14.3,14.3a9,9,0,0,0,13.1,0l133-133A9,9,0,0,0,222.7,135.9Z" transform="translate(-59.4)"/></svg>
          </div>
        </Link>
        <Link to={store[project].Prev}  className='project-switcher-btn prev'>
          <div className='arrow'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 166.2 284.9"><path d="M110.5,142.5L222.7,30.3a9,9,0,0,0,0-13.1L208.4,2.9a9,9,0,0,0-13.1,0l-133,133a9,9,0,0,0,0,13.1l133,133a9,9,0,0,0,13.1,0l14.3-14.3a9,9,0,0,0,0-13.1Z" transform="translate(-59.4)"/></svg>
          </div>
        </Link>
      </div>
    );
  }
}
