import React from 'react'
import Media from 'react-media'
import { observer } from 'mobx-react'
import store from '../Store'

import Switcher from './_common/Switcher'
import SwitcherPor from './_common/SwitcherPor'
import Badges from './_common/Badges'

import img from '../../assets/projects/Lakston-main-med.png'
import imgSma from '../../assets/projects/Lakston-main-sma.png'
import imgBig from '../../assets/projects/Lakston-main.png'

import random from '../../assets/projects/Lakston-random-med.png'
import randomSma from '../../assets/projects/Lakston-random-sma.png'
import randomBig from '../../assets/projects/Lakston-random.png'

import grid from '../../assets/projects/Lakston-grid-med.png'
import gridSma from '../../assets/projects/Lakston-grid-sma.png'
import gridBig from '../../assets/projects/Lakston-grid.png'

import full from '../../assets/projects/Lakston-full-med.png'
import fullSma from '../../assets/projects/Lakston-full-sma.png'
import fullBig from '../../assets/projects/Lakston-full.png'

import check from '../../assets/check.svg'

import './project.sass'

@observer
export default class Lakston extends React.Component {
  componentDidMount() {
    document.body.scrollTop = 0
  }
  render() {
    return (
      <div>
        <div className='project' >
        {store.language === 'FR' ?
          <main className='wrapper'>
            <h1 className='title'>{store.Lakston.Name}<span className='title--dot'>.</span></h1>
            <Badges store={store} project='Lakston' />
            <section className='section-first'>
              <p>{ store.Lakston.Text_1_fr }</p>
            </section>
            <img
              src={img}
              srcSet={`${imgSma} 550w,
              ${img} 1000w,
              ${imgBig}  1600w`}
              className='project-ss'
              alt='Lakston.com presentation' />
              <section  className='section-second'>
                <h2 className='project-ss'><img src={check} alt='check mark'/> Page d'accueil avec image aléatoire et adaptée à l'orientation</h2>
                <p>Une photo aléatoire est présentée sur la page d'accueil et la couleur du logo s'adapte à la couleur dominante pour une meilleure visibilité.</p>
              <img
                src={random}
                srcSet={`${randomSma} 550w,
                ${random} 1000w,
                ${randomBig}  1600w`}
                className='project-ss'
                alt='Lakston.com homepage examples' />
              </section>
              <section  className='section-third'>
                <h2 className='project-ss'><img src={check} alt='check mark'/> Grille  Responsive</h2>
                <img
                  src={grid}
                  srcSet={`${gridSma} 550w,
                  ${grid} 1000w,
                  ${gridBig}  1600w`}
                  className='project-ss'
                  alt='Lakston.com responsive grid example' />
              </section>
              <section  className='section-third'>
                <h2 className='project-ss'><img src={check} alt='check mark'/> Mode plein écran et navigation aisée</h2>
                <p>Quand un utilisateur clique sur une image il accède à la version pleine résolution, il peut ensuite naviguer dans la gallerie soit avec sa souris soit au clavier. Une expérience pleine écran est aussi possible grâce à la fullscreen API de chaque navigateur.</p>
                <img
                  src={full}
                  srcSet={`${fullSma} 550w,
                  ${full} 1000w,
                  ${fullBig}  1600w`}
                  className='project-ss'
                  alt='Laskton.com fullscreen example' />
              </section>
          </main>
          :                 <main className='wrapper'>
                              <h1 className='title'>{store.Lakston.Name}</h1>
                              <Badges store={store} project='Lakston' isMobile={true} />
                              <section className='section-first'>
                                <p>{ store.Lakston.Text_1_en }</p>
                              </section>

                              <img
                                src={img}
                                srcSet={`${imgSma} 550w,
                                ${img} 1000w,
                                ${imgBig}  1600w`}
                                className='project-ss'
                                alt='Lakston.com presentation' />
                                <section  className='section-second'>
                                    <h2 className='project-ss'><img src={check} alt='check mark'/> Random and resolution dependant image on homepage</h2>
                                  <p>A random photo dependant on the resolution and the screen orientation of the visitor is presented on the homepage to always provide a full resolution / full screen experience and the logo color adapts for a better visibility .</p>
                                <img
                                  src={random}
                                  srcSet={`${randomSma} 550w,
                                  ${random} 1000w,
                                  ${randomBig}  1600w`}
                                  className='project-ss'
                                  alt='Lakston.com homepage examples' />
                                </section>
                                <section  className='section-third'>
                                  <h2 className='project-ss'><img src={check} alt='check mark'/> Responsive Grid</h2>
                                  <img
                                    src={grid}
                                    srcSet={`${gridSma} 550w,
                                    ${grid} 1000w,
                                    ${gridBig}  1600w`}
                                    className='project-ss'
                                    alt='Lakston.com responsive grid example' />
                                </section>
                                <section  className='section-third'>
                                  <h2 className='project-ss'><img src={check} alt='check mark'/> Fullscreen mode and easy navigation</h2>
                                  <p>When the user clicks on an image he is presented with a full resolution image, he can then navigate with either his mouse or his keyboard. A true fullscreen experience is also provided using the fullscreen API of each browser.</p>
                                  <img
                                    src={full}
                                    srcSet={`${fullSma} 550w,
                                    ${full} 1000w,
                                    ${fullBig}  1600w`}
                                    className='project-ss'
                                    alt='Laskton.com fullscreen example' />
                                </section>

                        </main>}
      </div>
      <Media query={{orientation: 'portrait'}}>
          {matches => matches ?
            ( <SwitcherPor project='Lakston' key='Switcher'/> ) : (  <Switcher project='Lakston' key='Switcher'/> )}
      </Media>
    </div>
    );
  }
}
