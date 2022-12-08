import ReactDOM from 'react-dom';
import React, { useState } from 'react';
import Users from './Users';
import Search from './Search';
import Loader from './Loader';

const App = ()=> {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  return (
    <div>
      <h1>Acme User Search</h1>
      <Search setUsers={ setUsers } setIsLoading={ setIsLoading }/>
      <Users users={ users }/>
      { isLoading ? <Loader /> : null }
    </div>
  );
};
//const root = ReactDOM.createRoot(document.querySelector('#root'));
//root.render(<App />);
ReactDOM.render(<App />, document.querySelector('#root'));