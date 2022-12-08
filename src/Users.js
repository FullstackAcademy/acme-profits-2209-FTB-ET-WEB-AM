import React from 'react';

const Users = ({ users })=> {
  return (
      <ul>
        {
          users.map( user => {
            return (
              <li key={ user.id }>
                { user.fullName }
                ( { user.email })
                <br />
                { user.title }
                
              </li>
            );
          })
        }
      </ul>
  );
};

export default Users;