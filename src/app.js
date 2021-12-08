import React, { useState, useEffect, useReducer } from 'react';
import './app.scss';
// Let's talk about using index.js and some other name in the component folder
// There's pros and cons for each way of doing this ...
import Header from './components/header';
import Footer from './components/footer';
import Form from './components/form';
import Results from './components/results';
import axios from 'axios';
import History from './components/history/History';


function App() {
  const [data, setData] = useState(null);
  const [requestParams, setRequestParams] = useState({});
  const initialState = {
    history: [],
  };
  const [state, dispatch] = useReducer(historyReducer, initialState);
  useEffect(async () => {
    if (requestParams.method === 'POST') {
      await axios({
        method: "post",
        url: requestParams.url,
        data: {
          username: "fake 1",
          firstname: "fake",
          lastname: "fake"
        }
      });
    }
  }, [requestParams]);



  function historyReducer(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
      case 'SAVE-TO-HISTORY':
        const history = [...state.history, payload.history];
        return { history };
      default:
        return state;
    }
  }

  function historyAction(history) {
    return {
      type: 'SAVE-TO-HISTORY',
      payload: { history },
    };
  }


  async function callApi(formData) {
    // console.log('this is the from data', formData);
    try {
      if (formData.url != '') {
        // console.log('im here ')
        await axios.get(formData.url, { headers: { "Accept": "application/json" } }).then(results => {
          const data = results.data
          console.log(results.data);
          setData({ data });
          setRequestParams(formData);
          dispatch(historyAction(formData));
        });

      }
      else {
        const data = {
          headers: {
            'type': 'mock data',
            'cache-control': 'public, max-age=86400, s-maxage=86400',
            'content-type': 'application/json; charset=utf-8',
          },
          count: 2,
          results: [
            { name: 'fake thing 1', url: 'http://fakethings.com/1' },
            { name: 'fake thing 2', url: 'http://fakethings.com/2' },
          ],
        };
        setData({ data });
        setRequestParams(formData);
        dispatch(historyAction(formData));
      }

    } catch (error) {
      console.log(error.message);
    }
  }
  return (
    <>
      <Header />
      <Form handleApiCall={callApi} />
      <h4>Request Method: {requestParams.method}</h4>
      <h4>URL: {requestParams.url}</h4>
      {data ?
        <Results data={data} /> : <Footer />
      }
      {state.history.length ? <History history={state.history} /> : null}
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

