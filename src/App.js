import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './components/Header/Navbar';
import Form from './components/Form/Form';
import Footer from './components/Footer/Footer';
import Results from './components/Result/Result';

 class App extends React.Component {
  constructor(props) {
    super(props);
   
  }
  render() { 
    return (
      <>
       <Header />
        <Switch>
          <Route exact path="/">
            <Form />
          </Route>
        
      
        </Switch>
        <Footer />
      </>
    )
  }
}
 
export default App;
