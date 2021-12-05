import './form.scss'

function Form(props) {

  function handleSubmit (e) {
    e.preventDefault();
    const formData = {
      method: 'GET',
      url: 'https://pokeapi.co/api/v2/pokemon',
      method: e.target.id.value,
      url: e.target.url.value,
    };


    props.handleApiCall(formData);
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
      
          
        <button className="methodBtn1" value="GET" id="btn1">GET</button>
              <button  className="methodBtn2" value="POST" id="btn2" >POST</button>
              <button  className="methodBtn3" value="PUT" id="btn3" >PUT</button>
              <button  className="methodBtn4" value="DELETE" id="btn4" >DELETE</button>

        
        </label>
      </form>
    </>
  );
}

export default Form;