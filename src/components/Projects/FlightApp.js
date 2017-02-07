import React from 'react'
import Media from 'react-media'
import { observer } from 'mobx-react'
import store from '../Store'

import Switcher from './_common/Switcher'
import SwitcherPor from './_common/SwitcherPor'
import Badges from './_common/Badges'

import img from '../../assets/projects/flightapp-main.jpg'
import imgSma from '../../assets/projects/flightapp-main-sma.jpg'
import imgMed from '../../assets/projects/flightapp-main-med.jpg'

import './project.sass'


@observer
export default class FlightApp extends React.Component {
  componentDidMount() {
    document.body.scrollTop = 0
  }
  render() {
    return (
      <div>
        <div className='project' >
        {store.language === 'FR' ?
          <main className='wrapper'>
            <h1 className='title'>{store.FlightApp.Name}</h1>
            <Badges store={store} project='FlightApp' />
            <section className='section-first'>
              <p>{ store.FlightApp.Text_1_fr }</p>
            </section>

            <img
              src={imgMed}
              srcSet={`${imgSma} 550w,
              ${imgMed} 1000w,
              ${img}  1600w`}
              className='project-ss'
              alt='computer' />

            <section  className='section-second'>
              <h2>Un design responsive et facilement modifiable</h2>
              <p>{ store.FlightApp.Text_2_fr }</p>
            </section>
            <section  className='section-third'>
              <h2 className='third'>Rapidité et navigation</h2>
              <p className='third'>{ store.FlightApp.Text_3_fr }</p>
            </section>
          </main>
          :                 <main className='wrapper'>
                              <h1 className='title'>{store.FlightApp.Name}</h1>
                              <Badges store={store} project='Lakston' isMobile={true} />
                              <section className='section-first'>
                                <p>{ store.FlightApp.Text_1_en }</p>
                              </section>

                              <img
                                src="src/assets/projects/Lakston-main-med.png"
                                srcSet="src/assets/projects/Lakston-main-sma.png 600w,
                                src/assets/projects/Lakston-main-med.png 960w,
                                src/assets/projects/Lakston-main.png 1600w"
                                className='project-ss'
                                alt='computer' />

                              <section  className='section-second'>
                                <h2>Easily customizable and responsive design</h2>
                                <p>{ store.FlightApp.Text_2_en }</p>
                              </section>
                              <section  className='section-third'>
                                <h2 className='third'>Speed and Navigation</h2>
                                <p className='third'>{ store.FlightApp.Text_3_en }</p>
                              </section>
                        </main>}
      </div>
      <Media query={{orientation: 'portrait'}}>
          {matches => matches ?
            ( <SwitcherPor project='FlightApp'/> ) : (  <Switcher project='FlightApp'/> )}
      </Media>
    </div>
    );
  }
}
