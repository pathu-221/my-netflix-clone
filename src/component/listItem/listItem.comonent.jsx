import React from 'react';
import { BASE_URL } from '../../utils/getMovies';

import { truncate } from '../../utils/getMovies';


import './listItem.styles.scss';

function ListItem({ title, para, poster_path }) {

  return (
    // <div className="row-poster ">
    //     {/* <h1 className='title'>{ original_name }</h1> */}
    //     <img  className={`poster ${isLarge ? 'poster-large' : ''}`} src={`${BASE_URL}/original${poster_path}`} alt="" />
    // </div>
    <div className="collection-item">
        <img
          src={`${BASE_URL}/original${poster_path}`}
          alt="movie"
          className="collection-item__movie-image"
        />
        <div className="collection-item__text">
          <h1 className="collection-item__title">{title}</h1>
          <span className="collection-item__overview">{truncate(para, 150)}</span>
          <div className="collection-item__addtolist">
      </div>
    </div>
        
    </div>
  )
}

export default ListItem;