import React from 'react'
import HomeShow from '../Components/HomeShow/HomeShow'
import Background from '../Components/Background/Background'
import TrendingMovies from '../Components/ListaFilmesCategorias/TrendingMovies/TrendingMovies'
import TrendingTV from '../Components/ListaFilmesCategorias/TrendingTV/TrendingTV'
import TopRatedMovies from '../Components/ListaFilmesCategorias/TopRatedMovies/TopRatedMovies'
import ActionMovies from '../Components/ListaFilmesCategorias/ActionMovies/ActionMovies'
import HorrorMovies from '../Components/ListaFilmesCategorias/HorrorMovies/HorrorMovies'
import RomanceMovies from '../Components/ListaFilmesCategorias/RomanceMovies/RomanceMovies'
import Documentaries from '../Components/ListaFilmesCategorias/Documentaries/Documentaires'

function Home() {

  return (
    <div>
      <HomeShow />
      {/* <Background /> */}
      <TrendingMovies />
      <TrendingTV />
      <TopRatedMovies />
      <ActionMovies />
      <HorrorMovies />
      <RomanceMovies />
      <Documentaries />
    </div>
  )
}

export default Home
