import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Page from '../Page/Page';

const Datos = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/character?page=2')
      .then(res => {
        setData(res.data.results);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  console.log(data);

  return (
    <>
      <Page data={data} />
    </>
  )
}

export default Datos;