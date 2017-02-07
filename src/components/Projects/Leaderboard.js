import React from 'react'
import Media from 'react-media'
import { observer } from 'mobx-react'
import store from '../Store'

import Switcher from './_common/Switcher'
import SwitcherPor from './_common/SwitcherPor'
import Badges from './_common/Badges'

import './project.sass'

import img from '../../assets/projects/Leaderboard-main-med.png'
import imgSma from '../../assets/projects/Leaderboard-main-sma.png'
import imgBig from '../../assets/projects/Leaderboard-main.jpg'

import imgFetch from '../../assets/projects/Leaderboard-Fetch.jpg'
import imgMap from '../../assets/projects/Leaderboard-Map.jpg'

import check from '../../assets/check.svg'

@observer
export default class Leaderboard extends React.Component {
  componentDidMount() {
    document.body.scrollTop = 0
  }
  render() {
    return (
      <div>
        <div className='project' >
        {store.language === 'FR' ?
          <main className='wrapper'>
            <h1 className='title'>{store.Leaderboard.Name}</h1>
            <Badges store={store} project='Leaderboard' />
            <section className='section-first'>
              <p>Ce leaderboard utilise l'API de FreeCodeCamp pour créer une représentation de l'activité des utilisateurs. Une fois la reqête Ajax effectuée les données sont mise en page via React et Boostrap.</p>
            </section>

            <img
              src={img}
              srcSet={`${imgSma} 550w,
              ${img} 1000w,
              ${imgBig}  1600w`}
              className='project-ss'
              alt='leaderboard presentation' />
              <section  className='section-second'>
                <h2><img src={check} alt='check mark'/> Récupération des données avec Fetch</h2>
                <p>Cette application utilise <a href='https://developer.mozilla.org/fr/docs/Web/API/Fetch_API' target='_blank'>Fetch</a> pour récupérer les données nécéssaires et React mappe ces données pour créer le Leaderboard. </p>

                <img
                  src={imgFetch}
                  className='project-ss'
                  alt='Fetch example code' />
                <img
                  src={imgMap}
                  className='project-ss'
                  alt='React map example code' />
              </section>

          </main>
          :                 <main className='wrapper'>
                              <h1 className='title'>{store.Leaderboard.Name}</h1>
                              <Badges store={store} project='Leaderboard' />
                              <section className='section-first'>
                                <p>This Leaderboard uses the FreeCodeCamp API to create a visual representation of its users activity. Once the Ajax request is successfull the data is presented via React and Boostrap.</p>
                              </section>

                              <img
                                src={imgFetch}
                                srcSet={`${imgSma} 550w,
                                ${img} 1000w,
                                ${imgBig}  1600w`}
                                className='project-ss'
                                alt='leaderboard presentation' />

                              <section  className='section-second'>
                                <h2><img src={check} alt='check mark'/> Data fetching using the Fetch API</h2>
                                <p>This application uses <a href='https://developer.mozilla.org/en/docs/Web/API/Fetch_API' target='_blank'>Fetch</a> to gather the necessary data and then React maps that data to create the Leaderboard. </p>
                                <img
                                    src={imgFetch}
                                    className='project-ss'
                                    alt='Fetch example code' />
                              </section>

                        </main>}
      </div>
      <Media query={{orientation: 'portrait'}}>
          {matches => matches ?
            ( <SwitcherPor project='Leaderboard'/> ) : (  <Switcher project='Leaderboard' /> )}
      </Media>
    </div>
    );
  }
}
