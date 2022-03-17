import React, { useState } from 'react';
import axios from 'axios';
import './Search.css';

const Search = ({ handleOnChange, handleOnSubmit, Busqueda }) => {

  return (
    <section className="search">
      <div className="search__item">
        <input type="text"
          placeholder="Search"
          onChange={handleOnChange}
          value={Busqueda}
        />
        <button type="submit" onClick={handleOnSubmit}>Search</button>

      </div>
    </section>

  );
}

export default Search;