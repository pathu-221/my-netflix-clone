import React from 'react';
import ListItem from '../listItem/listItem.comonent';

import {Swiper, SwiperSlide} from "swiper/react";
import { FreeMode, Paginatin, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";

import './listOverview.styles.scss';




function ListOverview({ movieList, listName, islarge }) {
  return (
    <div className='list-container'>
      <h1 className='heading'>{ listName }</h1>

      <Swiper
      slidesPerView={4}
      slidesPerGroup= {3}
      spaceBetween={30}
      freeMode={true}
      navigation={true}
      modules={[FreeMode, Navigation]}
      className="mySwiper">
      {
          movieList.map(item =>  <SwiperSlide key={item.id}>
            <ListItem 
            title={ item.title ? item.title : item.name }
            para = { item.overview }
            isLarge={ islarge }
            original_name={item.original_name} 
            poster_path={islarge ? item.poster_path : item.backdrop_path}
            key={item.id}></ListItem>
          </SwiperSlide>)
        }
      </Swiper>
    </div>
  )
}



export default ListOverview;