import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../Header';
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

    fetchData(`https://torre.bio/api/people?q=${searchText}`)
      .then((res) => res.data)
      .then((data) => setSearchList(data));
  }, [searchText]);

  const selectUser = (user) => {
    setSearchText('');
    setSearchList([]);
    setUser(user);
    console.log(user);
  };

  return (
    <div className="page">
      <Header
        searchText={searchText}
        searchHandler={handleSearch}
        searchList={searchList}
        userSelect={selectUser}
      />
    </div>
  );
};

export default App;
