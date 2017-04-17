import React from 'react'
import Media from 'react-media'
import { observer } from 'mobx-react'
import store from '../Store'

import Switcher from './_common/Switcher'
import SwitcherPor from './_common/SwitcherPor'
import Badges from './_common/Badges'

import './project.sass'

import img from '../../assets/projects/data_choropleth.jpg'
import imgSma from '../../assets/projects/data_choropleth-sma.jpg'
import imgBig from '../../assets/projects/data_choropleth.jpg'

import imgTooltip from '../../assets/projects/data_choropleth_tooltip.jpg'

import check from '../../assets/check.svg'

@observer
export default class DataChoro extends React.Component {
  componentDidMount() {
    document.body.scrollTop = 0
  }
  render() {
    return (
      <div>
        <div className='project' >
        {store.language === 'FR' ?
          <main className='wrapper'>
            <h1 className='title'>{store.DataChoro.Name}<span className='title--dot'>.</span></h1>
            <Badges store={store} project='DataChoro' />
            <section className='section-first'>
              <p>Cette carte choroplèthe représente le pourcentage d'adultes de 25 ans et plus ayant obtenu un diplôme supérieur aux Etats-Unis. Elle a été développée en utilisant les données fournies par l'USDA Economic Research Service.</p>
            </section>

            <img
              src={img}
              srcSet={`${imgSma} 550w,
              ${img} 1000w,
              ${imgBig}  1600w`}
              className='project-ss'
              alt='leaderboard presentation' />
              <section  className='section-second'>
                <h2><img src={check} alt='check mark'/> Développé avec D3 et topoJSON</h2>
                <p>Grâce aux données fournies par l'USDA au format JSON et à la librairie topoJSON cette carte est générée en temps réel avec D3.js et offre une visualisation des données unique et interactive. Pour voir d'autres projets développés avec D3, consulter mon <a href='https://github.com/Lakston' target='_blank'> profil Github</a>.</p>
              </section>
              <section  className='section-third'>
                <h2><img src={check} alt='check mark'/> Tooltip dynamique</h2>
                <p>Un tooltip dynamique est disponible lorsque l'utilisateur survole la carte avec sa souris lui perméttant d'obtenir plus d'informations sur chaque cantons.</p>

                <img
                  src={imgTooltip}
                  className='project-ss'
                  alt='d3 tooltip' />
              </section>
              <section  className='section-fourth'>
                <h2><img src={check} alt='check mark'/> Yarn et Webpack 2</h2>
                <p>Ce projet utilise aussi les toutes dernières technologies disponibles à savoir <a href='https://yarnpkg.com/lang/en/' target='_blank'>Yarn</a> et <a href='https://webpack.js.org/' target='_blank'>Webpack 2</a>. Yarn, le gestionnaire de paquets développé par Facebook offre une meilleure gestion des modules node que npm et une sécuritée accrue quand à la gestion des version de ces modules. Webpack 2 introduit le tree shaking et j'ai immédiatement porté mes projets récents de webpack à webpack 2 afin de bénéficier des avancées de ce dernier.</p>
              </section>

          </main>
          :                 <main className='wrapper'>
                              <h1 className='title'>{store.DataChoro.Name}<span className='title--dot'>.</span></h1>
                              <Badges store={store} project='DataChoro' />
                              <section className='section-first'>
                                <p>This Choropleth Map shows the percentage of adults over 25 with a bachelor's degree in the US. It was developed using data from the USDA Economic Research Service.</p>
                              </section>

                              <img
                                src={img}
                                srcSet={`${imgSma} 550w,
                                ${img} 1000w,
                                ${imgBig}  1600w`}
                                className='project-ss'
                                alt='leaderboard presentation' />
                                <section  className='section-second'>
                                  <h2><img src={check} alt='check mark'/> Build with D3 and topoJSON</h2>
                                  <p>Using the USDA's data in JSON format and the topoJSON library this map is dynamically generated with D3.js and offers a unique and interactive data visualization experience. If you wish to see more of my D3 projects feel free to browse my <a href='https://github.com/Lakston' target='_blank'>Github profile</a>.</p>
                                </section>
                                <section  className='section-third'>
                                  <h2><img src={check} alt='check mark'/> Dynamic tooltip</h2>
                                  <p>A dynamic tooltip is available whe the user hovers on the map and offers more informations about each county and their related data.</p>

                                  <img
                                    src={imgTooltip}
                                    className='project-ss'
                                    alt='d3 tooltip' />
                                </section>
                                <section  className='section-fourth'>
                                  <h2><img src={check} alt='check mark'/> Yarn et Webpack 2</h2>
                                  <p>This project uses <a href='https://yarnpkg.com/lang/en/' target='_blank'>Yarn</a> and <a href='https://webpack.js.org/' target='_blank'>Webpack 2</a>. Yarn, the package manager developed by Facebook a better handling of node modules than npm and an increase security regarding their version. Webpack 2 intriduced tree shaking and I immediatly migrated my ongoing projects from webpack to webpack 2 to benefit from all the new features it offers.</p>
                                </section>

                        </main>}
      </div>
      <Media query={{orientation: 'portrait'}}>
          {matches => matches ?
            ( <SwitcherPor project='DataChoro'/> ) : (  <Switcher project='DataChoro' /> )}
      </Media>
    </div>
    );
  }
}
