import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import fetchData from '../../utils/fetchData';
import './Main.scss';

const Main = ({ user }) => {
  const [connections, setConnections] = useState([]);

  useEffect(() => {
    if (!user) return;

    fetchData(`https://torre.bio/api/people/${user.publicId}/connections`)
      .then((res) => res.data)
      .then((data) => {
        setConnections(data);
      });
  }, [user]);

  return (
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

      <div className="connections">
        {
          connections.length > 0 && (
            <div>
              <h2>Connections</h2>
              <ul>
                {
                connections.map((c) => (
                  <li key={c.person.id}>{c.person.name}</li>
                ))
                }
              </ul>
            </div>
          )
        }
      </div>
    </div>
  );
};
Main.propTypes = {
  user: PropTypes.object,
};

Main.defaultProps = {
  user: null,
};

export default Main;
