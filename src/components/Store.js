import { action, observable } from "mobx"

class AppStore {
  @observable language = 'FR'

  @observable currentProject = 1

  @action _activeProject = (idx) => { this.currentProject = idx + 1 }

  @observable cards = [
                                            {
                                              name: 'Portfolio',
                                              nom: 'Portfolio',
                                              header: '1',
                                              link: 'portfolio'
                                            },
                                            {
                                              name: 'Lakston',
                                              nom: 'Lakston',
                                              header: '2',
                                              link: 'lakston'
                                            },
                                            {
                                              name: 'Leaderboard',
                                              nom: 'Leaderboard',
                                              header: '3',
                                              link: 'leaderboard'
                                            },
                                            {
                                              name: 'Live Search',
                                              nom: 'Live Search',
                                              header: '4',
                                              link: 'livesearch'
                                            },
                                            {
                                              name: 'Twitch Viewer',
                                              nom: 'Twitch Viewer',
                                              header: '5',
                                              link: 'twitchviewer'
                                            },
                                            {
                                              name: 'Simon',
                                              nom: 'Simon',
                                              header: '6',
                                              link: 'simon'
                                            },
                                            {
                                              name: 'About',
                                              nom: 'A propos',
                                              header: 'A',
                                              link: 'about'
                                            }
                                          ]

@observable Portfolio = {
            Name: 'Portfolio',
            Header: '01',
            Type : 'Website',
            Role: 'Dev & Design',
            Tech: ['React', 'MobX', 'React-Router', 'Webpack'],
            Next: '/lakston',
            Prev: '/about',
            Project: 1
          }
@observable Lakston = {
            Name: 'Lakston',
            Header: '02',
            Type : 'Website',
            Role: 'Dev & Design',
            Tech: ['React', 'MobX', 'React-Router', 'Webpack'],
            Next: '/leaderboard',
            Prev: '/portfolio',
            extLinks:[{ link: 'http://lakston.tk', text: 'Lakston.tk'}, {link: 'https://github.com/Lakston/Lakston', text: 'Github'}],
            Project: 2
            }
@observable Leaderboard = {
            Name: 'Leaderboard',
            Header: '03',
            Type : 'React App',
            Role: 'Dev & Design',
            Tech: ['React', 'Fetch', 'Webpack', 'Bootstrap'],
            Next: '/livesearch',
            Prev: '/lakston',
            extLinks:[{ link: 'https://codepen.io/Lakston/pen/kkaxvB', text: 'Codepen'}, {link: 'https://github.com/Lakston/React-leaderboard', text: 'Github'}],
            Project: 3
          }
@observable LiveSearch = {
            Name: 'LiveSearch',
            Header: '04',
            Type : 'Web App',
            Role: 'Dev & Design',
            Tech: ['Angular', 'Gulp'],
            Next: '/twitchviewer',
            Prev: '/leaderboard',
            extLinks:[{ link: 'https://codepen.io/Lakston/pen/bpOZRY', text: 'Codepen'}, {link: 'https://github.com/Lakston/Wikipedia-Live-Search', text: 'Github'}],
            Project: 4
          }
@observable TwitchViewer = {
            Name: 'Twitch Viewer',
            Header: '05',
            Type : 'Web App',
            Role: 'Dev & Design',
            Tech: ['Angular', 'Gulp', 'Bootstrap'],
            Next: '/simon',
            Prev: '/livesearch',
            extLinks:[{ link: 'https://codepen.io/Lakston/pen/bpZVGe', text: 'Codepen'}, {link: 'https://github.com/Lakston/angular-twitch-viewer', text: 'Github'}],
            Project: 5
          }
@observable Simon = {
            Name: 'Simon',
            Header: '06',
            Type : 'Javascript App',
            Role: 'Dev & Design',
            Tech: ['Jade', 'Sass', 'jQuery', 'Gulp'],
            Next: '/about',
            Prev: '/twitchviewer',
            extLinks:[{ link: 'https://codepen.io/Lakston/pen/grvway/', text: 'Codepen'}, {link: 'https://github.com/Lakston/simon-game', text: 'Github'}],
            Project: 6
          }
@observable About = {
            Name: 'About',
            Header: '00',
            Next: '/portfolio',
            Prev: '/simon',
            Project: 7,
            Text_1_fr: 'Je suis un développeur Front-End et designeur UI/UX. Je cherche un poste de développeur dans une agence soit en tant que travailleur à distance, soit sur place.',
            Text_1_en: 'I am a Front-End Developer and UI/UX designer. I am looking for a full time position in an agency as a remote worker or on site.'
            }
}

let store = new AppStore

export default store
