import ReactDOM from 'react-dom';
import React, { useState } from 'react';
import Search from './Components/Search';
import Profits from './Components/Profits';

const App = ()=> {
  const [profits, setProfits] = useState([]);
  return (
    <div>
      <h1>Acme Profits</h1>
      <Search setProfits={ setProfits }/>
      <Profits profits={ profits }/>
    </div>
  );
};
//const root = ReactDOM.createRoot(document.querySelector('#root'));
//root.render(<App />);
ReactDOM.render(<App />, document.querySelector('#root'));