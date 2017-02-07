import React, { PropTypes } from 'react';
import { observer } from 'mobx-react'

import './Badges.sass'

@observer
export default class Badges extends React.Component {
  static propTypes = {
    project: PropTypes.string.isRequired
  };
  render() {
    const project = this.props.project
    const techBadges = this.props.store[project].Tech
    const extLinks = this.props.store[project].extLinks

    return (
        <div className='project-badges'>
        <div className=' snap'>
          <h6>TYPE</h6>
          <span className='badge'>{this.props.store[project].Type}</span>
        </div>
        <div className='snap'>
          <h6>ROLE</h6>
          <span className='badge'>{this.props.store[project].Role}</span>
        </div>
        <div className='snap'>
          <h6>TECH</h6>
          {techBadges.map((tech, i) => <span className='badge' key={tech}>{tech}</span>)}
        </div>
        {this.props.store[project].extLinks ? <div className='snap'>
          <h6>{this.props.store.language === 'FR' ? 'LIENS' : 'LINKS'}</h6>
          {extLinks.map((link, i) => <a href={link.link} className='badge extlink' id='link' target='_blank' key={link + i}>{link.text}</a>)}

        </div> : null}

      </div>

    );
  }
}
