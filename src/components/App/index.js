import React, { useState, useEffect } from 'react';
import Header from '../Header';
import Main from '../Main';
import './App.scss';
import fetchData from '../../utils/fetchData';

const App = () => {
  const [user, setUser] = useState(null);
  const [searchText, setSearchText] = useState('');
  const [searchList, setSearchList] = useState([]);

  const handleSearch = (event) => {
    setSearchText(event.target.value);
  };

  useEffect(() => {
    if (searchText.length < 3) return;

    fetchData(`https://torre.bio/api/people?q=${searchText}&limit=10`)
      .then((res) => res.data)
      .then((data) => setSearchList(data));
  }, [searchText]);

  const selectUser = (selectedUser) => {
    setSearchText('');
    setSearchList([]);
    setUser(selectedUser);
  };

  return (
    <div className="page">
      <Header
        searchText={searchText}
        searchHandler={handleSearch}
        searchList={searchList}
        userSelect={selectUser}
      />

      <Main user={user} />
    </div>
  );
};

export default App;
