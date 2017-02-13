import React from 'react'
import Media from 'react-media'
import { observer } from 'mobx-react'
import store from '../Store'

import Switcher from './_common/Switcher'
import SwitcherPor from './_common/SwitcherPor'
import Badges from './_common/Badges'

import img from '../../assets/projects/TwitchViewer-main.jpg'
import imgSma from '../../assets/projects/TwitchViewer-main-sma.jpg'
import imgMed from '../../assets/projects/TwitchViewer-main-med.jpg'

import './project.sass'


@observer
export default class TwitchViewer extends React.Component {
  componentDidMount() {
    document.body.scrollTop = 0
  }
  render() {
    return (
      <div>
        <div className='project' >
        {store.language === 'FR' ?
          <main className='wrapper'>
            <h1 className='title'>{store.TwitchViewer.Name}<span className='title--dot'>.</span></h1>
            <Badges store={store} project='TwitchViewer' />
            <section className='section-first'>
              <p>Cette application web utilise l'API de Twitch.tv pour afficher une liste d'utilisateurs et leur status (hors-ligne, en-ligne et streaming). Des liens vers les profils et les stream en direct des utilisateurs sont crées pour permettre aux utilisateurs d'avoir toutes les informations et liens dont ils ont besoin.</p>
            </section>

            <img
              src={imgMed}
              srcSet={`${imgSma} 550w,
              ${imgMed} 1000w,
              ${img}  1600w`}
              className='project-ss'
              alt='TwitchViewer on Ipad' />

            <section  className='section-second'>
              <h2>Toutes les information dont l'utilisateur a besoin en un coup d'oeil</h2>
              <p>Grâce au service $http d'Angular la requête jsonp est des plus facile et l'ajout de ngAnimate apporte des animations lors de l'ajout ou retrait de lignes dans le tableau Boostrap.</p>
            </section>

            <section  className='section-third'>
              <h2>Utiliser les ressources d'AngularJS avec ngAnimate et $http</h2>
              <p>Grâce au service $http d'Angular la requête jsonp est des plus facile et l'ajout de ngAnimate apporte des animations lors de l'ajout ou retrait de lignes dans le tableau Boostrap.</p>
            </section>
          </main>
          :                 <main className='wrapper'>
                              <h1 className='title'>{store.TwitchViewer.Name}</h1>
                              <Badges store={store} project='TwitchViewer' isMobile={true} />
                              <section className='section-first'>
                                <p>This Web App uses the Twitch.TV API to display a list of users and their status (offline, online and streaming). Links to the streamers profiles and streams are created so the App users have all they need in one simple interface.</p>
                              </section>

                              <img
                                src={imgMed}
                                srcSet={`${imgSma} 550w,
                                ${imgMed} 1000w,
                                ${img}  1600w`}
                                className='project-ss'
                                alt='TwitchViewer on Ipad' />

                              <section  className='section-second'>
                                <h2>Using AngularJS own ngAnimate and $http</h2>
                                <p>Using the $http core service allows for an easy jsonp request and ngAnimate adds animations for the table rows when users are added and removed.</p>
                              </section>
                        </main>}
      </div>
      <Media query={{orientation: 'portrait'}}>
          {matches => matches ?
            ( <SwitcherPor project='TwitchViewer'/> ) : (  <Switcher project='TwitchViewer'/> )}
      </Media>
    </div>
    );
  }
}
