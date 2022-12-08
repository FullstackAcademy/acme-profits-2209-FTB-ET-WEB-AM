import React, { useState, useEffect } from 'react';
import { fetchCompanies, fetchProfits } from '../api';

const Search = (props)=> {
  const setProfits = props.setProfits;
  const [companies, setCompanies] = useState([]);
  const [companyId, setCompanyId] = useState('');
  useEffect(()=> {
    fetchCompanies()
      .then(companies => setCompanies(companies))
  }, []);
  return (
    <form onSubmit={
      async(ev) => {
        ev.preventDefault();
        if(companyId){
          const profits = await fetchProfits(companyId);
          setProfits(profits);
        }
        else {
          setProfits([]);
        }
      }
    }>
      <select onChange={ ev => setCompanyId(ev.target.value)}>
        <option value=''>Choose A Company</option>
        {
          companies.map( company => {
            return (
              <option key={ company.id } value={ company.id }>
                { company.name }
              </option>
            );
          })
        }
      </select>
      <button>Get Profits</button>
    </form>
  );
};

export default Search;