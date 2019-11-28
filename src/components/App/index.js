import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../Header';
import './App.scss';
// import fetchData from '../../utils/fetchData';


const App = () => {
  // const [username, setUsername] = useState('');
  const [searchText, setSearchText] = useState('');

  const handleSearch = (event) => {
    setSearchText(event.target.value);
  };

  useEffect(() => {
    if (searchText.length < 3) return;

    axios.get('https://torre-user.herokuapp.com/https://torre.bio/api/bios/jetonthaci', {
      mode: 'no-cors',
      headers: {
        'Content-type': 'application/json',
      },
    })
      .then((res) => {
        console.log(res.data);
      });
  }, [searchText]);

  return (
    <div className="page">
      <Header searchText={searchText} searchHandler={handleSearch} />
    </div>
  );
};

export default App;
