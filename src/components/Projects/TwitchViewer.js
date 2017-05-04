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
              <h2>Angular 4 et AngularCLI</h2>
              <p>Ce projet a été développé avec la toute dernière version d'Angular (4.0 à ce jour) et généré via AngularCLI; il utilise donc aussi la dernière version de Typescript.</p>
            </section>

            <section  className='section-third'>
              <h2>Utilisation de modèles et de services</h2>
              <p>La création de la liste des utilisateurs est générée via requete Jsonp et mise en forme grâce à un modèle de channel afin d'assurer un formattage des données homogène. Le tout géré par un service qui se charge d'effectuer les requetes Json à l'API de Twitch.tv.</p>
            </section>
          </main>
          :                 <main className='wrapper'>
                              <h1 className='title'>{store.TwitchViewer.Name}<span className='title--dot'>.</span></h1>
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
                                  <h2>Angular 4 and AngularCLI</h2>
                                  <p>This project was developped with the latest version of Angular (4.0) and managed with AngularCLI, therefore it uses the latest version of Typescript too.</p>
                                </section>

                                <section  className='section-third'>
                                  <h2>Using models and services</h2>
                                  <p>The channels list is generated via a Jsonp request to the Twitch API handled by an Angular service and formatted with the help of a model to ensure a proper data structure.</p>
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
