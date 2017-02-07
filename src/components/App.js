import React from "react";
import Media from 'react-media'

import store from './Store'
import ProjectMenu from './ProjectMenu/ProjectMenu'
import ProjectMenuPor from './ProjectMenu/ProjectMenuPor'


const App = (props) => (
  <Media query={{orientation: 'portrait'}}>
      {matches => matches ? (

        <ProjectMenuPor store={store}/>
      ) : (
        <div className='main'>
          <ProjectMenu store={store}/>
        </div>
      )}
  </Media>
  );

export default App
