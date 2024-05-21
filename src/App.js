import React from 'react';
// import Counter from './session-2/CouterApp/Counter';
// import LifeCycleMethod from './Mern-01/session3/lifeCycleMethod';
import ImageGallery from './Mern-01/session3/imageGallery';
import FCOne from './Mern-01/session4/FCOne';
import FCUseEffect from './Mern-01/session5/FCUseEffect';
import Ref from './Mern-01/session6/Ref';
import Debouncing from './Mern-01/session6/Debouncing';
import Home from './Mern-01/session7/ImageGallery/Home';

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
        {/* <ImageGallery/> */}
        {/* <FCOne/> */}
        {/* <FCUseEffect/> */}
        {/* <Ref/> */}
        {/* <Debouncing/> */}
        <Home/>
    </div>
    );      
  }
}

export default App;