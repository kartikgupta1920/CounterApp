import React from 'react';
// import Counter from './session-2/CouterApp/Counter';
// import LifeCycleMethod from './Mern-01/session3/lifeCycleMethod';
import ImageGallery from './Mern-01/session3/imageGallery';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      showComponent: true,
    };
  }
  render(){
    return( 
    <div>
     {/* <button 
        onClick={()=>
          this.setState((prev) => ({showComponent: !prev.showComponent}))
        }
        >Show/Hide Component
        </button>
        {this.state.showComponent && <LifeCycleMethod />} */}
        <ImageGallery/>
    </div>
    );      
  }
}

export default App;