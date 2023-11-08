import React, { useEffect, useState } from 'react'
import './HomeShow.css'
import { Link } from 'react-router-dom';

const ApiKey = 'api_key=7aed3b0709affa8e69f823deca8fa4cf';
const urlBase = 'https://api.themoviedb.org/3'
const urlImage = 'https://image.tmdb.org/t/p/w500/'

function HomeShow() {
    const [randomMovie, setRandomMovie] = useState(null);

    const getRandomMovie = async() => {
            const urlAPI = `${urlBase}/trending/all/week?&language=pt-BR&${ApiKey}&page=2`
        const req = await fetch(urlAPI);
        const res = await req.json();
        const index = Math.floor(Math.random() * res.results.length);
        const movieSelected = res.results[index];
        console.log(res);
        setRandomMovie(movieSelected);
    }
    useEffect(() => {
        getRandomMovie();
    }, []);

    useEffect(() => {
        console.log(randomMovie);;
    }, [randomMovie]);


    
  return (
      <div className='containerHomeShow'>
        <div className='imageBackground' style={{ backgroundImage: `url(${urlImage.replace('w500', 'original') + randomMovie?.backdrop_path})` }}></div>
        <div className='imageBackgroundBlack'></div>
        <div className='centerInfo'>
            <div className='textInfo'>
                <h2>{randomMovie?.title ? randomMovie.title : randomMovie?.name}</h2>
                <span>{randomMovie?.overview}</span>
                <div className='buttonsSipnose'>
                        {randomMovie && (
                            <button>
                                <Link to={`/watchInfo/${randomMovie?.media_type}/${randomMovie?.id}`}>Saiba mais</Link>
                            </button>
                        )}
                        {randomMovie && (
                            <button className='btn2'>
                                <Link to={`/watchInfo/${randomMovie?.media_type}/${randomMovie?.id}`}>Assistir Trailer</Link>
                            </button>
                        )}
                    </div>
            </div>
            <div className='imageTitle'>
                <img src={urlImage.replace('w500', 'original') + randomMovie?.poster_path} />
            </div>
        </div>
    </div>
  )
}

export default HomeShow
