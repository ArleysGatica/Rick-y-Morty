import React from 'react'
import { Header } from '../Header/Header';
import './PageStyle.css';

const Page = ({ data }) => {
  console.log(data);

  return (
    <div className="page">
      <Header />
      <div className="page__content">
        {data.map(item => (
          <article className="page__content__card" key={item.id}>
            <p>{item.name}</p>
            <picture className='Item'>
              <img src={item.image} alt={item.name} />
            </picture>
            <span className='item__info'>
              {item.status}
              {item.species}
              {item.type}
              {item.episode.length > 0 ? item.episode.length : 'No episodes'}
            </span>
          </article>
        ))}
      </div>
    </div >
  )
}

export default Page;