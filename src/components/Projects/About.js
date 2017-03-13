import React from 'react'
import Media from 'react-media'
import { observer } from 'mobx-react'
import store from '../Store'

import Switcher from './_common/Switcher'
import SwitcherPor from './_common/SwitcherPor'

import codepen from '../../assets/codepen.svg'
import github from '../../assets/github.svg'
import CVFr from '../../assets/Fabrice_Pomata_CV_Fr.pdf'
import CVEn from '../../assets/Fabrice_Pomata_CV_En.pdf'

import './project.sass'


@observer
export default class About extends React.Component {
  componentDidMount() {
    document.body.scrollTop = 0
  }
  render() {
    return (
      <div>
        <div className='project' >
          {store.language === 'FR' ?
            <main className='wrapper'>
              <h1 className='about-title'>Bonjour,</h1>
              <section className='section-first'>
                <p id='pitch'>{ store.About.Text_1_fr }</p>
              </section>
              <section  className='section-second'>
                  <div className='brackets'>
                    <a className="contact" href="mailto:fab.pomata@gmail.com"><span className='email'>fab.pomata@gmail.com</span></a>
                  </div>
              </section>

              <section  className='section-third about-flex'>
                <div className='about-skills'>
                  <div className='logos'>
                    <strong>Liens : </strong>
                    <a href='https://github.com/Lakston' target='_blank'><img className='about-logo' src={github} alt='github logo'/> github</a>
                    <a href='https://codepen.io/Lakston/' target='_blank'><img className='about-logo' src={codepen} alt='codepen logo'/> codepen</a>
                  </div>
                  <ul className='skills'>
                    <li><strong>Javascript :</strong> React, Angular, jQuery, es6/es7, mobX, Modernizr</li>
                    <li><strong>Web :</strong> HTML, CSS, Pug, Sass, Boostrap, Foundation</li>
                    <li><strong>Dev Tools : </strong>Git, Webpack, Gulp, Babel, esLint</li>
                    <li><strong>Softwares : </strong>Photoshop, Illustrator, Sketch, Atom, iTerm</li>
                  </ul>
                </div>
                <div className='about-cv'>
                  <a className='cv-button' href={CVFr}><span>Télécharger un CV</span></a>
                </div>
            </section>

          </main>
          :                 <main className='wrapper'>
                              <h1 className='about-title'>Hi,</h1>
                              <section className='section-first'>
                                <p id='pitch'>{ store.About.Text_1_en }</p>
                              </section>

                              <section  className='section-second'>
                                  <div className='brackets'>
                                    <a className="contact" href="mailto:fab.pomata@gmail.com"><span className='email'>fab.pomata@gmail.com</span></a>
                                  </div>
                              </section>

                              <section  className='section-third about-flex'>
                                <div className='about-skills'>
                                  <div className='logos'>
                                    <strong>Links : </strong>
                                    <a href='https://github.com/Lakston' target='_blank'><img className='about-logo' src={github} alt='github logo'/> github</a>
                                    <a href='https://codepen.io/Lakston/' target='_blank'><img className='about-logo' src={codepen} alt='codepen logo'/> codepen</a>
                                  </div>
                                  <ul className='skills'>
                                    <li><strong>Javascript :</strong> React, Angular, jQuery, es6/es7, mobX, Modernizr</li>
                                    <li><strong>Web :</strong> HTML, CSS, Pug, Sass, Boostrap, Foundation</li>
                                    <li><strong>Dev Tools : </strong>Git, Webpack, Gulp, Babel, esLint</li>
                                    <li><strong>Softwares : </strong>Photoshop, Illustrator, Sketch, Atom, iTerm</li>
                                  </ul>
                                </div>
                                <div className='about-cv'>
                                  <a className='cv-button' href={CVEn}><span>Download a Resume</span></a>
                                </div>
                            </section>
                        </main>}
      </div>
      <Media query={{orientation: 'portrait'}}>
          {matches => matches ?
            ( <SwitcherPor project='About'/> ) : (  <Switcher project='About' /> )}
      </Media>
    </div>
    );
  }
}
