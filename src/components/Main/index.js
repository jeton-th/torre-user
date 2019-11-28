import React from 'react';
import PropTypes from 'prop-types';
import './Main.scss';

const Main = ({ user }) => (
  <div className="content">
    <div className="container">
      {user && (
      <div className="user">
        {user.picture && (<img src={user.picture} alt="avatar" />)}

        <div className="info">
          <h1>{user.name}</h1>
          <p>{user.professionalHeadline}</p>
        </div>
      </div>
      )}
    </div>
  </div>
);
Main.propTypes = {
  user: PropTypes.object,
};

Main.defaultProps = {
  user: null,
};

export default Main;
