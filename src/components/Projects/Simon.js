import React from 'react'
import Media from 'react-media'
import { observer } from 'mobx-react'
import store from '../Store'

import Switcher from './_common/Switcher'
import SwitcherPor from './_common/SwitcherPor'
import Badges from './_common/Badges'

import img from '../../assets/projects/simon-main.jpg'
import imgSma from '../../assets/projects/simon-main-sma.jpg'
import imgMed from '../../assets/projects/simon-main-med.jpg'

import './project.sass'

@observer
export default class Simon extends React.Component {
  componentDidMount() {
    document.body.scrollTop = 0
  }
  render() {
    return (
      <div>
        <div className='project' >
        {store.language === 'FR' ?
          <main className='wrapper'>
            <h1 className='title'>{store.Simon.Name}<span className='title--dot'>.</span></h1>
            <Badges store={store} project='Simon' />
            <section className='section-first'>
              <p>Simon est une réplique du jeu de société des années 80 développé en Javascript et jQuery. </p>
            </section>

            <img
              src={imgMed}
              srcSet={`${imgSma} 550w,
              ${imgMed} 1000w,
              ${img}  1600w`}
              className='project-ss'
              alt='Simon game' />

            <section  className='section-second'>
              <h2>jQuery et Object Oriented pour la structure</h2>
              <p>Les méthodes étant assez nombreuses il était impératif de bien déclarer chaque objet , j'ai donc choisi d'utiliser jQuery avec un style Object Oriented pour donner une structure plus facile à lire et modifier.</p>
            </section>
            <section  className='section-third'>
              <h2 className='third'>Mise en cache des méthodes et optimisation</h2>
              <p className='third'>jQuery peut vite devenir gourmant en ressources, il a donc été nécessaire de mettre en cache le maximum de selections et les binds d'évènement pour minimiser leur impact sur le DOM et ne les soliciter que lors de l'initialisation de chaque objet pour un gain de performance important.</p>
            </section>
            <section  className='section-fourth'>
              <h2 className='third'>Pug et Sass pour la lisibilité</h2>
              <p className='third'>Pour continuer dans la simplicité et lisibilité adoptée dans la partie javascript j'ai opté pour Pug et Sass pour respectivement le html et css. Le résultat est un code court et très déclaratif qui se lit facilement. Ajoutez à ça les commentaires et on obtient un code qui sera compris très rapidement et modifié sans casse tête.</p>
            </section>
          </main>
          :                 <main className='wrapper'>
                              <h1 className='title'>{store.Simon.Name}<span className='title--dot'>.</span></h1>
                              <Badges store={store} project='Simon' isMobile={true} />
                              <section className='section-first'>
                                <p>Simon is a replica of the 80's game developped in Javascript and jQuery.</p>
                              </section>

                              <img
                                src={imgMed}
                                srcSet={`${imgSma} 550w,
                                ${imgMed} 1000w,
                                ${img}  1600w`}
                                className='project-ss'
                                alt='Simon game' />

                                <section  className='section-second'>
                                  <h2>jQuery and Object Oriented structure</h2>
                                  <p>With the numerous methods in the code it was crucial that the objects were declared and structured properly. I opted for an Obect Oriented approach with jQuery for an easily readable and modifiable layout.</p>
                                </section>
                                <section  className='section-third'>
                                  <h2 className='third'>Method caching and optimisation</h2>
                                  <p className='third'>jQuery can quickly become resource hungry so it was necessary to cache the DOM selections and event bindings to minimize their impact on the DOM therefore only declaring them in the initialization phase for an apparent performance gain.</p>
                                </section>
                                <section  className='section-fourth'>
                                  <h2 className='third'>Pug et Sass for lisibility</h2>
                                  <p className='third'>To continue with the simplicity and lisibility goals of the app adopted in the javascript part I opted for Pug and Sass for respectively the html and css. The result is a shorter and very declarative code easiliy readable. Adding to that the code comments and you get a code that will be understood quickly and modified without problems.</p>
                                </section>
                        </main>}
      </div>
      <Media query={{orientation: 'portrait'}}>
          {matches => matches ?
            ( <SwitcherPor project='Simon'/> ) : (  <Switcher project='Simon'/> )}
      </Media>
    </div>
    );
  }
}
