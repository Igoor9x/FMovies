
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './InfoMovieAndTV.css'
const ApiKey = 'api_key=7aed3b0709affa8e69f823deca8fa4cf';
const urlBase = 'https://api.themoviedb.org/3'
const urlImage = 'https://image.tmdb.org/t/p/w500/'



const InfoMovieAndTV = () => {
    const { id, mediaType } = useParams();
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        const buscarDetalhesDoFilme = async () => {
          const urlAPI = `${urlBase}/${mediaType}/${id}?language=pt-BR&${ApiKey}`;
          const req = await fetch(urlAPI);
          const res = await req.json();
          setMovie(res);
        };
        buscarDetalhesDoFilme();
    }, [id, mediaType]);
    
    console.log(movie);
    return (
        <div>
            {movie ? (
                
                <div className='containerInfo'>
                    <div className='imageBackground' style={{ backgroundImage: `url(${urlImage.replace('w500', 'original') + movie?.backdrop_path})` }}></div>
                    <div className='imageBackgroundBlack'></div>
                    <div className='infoMovie'>
                        <img src={urlImage.replace('w500', 'original') + movie.poster_path} alt={movie.title} />
                    </div>
                </div>
            ) : (
                <p>Carregando informações do filme...</p>
            )}
        </div>
    );
};



export default InfoMovieAndTV
