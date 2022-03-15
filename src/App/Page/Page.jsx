import React from 'react'
import { Header } from '../Header/Header';

const Page = ({ data }) => {

  console.log("Esta pasando algo" + data);

  return (
    <div className="page">
      <Header />
      <div className="page__content">
        <div className="page__content__title">
          <h1>Rick and Morty</h1>
          <h2>Pick your favorite episode</h2>
        </div>
      </div>
    </div>
  )
}
export default Page;