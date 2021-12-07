import './form.scss'
import { useState } from 'react';

function Form(props) {
  
  const [method, setMethod] = useState('GET');
  function handleSubmit(e) {
    e.preventDefault();
    const formData = {
      method: method,
      url: e.target.url.value,
    };
    props.handleApiCall(formData);
    console.log(method);
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          <span>URL: </span>
          <input name='url' type='text' />
          <button type='submit'>GO!</button>
          <br />
        </label>
        <label className='methods'>
          <button type="button" className="methodBtn1" onClick={() => setMethod('GET')}>GET</button>
          <button type="button" className="methodBtn2" onClick={() => setMethod('POST')}  >POST</button>
          <button type="button" className="methodBtn3" onClick={() => setMethod('PUT')}  >PUT</button>
          <button type="button" className="methodBtn4" onClick={() => setMethod('DELETE')}  >DELETE</button>
        </label>
      </form>
    </>
  );
}

export default Form;