import React from 'react'
import { Header } from '../Header/Header';
import './PageStyle.css';
import Card from './Card';
import Pagination from '../Pagination/Pagination';

const Page = ({ data }) => {

  return (
    <div className="page">
      <Header />
      <div className="page__content">
        {data.map(item => (
          <Card key={item.id} data={item} />
        ))}
      </div>
      <Pagination
      />
    </div >
  )
}

export default Page;