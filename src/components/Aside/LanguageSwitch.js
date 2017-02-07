import React from 'react'
import { observer } from 'mobx-react'

import store from '../Store'

@observer
export default class LanguageSwitch extends React.Component {
  constructor() {
    super()
    this._toggleLang = this._toggleLang.bind(this)
  }
  _toggleLang() {
    store.language === 'FR' ? store.language = 'EN' : store.language = 'FR'
  }
  render() {
    return (
      <div className={this.props.mobile ? 'language-por' : 'language'} onClick={this._toggleLang}>{store.language}</div>
    );
  }
}
