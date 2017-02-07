import React from 'react'
import { observer } from 'mobx-react'
import CardPor from '../Card/CardPor'
import './ProjectMenu.sass'

@observer
export default class ProjectMenu extends React.Component {

  _cardStyle(id) {
    let current = this.props.store.currentProject
    let alpha = Math.abs(current - id)


          if(id === current) {
            return {zIndex: 1500, transform: 'scale(1)', boxShadow: '0px 0px 29px 0px rgba(0,0,0,0.5)'}
            } else {
              return {zIndex: 1000 - (alpha * 100), transform: `scale(${1-(0.006*Math.abs(alpha))})`,boxShadow: '0px 0px 29px 0px rgba(0,0,0,0.3)'}
            }

    }

  render() {
    let cards = this.props.store.cards
    return (
      <nav className='nav-wrapper-por' >
        {cards.map((project, i) => (
          <CardPor
                key={i}
                handleClick={ this.props.store._activeProject.bind(this, i) }
                header={project.header}
                id={i+1}
                image={project.image}
                isActive={this.props.store.currentProject  === i + 1 ? true : false}
                link={project.link}
                name={this.props.store.language === 'FR' ? project.nom : project.name}
                style={this._cardStyle(i + 1)}
                />))}
        </nav>
    );
  }
}
