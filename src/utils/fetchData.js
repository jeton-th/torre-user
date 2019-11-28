import axios from 'axios';

const fetchData = async (method, path, data) => {
  const result = await axios[method]('https://torre.bio/api/bios/jetonthaci',
    {
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'same-origin',
    });

  return result;
};

export default fetchData;
