
import React from 'react'
import './favorites.css'

const Favorites = ({favorites}) => {
  return (
    <>
      <h2>Favorites</h2>
      <div className='fav_row'>{favorites.map((fav, ind)=> (
        <div className='fav-item' key={ind}>{fav.title}</div>
      ))}</div>
    </>
  );
}

export default Favorites