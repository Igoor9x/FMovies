
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './InfoMovieAndTV.css'
import YouTube from 'react-youtube';
const ApiKey = 'api_key=7aed3b0709affa8e69f823deca8fa4cf';
const urlBase = 'https://api.themoviedb.org/3'
const urlImage = 'https://image.tmdb.org/t/p/original/'


const InfoMovieAndTV = () => {
    const { id, mediaType } = useParams();
    const [movie, setMovie] = useState(null);
    const [trailer, setTrailer] = useState('');
    const [elenco, setElenco] = useState("");

    useEffect(() => {
        const buscarDetalhesDoFilme = async () => {
          const movieURL = fetch(`${urlBase}/${mediaType}/${id}?language=pt-BR&${ApiKey}`).then((result) => result.json());
          const trailerURL = fetch(`${urlBase}/${mediaType}/${id}/videos?language=pt-BR&${ApiKey}`).then((result) => result.json());
          const ElencoURL = fetch(`${urlBase}/${mediaType}/${id}/credits?language=pt-BR&${ApiKey}`).then((result) => result.json());

          const[movieData, trailerData, elencoData] = await Promise.all([movieURL, trailerURL, ElencoURL]);
          setMovie(movieData);
          setTrailer(trailerData);
          setElenco(elencoData);
        };

        buscarDetalhesDoFilme(); 
    }, [id, mediaType]);

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
            )
             : (
                <p>Carregando informações do filme...</p>
            )}
                <div className='sobreContainer'>
                    <h2>SOBRE</h2>
                    <div className='sobre'>
                        <span>{movie?.overview}</span>
                    </div>
                </div>
                <div className='elencoContainer'>
                    <h2>ELENCO</h2>
                    <div className='elenco'>
                        {elenco && elenco.cast && elenco.cast.length >= 3 && (
                        <>
                        <div className='ator'>
                            <img src={urlImage + elenco.cast[0].profile_path} alt={elenco.cast[0].name} />
                            <span>{elenco.cast[0].name}</span>
                            <span>{elenco.cast[0].character}</span>
                        </div>
                        <div className='ator'>
                            <img src={urlImage + elenco.cast[1].profile_path} alt={elenco.cast[1].name} />
                            <span>{elenco.cast[1].name}</span>
                            <span>{elenco.cast[1].character}</span>
                        </div>
                        <div className='ator'>
                            <img src={urlImage + elenco.cast[2].profile_path} alt={elenco.cast[2].name} />
                            <span>{elenco.cast[2].name}</span>
                            <span>{elenco.cast[2].character}</span>
                        </div>
                        </>
                        )}
                    </div>
                </div>
            <div className='trailerContainer'>
                <h2>TRAILER</h2>
                <div className='trailer'>
                    {trailer && trailer.results&& (
                        <YouTube 
                        videoId={
                          // Procura pelo trailer dublado
                          trailer?.results.find(
                            (video) => video.name === 'Trailer Oficial Dublado' || video.name === 'Trailer Dublado'
                          )?.key ||
                    
                          // Se não encontrar, procura pelo trailer legendado
                          trailer?.results.find(
                            (video) => video.name === 'Trailer Oficial Legendado' || video.name === 'Trailer Legendado'
                          )?.key ||
                    
                          // Se ainda não encontrar, use a chave do primeiro vídeo encontrado
                          (trailer.results[0]?.key)
                        }
                        opts={{ width: '90%', height: '600px', playerVars: { autoplay: 2 } }} 
                      />
                    )}
                </div>
                    
            </div>
        </div>
    );
};

export default InfoMovieAndTV
