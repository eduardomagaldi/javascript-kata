import React from 'react';
import DataService from './services/Data.service'

const App = () => {
  console.log('Hello world!');

  const dataService = DataService();

  const promise = dataService.fetchPublications();

  promise.then((json) => {
    console.log('json', json);
  });

  return <h1>Hello</h1>;
};

export default App;
