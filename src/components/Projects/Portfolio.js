import React from 'react'
import Media from 'react-media'
import { observer } from 'mobx-react'
import store from '../Store'

import Switcher from './_common/Switcher'
import SwitcherPor from './_common/SwitcherPor'
import Badges from './_common/Badges'

import './project.sass'

import img from '../../assets/projects/Portfolio-main-med.png'
import imgSma from '../../assets/projects/Portfolio-main-sma.png'
import imgBig from '../../assets/projects/Portfolio-main.png'

import resp from '../../assets/projects/Portfolio-resp-med.png'
import respSma from '../../assets/projects/Portfolio-resp-sma.png'
import respBig from '../../assets/projects/Portfolio-resp.png'

import check from '../../assets/check.svg'

@observer
export default class Portfolio extends React.Component {
  componentDidMount() {
    document.body.scrollTop = 0
  }
  render() {
    return (
      <div>
        <div className='project' >
        {store.language === 'FR' ?
          <main className='wrapper'>
            <h1 className='title'>{store.Portfolio.Name}<span className='title--dot'>.</span></h1>
            <Badges store={store} project='Portfolio' />
            <section className='section-first'>
              <p>{ store.Portfolio.Text_1_fr }</p>
            </section>

            <img
              src={img}
              srcSet={`${imgSma} 550w,
              ${img} 1000w,
              ${imgBig}  1600w`}
              className='project-ss'
              alt='portfolio presentation' />
              <section  className='section-second'>
                <h2><img src={check} alt='check mark'/> Site bilingue</h2>
                <p>La possibilité de changer de langue était très importante, j'ai donc développé un composant React qui va chercher les données via mobX suivant la langue qu'a choisit l'utilisateur. L'avantage de React pour ce cas de figure est qu'on ne recharge pas la page lorsqu'on change la langue, le texte est simplement remplacé avec un gain évident tant niveau performance que pour l'expérience utilisateur, le tout sans nécéssiter de base de donnée.</p>
              </section>
              <section  className='section-third'>
                <h2><img src={check} alt='check mark'/> Design Responsive</h2>
                <p>Le design s'adapte à la foix à la résolution de l'écran et à son orientation. Avec l'utilisation toujours en hausse des appareils mobiles il est maintent crucial de fournir une expérience adaptée à chaque utilisateur sans pour autant faire de sacrifices au niveau design.</p>
                <img
                  src={resp}
                  srcSet={`${respSma} 550w,
                  ${resp} 1000w,
                  ${respBig}  1600w`}
                  className='project-ss'
                  alt='responsive design example' />
              </section>
          </main>
          :                 <main className='wrapper'>
                              <h1 className='title'>{store.Portfolio.Name}<span className='title--dot'>.</span></h1>
                              <Badges store={store} project='Portfolio' isMobile={true} />
                              <section className='section-first'>
                                <p>{ store.Portfolio.Text_1_en }</p>
                              </section>

                              <img
                                src={img}
                                srcSet={`${imgSma} 550w,
                                ${img} 1000w,
                                ${imgBig}  1600w`}
                                className='project-ss'
                                alt='portfolio presentation' />
                                <section  className='section-second'>
                                  <h2><img src={check} alt='check mark'/> Bilingual website</h2>
                                  <p>It was very important to add the possibility to change the language so I developed a React component that will fetch the language data via mobX depending on the user's choice. The advantage of React in this case is that the website will not reload when changing the language, the text is simply replaced in the view for a big performance gain and makes for a better user experience; and without using a database.</p>
                                </section>
                                <section  className='section-third'>
                                  <h2><img src={check} alt='check mark'/> Responsive Design</h2>
                                  <p>The design adapts to both the screen resolution and its orientation. With a growing use of mobile devices it is now crucial to deliver a similar experience to the users without compromising the design.</p>
                                  <img
                                    src={resp}
                                    srcSet={`${respSma} 550w,
                                    ${resp} 1000w,
                                    ${respBig}  1600w`}
                                    className='project-ss'
                                    alt='responsive design example' />
                                </section>
                        </main>}
      </div>
      <Media query={{orientation: 'portrait'}}>
          {matches => matches ?
            ( <SwitcherPor project='Portfolio'/> ) : (  <Switcher project='Portfolio'/> )}
      </Media>
    </div>
    );
  }
}
