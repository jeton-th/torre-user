import axios from 'axios';

const fetchData = async (url) => {
  const result = await axios.get(url,
    {
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json',
      },
    });

  return result;
};

export default fetchData;
