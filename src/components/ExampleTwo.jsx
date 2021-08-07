import React from 'react';
import {useState} from 'react';
import axios from 'axios';

export const ExampleTwo = () => {
  const [state, setState] = useState();

  const getItem = async () => {
    try {
      const response = await axios.get(`http://localhost:3004/result2`);
      setState(response.data);
    } catch (e) {
      alert(e.response.data);
    }
  };

  const obj = state;
  const resultArr = [];

  for (let prop in obj) {
    resultArr.push({
      table: prop,
      dates: obj[prop].map((i) => i.date),
      quantities: obj[prop].map((i) => i.quantity),
      prices: obj[prop].map((i) => i.price),
    });
  }

  /// Example Result Two
  resultArr.length > 0 && console.log(resultArr);

  return (
    <div className="App">
      <div>Test Two</div>
      <button onClick={() => getItem()}>Example 2</button>
    </div>
  );
};
