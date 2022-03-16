import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Page from '../Page/Page';

const Datos = () => {
  const [data, setData] = useState([]);
  const [info, setInfo] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      axios.get('https://rickandmortyapi.com/api/character')
        .then(res => {
          setData(res.data.results);
          setInfo(res.data.info);
        })
        .catch(err => {
          console.log(err);
        });
    };
    fetchData();
  }, []);

  const handleClickNext = () => {
    fetchData(info.next);
    window.scrollTo(0, 0);
  };

  const handleClickPrev = () => {
    fetchData(info.prev);
    window.scrollTo(0, 0);
  };

  return (
    <>
      <Page data={data}
        info={info}
        handleClick={handleClickNext}
        handleClickPrev={handleClickPrev}
      />
    </>
  )
}

export default Datos;