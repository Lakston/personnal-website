import React from 'react'

import { observer } from 'mobx-react'
import Card from '../Card/Card'
import './ProjectMenu.sass'

@observer
export default class ProjectMenu extends React.Component {
  constructor() {
    super()
    this._handleKeyNav = this._handleKeyNav.bind(this)
  }
  componentDidMount() {
    window.addEventListener('keydown', this._handleKeyNav)
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this._handleKeyNav)
  }
  _handleKeyNav(e) {
    const LEFT = 37
    const RIGHT = 39
    const KEY = e.keyCode

    switch(KEY) {
      case (LEFT) :
         this.props.store.currentProject > 1 ? this.props.store.currentProject-- : null
        break
      case(RIGHT):
        this.props.store.currentProject < 7 ? this.props.store.currentProject++ : null
        break
    }
  }
  _cardStyle(id) {
    let current = this.props.store.currentProject
    let alpha = Math.abs(current - id)
    if(id === current) {
      return {zIndex: 1500, transform: 'scale(1)', boxShadow: '0px 0px 29px 0px rgba(0,0,0,0.5)'}
      } else {
        return {zIndex: 1000 - (alpha * 100), transform: `scale(${1-(0.018*Math.abs(alpha))})`,boxShadow: '0px 0px 29px 0px rgba(0,0,0,0.5)'}
      }
    }
  render() {
    let cards = this.props.store.cards
    return (
        <nav className='nav-wrapper' ref={(c) => this._container = c}>
        {cards.map((project, i) => (
          <Card
                key={i}
                handleClick={ this.props.store._activeProject.bind(this, i) }
                header={project.header}
                icon={project.icon}
                id={i+1}
                isActive={this.props.store.currentProject  === i + 1 ? true : false}
                link={project.link}
                name={this.props.store.language === 'FR' ? project.nom : project.name}
                style={this._cardStyle(i + 1)}
                />))}
                </nav>
    );
  }
}
