import React from 'react'
import { Header } from '../Header/Header';
import './PageStyle.css';
import Card from './Card';
import Search from '../Search/Search';

const Page = ({ data, handleOnSubmit, handleOnChange, Busqueda }) => {

  console.log();

  return (
    <div className="page">
      <Header />
      <Search
        handleOnChange={handleOnChange}
        handleOnSubmit={handleOnSubmit}
        Busqueda={Busqueda}
      />
      <div className="page__content">
        {data.map(item => (
          <Card key={item.id} data={item} />
        ))}
      </div>
    </div >
  )
}

export default Page;