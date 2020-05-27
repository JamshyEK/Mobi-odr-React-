import React,{Component} from 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import './App.css';
import bgImage from './images/bgimage.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import BrandNav from './loginComponents/BrandNav';
import Login from './loginComponents/Login';
import Signup from './loginComponents/Signup';

// function App() {
//   return (
//     <div className="App">
//      <Button variant="primary">Primary</Button>{' '}
//      <Button variant="danger">Hello</Button>
     
//     </div>
//   );
// }

class App extends Component{
render(){

let backImage={
  backgroundImage: `url(${bgImage})`,
  width : '100vw',
  height: '100vh',
  backgroundSize: 'cover'
}
  return(

    <Router>
       <div  className="App">
       
       <div className="container-fluid" style={backImage}>
       <BrandNav/>
          <div className="row">
          <div className="col-md-8 "></div>
          <div className="col-md-3  carddiv"> 
          <Switch>
            <Route path="/Login">
            <Login/>
            </Route>
            <Route path="/Signup">
            <Signup/>
            </Route>
            <Route path="/">
            <Login/>
            </Route>
          </Switch>
             
            
           </div>
           <div className="col-md-1 "></div>
         </div>
        
       </div>
     </div>
    </Router>

  )
}

}

export default App;
