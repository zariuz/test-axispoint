import React from 'react';
import {useState} from 'react';
import axios from 'axios';
import {v1} from 'uuid';

export const ExampleOne = () => {
  const [state, setState] = useState();

  const getItem = async () => {
    try {
      const response = await axios.get(`http://localhost:3004/result`);
      setState(response.data);
    } catch (e) {
      alert(e.response.data);
    }
  };

  const obj = state?.categories;
  const resultArr = [];

  for (let prop in obj) {
    const parentID = v1();

    resultArr.push({
      parent_value: parentID,
      parent_label: prop,
      children: obj[prop].map((i) => ({
        children_value: v1(),
        children_label: i,
        parent_key: parentID,
      })),
    });
  }

  /// Example Result One
  resultArr.length > 0 && console.log(resultArr);

  return (
    <div className="App">
      <div>Test One</div>
      <button onClick={() => getItem()}>Example 1</button>
    </div>
  );
};
