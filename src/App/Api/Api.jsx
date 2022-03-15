import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Page from '../Page/Page';

const Datos = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      axios.get('https://rickandmortyapi.com/api/character')
        .then(res => {
          setData(res.data.results);
        })
        .catch(err => {
          console.log(err);
        });
    };
    fetchData();
  }, []);

  return (
    <>
      <Page data={data} />
    </>
  )
}

export default Datos;