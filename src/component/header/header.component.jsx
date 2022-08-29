import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Banner from '../banner/banner.component';
import NavBar from '../nav-bar/nav-bar.component';

import './header.styles.scss';

function Header({ trending }) {
    return (
        
        
        <div className="banner-carousel">
           <Carousel
                showIndicators={false}
                showThumbs={false}
                className='banner'
            >
                {
                    trending.map(movieItem => <Banner movieItem={movieItem} key={movieItem.id}></Banner>)
                }
            </Carousel>
        </div>
    )
   
}

export default Header;