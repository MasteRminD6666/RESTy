import React from 'react';
import Results from '../components/results/index';
import '@testing-library/jest-dom/extend-expect'
import { render ,screen  } from '@testing-library/react';
import Form from '../components/form/index';

it('should render data from an api GET request', async() => {
  let requestOptions = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
  };
  let raw = await fetch ('https://swapi.dev/api/people/', requestOptions);
  let data = await raw.json();
  let entries = data.results;
  render(<Results src={entries} />);
  // screen.debug();
  // console.log(entries);
  expect(entries).toBeTruthy();
  expect(entries[0]['name']).toEqual('Luke Skywalker');
  expect(entries[4]['name']).toEqual('Leia Organa');
  expect(entries[9]['name']).toEqual('Obi-Wan Kenobi');
  expect(entries[9]['eye_color']).toEqual('blue-gray');
  expect(entries.length).toEqual(10);

});


  
test('should show Url form', () => {
    render(<Form />)
    const input = screen.getByLabelText('URL:')
    expect(input).toBeInTheDocument();
    // Events and assertions...
  })