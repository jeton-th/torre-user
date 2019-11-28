import React, { useState, useEffect } from 'react';
import Header from '../Header';
import fetchData from '../../utils/fetchData';
import './App.scss';

const App = () => {
  // const [username, setUsername] = useState('');
  const [searchText, setSearchText] = useState('');

  const handleSearch = (event) => {
    setSearchText(event.target.value);
  };

  useEffect(() => {
    if (searchText.length < 3) return;

    fetchData('get', 'bios', searchText)
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [searchText]);

  return (
    <div className="page">
      <Header searchText={searchText} searchHandler={handleSearch} />
    </div>
  );
};

export default App;
