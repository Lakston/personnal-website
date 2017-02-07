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
            Text_1_fr: 'Je suis un développeur Front-End et designeur UI/UX. Après 10 ans de Freelance, je cherche maintenant un poste de développeur dans une agence soit en tant que travailleur à distance, soit sur place.',
            Text_1_en: 'I am a Front-End Developer and UI/UX designer. After 10 years of Freelance work I am now looking for a full time position in an agency as a remote worker or on site.',
            Text_2_fr: 'Constamment en train d\'apprendre pour devenir un meilleur développeur. Passioné de voyage, j\'ai passé beaucoup de temps à l\'étranger, Japon, Corée, Australie, Canada... Je vais où mes passions du web et de la photo me portent. ',
            Text_2_en: 'Constantly learning to become a better developper, and a better person. In love with travel, I spent a lot of time abroad, Japan, Korea, Australia, Canada... I\'ll go where my passions of the web and photography will take me. I am also a music lover, an avid coffee drinker, and I love the oxford comma.',
            Text_3_fr: 'Une agence qui croit en l\'importance d\'un design moderne et qui adopte les nouveaux outils du web pour créer une meilleure expérience pour les utilisateurs.',
            Text_3_en: 'A company who believes in the importance of good design and embraces the new technologies to create a better experience for the users.'
            }
}

let store = new AppStore

export default store
