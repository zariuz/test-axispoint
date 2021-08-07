import React from 'react';
import './App.css';
import {ExampleOne} from './components/ExampleOne';
import {ExampleTwo} from './components/ExampleTwo';

export const App = () => {
  return (
    <div className="App">
      <ExampleOne />
      <hr />
      <ExampleTwo />
    </div>
  );
};
