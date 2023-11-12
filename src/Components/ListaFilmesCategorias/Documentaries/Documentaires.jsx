import React, { useEffect, useState } from 'react'
import {Navigation, Pagination} from 'swiper/modules';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css'
import '../StyledCategories.css'
import { Link } from 'react-router-dom';

const ApiKey = 'api_key=7aed3b0709affa8e69f823deca8fa4cf';
const urlBase = 'https://api.themoviedb.org/3'
const urlImage = 'https://image.tmdb.org/t/p/w500/'




function Documentaires() {
    const [listen, setListen] = useState([]);

    const getMovies = async () => {
        const urlAPI = `${urlBase}/discover/movie?with_genres=99&language=pt-BR&${ApiKey}`
        const req = await fetch(urlAPI);
        const res = await req.json();
        setListen(res.results)
    }
    useEffect(() => {
        getMovies()

    }, [])
        
    const swiperParams = {
        modules: [Navigation, Pagination],
        navigation: true,
        pagination: true,
        breakpoints: {
           1024: {
            slidesPerView: 6.4,
          },
          0: {
            slidesPerView: 2.7,
          },
        },
      };

    return (
    <div className='containerMovies'>
        <div className='categoryName'>
            <span>Documentarios</span>
        </div>
        <div className='widthSwiper'>
            <Swiper {...swiperParams}>
                {listen.map((movie, index)=> (
                    <SwiperSlide key={index}>
                        <Link to={`/watchInfo/movie/${movie.id}`}>
                            <div className='containerSwiper'>
                                <img src={urlImage+movie.poster_path} />
                                <span>{movie.title ? movie.title : movie.name}</span>
                            </div>
                        </Link>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    </div>
  )
}

export default Documentaires
