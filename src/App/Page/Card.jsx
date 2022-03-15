import React from 'react';

const Card = ({ data }) => {
  console.log(data);

  return (
    <>
      <article className='page__content__card'>
        <div className="Item">
          <img src={data.image} alt={data.name} />
        </div>
        <div className="seccion-title">
          <h1>{data.name}</h1>
          <p>{data.status}</p>
          <p>{data.species}</p>
          <p>{data.type}</p>
          <p>{data.species.name === 'Human' ? data.origin.name : data.location.name}</p>
        </div>
      </article>
    </>
  )
}

export default Card;