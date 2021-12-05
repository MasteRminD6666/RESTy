import React, { useState } from 'react';
import './app.scss';

// Let's talk about using index.js and some other name in the component folder
// There's pros and cons for each way of doing this ...
import Header from './components/header';
import Footer from './components/footer';
import Form from './components/form';
import Results from './components/results';

function App (props){
const [data, setData] = useState(null);
const [requestParams, setRequestParams] = useState({});
 
  function callApi (requestParams) {
    // mock output
    const data = {
      count: 2,
      results: [
        {name: 'fake thing 1', url: 'http://fakethings.com/1' ,},
        {name: 'fake thing 2', url: 'http://fakethings.com/2',},
      ],
    };
   
    setData(data) 
    setRequestParams(requestParams)
  }

    return (
      <React.Fragment>
        <Header />
      
        <Form handleApiCall={callApi()} />
        <Results data={data} />
        <Footer />
      </React.Fragment>
    );
  
}

export default App;