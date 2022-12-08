import React from 'react';

const BASE_URL = 'https://www.acme-api.com/api';
const Search = ({ setUsers, setIsLoading })=> {
  const [term, setTerm] = React.useState('');
  const search = async(ev)=> {
    ev.preventDefault();
    const url = `${BASE_URL}/users/search/${term}`;
    setIsLoading(true);
    const response = await fetch(url);
    const json = await response.json();
    const { users } = json;
    setIsLoading(false);
    setUsers(users);
  }
  return (
      <form onSubmit={ search }>
        <input value={ term } onChange={ ev => setTerm(ev.target.value)}/>
        <button disabled={ !term }>Search</button>
      </form>
  );
};

export default Search;