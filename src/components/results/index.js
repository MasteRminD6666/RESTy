import './Results.scss';
import JSONPretty from 'react-json-pretty';
function Results(props) {
  return (
    <section>
      <JSONPretty id="json-pretty" data={props.data? props.data : null}/>
    
    </section>
  );
}

export default Results;
