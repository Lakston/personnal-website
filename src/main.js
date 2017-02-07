import React from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router, Match, Miss, history } from 'react-router'
import Media from 'react-media'


import App from './components/App'
import Aside from './components/Aside/Aside'
import AsidePor from './components/Aside/AsidePor'
import NoMatch from './components/Utilities/NoMatch'
import Portfolio from './components/Projects/Portfolio'
import Leaderboard from './components/Projects/Leaderboard'
import Lakston from './components/Projects/Lakston'
import LiveSearch from './components/Projects/LiveSearch'
import TwitchViewer from './components/Projects/TwitchViewer'
import Simon from './components/Projects/Simon'
import About from './components/Projects/About'

import './main.sass'

const Main = () => (
  <Router onUpdate={() => window.scrollTo(0, 0)} history={ history } >
    <div>
    <Media query={[{orientation: 'portrait'}]}>
        {matches => matches ? (
          <AsidePor />
        ) : (
          <Aside />
        )}
    </Media>
        <Match exactly pattern='/' component={ App } />
        <Match  pattern='/portfolio'  component={ Portfolio } />
        <Match  pattern='/lakston'  component={ Lakston }  onUpdate={() => window.scrollTo(0, 0)}/>
        <Match  pattern='/leaderboard'  component={ Leaderboard } />
        <Match  pattern='/livesearch'  component={ LiveSearch } />
        <Match  pattern='/twitchviewer'  component={ TwitchViewer } />
        <Match  pattern='/simon'  component={ Simon } />
        <Match  pattern='/about'  component={ About } />
        <Miss component={ NoMatch } />

    </div>
  </Router>
);

export default Main


ReactDOM.render(<Main />, document.getElementById('root'));
