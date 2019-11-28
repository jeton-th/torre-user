import axios from 'axios';

const fetchData = async (url) => {
  const result = await axios.get(url,
    {
      headers: {
        'Content-Type': 'application/json',
      },
    });

  return result;
};

export default fetchData;
