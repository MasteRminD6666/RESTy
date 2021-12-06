import React, { useState ,useEffect } from 'react';
import './app.scss';

// Let's talk about using index.js and some other name in the component folder
// There's pros and cons for each way of doing this ...
import Header from './components/header';
import Footer from './components/footer';
import Form from './components/form';
import Results from './components/results';
import axios from 'axios';




function App() {
  const [data, setData] = useState(null);
  const [requestParams, setRequestParams] = useState({}); 
 
  async function callApi(formData) {
    // console.log('this is the from data', formData);
    try {
      if (formData.url != '') {
        // console.log('im here ')
        await axios.get(formData.url ,{headers: {"Accept":"application/json"}}).then(results => {
          const data = results.data
          console.log(results.data);
          setData({ data });
          setRequestParams(formData);
        });
        
      }
     else{
      const data = {
        count: 2,
        results: [
          { name: 'fake thing 1', url: 'http://fakethings.com/1' },
          { name: 'fake thing 2', url: 'http://fakethings.com/2' },
        ],
      };
  
      setData({ data });
      setRequestParams(formData);
      

     }

    } catch (error) {
     
     console.log(error.message);
    }
  }
  return (
    <>
      <Header />
      <div>Request Method: {requestParams.method}</div>
      <div>URL: {requestParams.url}</div>
      <Form handleApiCall={callApi} />
      <Results data={data} />
      <Footer />
    </>
  )
}
export default App;


// in class Component

// import React, { useState ,useEffect } from 'react';
// import './app.scss';

// // Let's talk about using index.js and some other name in the component folder
// // There's pros and cons for each way of doing this ...
// import Header from './components/header';
// import Footer from './components/footer';
// import Form from './components/form';
// import Results from './components/results';
// import Button from 'react-bootstrap/Button';

// class App extends React.Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       data: null,
//       requestParams: {},
//     };
//   }

//   callApi = (requestParams) => {
//     // mock output
//     const data = {
//       count: 2,
//       results: [
//         {name: 'fake thing 1', url: 'http://fakethings.com/1'},
//         {name: 'fake thing 2', url: 'http://fakethings.com/2'},
//       ],
//     };
//     this.setState({data, requestParams});
//   }


//   render() {
//     return (
//       <React.Fragment>
//         <Header />
//         <div>Request Method: {this.state.requestParams.method}</div>
//         <div>URL: {this.state.requestParams.url}</div>
//         <Form handleApiCall={this.callApi} />
//         <Results data={this.state.data} />
//         <Footer />
//       </React.Fragment>
//     );
//   }
// }

// export default App;

