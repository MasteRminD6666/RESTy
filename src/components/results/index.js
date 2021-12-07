import './Results.scss';
import JSONPretty from 'react-json-pretty';
function Results(props) {

  const jsonHeader = {
    'type': 'mock data',
    'cache-control': 'public, max-age=86400, s-maxage=86400',
    'content-type': 'application/json; charset=utf-8',
  };
  const noResults ={
    'error type': 'There is No results'
  }
  return (
    <section>
      <h2>Headers</h2>
     
      <JSONPretty data={props.data.headers ?  props.data.headers : jsonHeader}></JSONPretty>
      <h2>Results</h2>
      <JSONPretty data={props.data.data.results ? props.data.data.results : null}></JSONPretty>
     
      
    </section>
  );
}

export default Results;
