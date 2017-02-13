import React from 'react'
import Media from 'react-media'
import { observer } from 'mobx-react'
import store from '../Store'

import Switcher from './_common/Switcher'
import SwitcherPor from './_common/SwitcherPor'
import Badges from './_common/Badges'

import './project.sass'

import img from '../../assets/projects/wiki-main-med.jpg'
import imgSma from '../../assets/projects/wiki-main-sma.jpg'
import imgBig from '../../assets/projects/wiki-main.jpg'

import imgFetch from '../../assets/projects/Leaderboard-Fetch.jpg'
import imgMap from '../../assets/projects/Leaderboard-Map.jpg'

import check from '../../assets/check.svg'

@observer
export default class LiveSearch extends React.Component {
  componentDidMount() {
    document.body.scrollTop = 0
  }
  render() {
    return (
      <div>
        <div className='project' >
          {store.language === 'FR' ?
            <main className='wrapper'>
              <h1 className='title'>{store.LiveSearch.Name}<span className='title--dot'>.</span></h1>
              <Badges store={store} project='LiveSearch' />
              <section className='section-first'>
                <p>Cette application web execute des recherches sur Wikipedia et affiche un résumé des 10 résultats les plus pertinents ou si l'utilisateur le désire, un article au hasard.</p>
              </section>

              <img
                src={img}
                srcSet={`${imgSma} 550w,
                  ${img} 1000w,
                ${imgBig}  1600w`}
                className='project-ss'
                alt='leaderboard presentation' />

              <section  className='section-second'>
                <h2><img src={check} alt='check mark'/> Utiliser le Two Way Data Binding d'Angular</h2>
                <p>Grâce au Two way Data Binding lorsque l'utilisateur est en train de taper sa recherche les résultats s'affinent en Live. </p>
                <p>Le code et l'application sont visibles sur Codepen et la structure des fichiers sur Github.</p>
              </section>

          </main>
          :                 <main className='wrapper'>
                              <h1 className='title'>{store.LiveSearch.Name}</h1>
                              <Badges store={store} project='LiveSearch' />
                              <section className='section-first'>
                                <p>This LiveSearch uses the FreeCodeCamp API to create a visual representation of its users activity.</p>
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
                                <p>This application uses <a href='https://developer.mozilla.org/en/docs/Web/API/Fetch_API' target='_blank'>Fetch</a> to gather the necessary data and then React maps that data to create the LiveSearch. </p>
                                <img
                                    src={imgFetch}
                                    className='project-ss'
                                    alt='Fetch example code' />
                              </section>

                        </main>}
      </div>
      <Media query={{orientation: 'portrait'}}>
          {matches => matches ?
            ( <SwitcherPor project='LiveSearch'/> ) : (  <Switcher project='LiveSearch' /> )}
      </Media>
    </div>
    );
  }
}
