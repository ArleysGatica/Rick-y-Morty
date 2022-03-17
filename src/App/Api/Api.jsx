import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Page from '../Page/Page';
import Pagination from '../Pagination/Pagination';

const Datos = () => {
  const [data, setData] = useState([]);
  const [info, setInfo] = useState({});
  const [Busqueda, setBusqueda] = useState('');
  const [Resultado, setResultado] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await axios.get('https://rickandmortyapi.com/api/character')
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
    const { next } = info;
    axios.get(next)
      .then(res => {
        setData(res.data.results);
        setInfo(res.data.info);
      })
      .catch(err => {
        console.log(err);
      });
  }

  const handleOnChange = (e) => {
    setBusqueda(e.target.value);
  }

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const url = `https://rickandmortyapi.com/api/character/?name=${Busqueda}`;
    axios.get(url)
      .then(res => {
        setResultado(res.data);
        setData(res.data.results);
        setInfo(res.data.info);
      })
      .catch(err => {
        console.log(err);
      });
  }

  const handleClickPrev = () => {
    const { prev } = info;
    axios.get(prev)
      .then(res => {
        setData(res.data.results);
        setInfo(res.data.info);
      })
      .catch(err => {
        console.log(err);
      });
  }

  return (
    <>
      <Page data={data}
        handleOnChange={handleOnChange}
        handleOnSubmit={handleOnSubmit}
        Resultado={Resultado}
      />

      <Pagination
        handleClickNext={handleClickNext}
        handleClickPrev={handleClickPrev}
        info={info}
      />

    </>
  )
}

export default Datos; 