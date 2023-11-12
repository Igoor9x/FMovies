import React, { useEffect, useState } from 'react';
import './Search.css';
import { Link } from 'react-router-dom';

const ApiKey = 'api_key=7aed3b0709affa8e69f823deca8fa4cf';
const urlBase = 'https://api.themoviedb.org/3'
const urlImage = 'https://image.tmdb.org/t/p/original/'

function SearchTVs() {
  
  const [valueSearch, setValueSearch] = useState('');
  const [getMovies, setGetMovies] = useState([]);
  const [movieSearch, setMovieSearch] = useState([]);
  const [page, setPage] = useState(1);

  const handleNext = () =>{
    setPage(page + 1)
    window.scrollTo({top: 300, behavior: 'smooth'});
  };
  const handleBack = () =>{
    setPage(page - 1)
    window.scrollTo({top: 300, behavior: 'smooth'});
  };

  const handleOnChange = (event) =>{
      setValueSearch(event.target.value)
    }

  const getMovie = async () => {
      const urlAPI = `${urlBase}/discover/tv?language=pt-BR&page=${page}&${ApiKey}`
      const req = await fetch(urlAPI);
      const res = await req.json();
      setGetMovies(res.results);
      if(Object.keys(movieSearch).length !== 0) {
          setGetMovies([]);
      }
  };

  const searchMovie = async () => {
      const urlAPI = `${urlBase}/search/tv?query=${valueSearch}&language=pt-BR&${ApiKey}`
      const req = await fetch(urlAPI);
      const res = await req.json();
      setMovieSearch(res.results);
      if(Object.keys(movieSearch).length !== 0) {
          setGetMovies([]);
      }
  }
  
  useEffect(() => {
      getMovie();
  }, [page]);

  useEffect(() => {
      searchMovie();
  }, [valueSearch]);
  
    return (
      <div className='searchContainer'>
        <div  className='search'>
          <input  type='text'
          placeholder='Digite o programa de TV'
           value={valueSearch}
           onChange={handleOnChange} />
        </div>
            <h3>Programas de TV</h3>
        <div className='listMoviesContainer'>
            <div className='listMovies'>
                {getMovies.map((filme, index) => (
                     <Link to={`/watchInfo/tv/${filme.id}`}  key={index}>
                        <div className='cardMovie'>
                            <img src={urlImage + filme.poster_path} />
                            <span>{filme.title ? filme.title : filme.name}</span>
                        </div>
                     </Link>
                ))}
                {movieSearch.map((filme, index) => (
                    <Link to={`/watchInfo/tv/${filme.id}`}  key={index}>
                        <div className='cardMovie'>
                            <img src={urlImage + filme.poster_path} />
                            <span>{filme.title ? filme.title : filme.name}</span>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
            <div className='buttons'>
              <button className='back' onClick={handleBack}>Voltar Página</button>
              <button className='next' onClick={handleNext}>Proxima Página</button>
            </div>
      </div>
    )
  };


export default SearchTVs
