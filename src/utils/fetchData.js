import axios from 'axios';

const fetchData = async (url) => {
  const result = await axios.get(`https://cors-anywhere.herokuapp.com/${url}`,
    {
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json',
      },
    });

  return result;
};

export default fetchData;
