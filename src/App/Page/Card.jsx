import React from 'react';

const Card = ({ data }) => {
  console.log(data);

  return (

    <div className="page__content">
      <article className='page__content__card'>
        <div className="Item">
          <img src={data.image} alt={data.name} />
        </div>
        <div className="seccion-title">
          <h2 className="card__title">{data.name}</h2>
          <p className="card__text">{data.status}</p>
          <p className="card__text">{data.species}</p>
          <p className="card__text">{data.type}</p>
        </div>
      </article>
    </div>
  )
}

export default Card;