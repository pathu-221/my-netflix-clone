import React from 'react'
import { BASE_URL } from '../../utils/getMovies';
import { truncate } from '../../utils/getMovies';
import './banner.styles.scss';

function Banner({ movieItem }) {

    
    const { title, backdrop_path, overview } = movieItem;


    return (
    // <div className='banner-container' style = {{
    //     backgroundSize: 'cover',
    //     backgroundImage: `url(${BASE_URL}/original${backdrop_path})`,
    //     backgroundPosition: 'center center'
    // }}>
    //     <h1>{ title }</h1>
    // </div>
    <header className='banner'
    style={{
        backgroundSize: 'cover',
        backgroundImage: `url(${BASE_URL}/original${backdrop_path})`,
        backgroundPosition: 'center center'
    }}>
        <div className="banner-contents">
            <h1 className='banner-title'>{ title }</h1>
            <div className="banner-buttons">
                <button className="banner-button"> Play </button>
                <button className="banner-button">My list</button>
            </div>
            <h1 className="banner-description">{truncate(overview, 150)}</h1>
        </div>
        <div className="banner-fadeBottom"></div>
    </header>
  )
}


export default Banner;