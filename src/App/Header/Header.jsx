import React from 'react'
import letf from '../../Asset/RickMorty1.jpg'
import right from '../../Asset/RickMorty2.jpg'
import './Header.css'

export const Header = () => {
  return (
    <header className="header">
      <div className="header__left">
        <img src={letf} alt="" />
      </div>
      <p className='title-header'>
        Rick and Morty
      </p>
      <div className="header__right">
        <img src={right} alt="" />
      </div>
    </header>
  )
}