import React, { useEffect, useState } from 'react'
import api from '../../../utils'
import { Link } from 'react-router-dom';
import imageUrl from '../../../../constants';
import AddButton from '../../../components/AddButton';

const Hero = () => {
    // ! STATELER
const [movie, setMovie] =  useState(null)
const [error, setError] = useState(null)

    useEffect(() => {
        api.get("/movie/popular").then((response) => {
    // apiden gelen popüler filmlere erişme 
            const movies = response.data.results 
    // Rastgele bir veri getir
 const i = Math.floor(Math.random() * movies.length)
//  Filmler içerisinden rastgele bir tanesine eriş 
 setMovie(movies[i])
        })
        .catch((error) => {
            setError(error.message)
        })
    },[])
  return(
    <div>
    {error ? (
      <h1>Error</h1>
    ) : !movie ? (
      <h1>Yükleniyor</h1>
    ) : (
      <div className='grid grid-cols-1 md:grid-cols-2 md:max-h-[400px] gap-5 mb-10'>
{/* TEXT */}
<div className='flex flex-col gap-6 items-center justify-center'>
    <h1 className='text-3xl font-bold'>{movie.title} </h1>
    <p className='text-start text-gray-300'>{movie.overview} </p>
    <p>
        <span>IMDB: </span>
        <span className='text-yellow-400 ms-2 font-semibold'>{movie.vote_average.toFixed(2)}</span>
    </p>
<div className='flex gap-5'>
<Link className="p-2 px-4 bg-red-500 rounded transition hover:bg-red-700"
                to={`/movie/${movie.id}`}
              >
                Film İzle 
</Link>
<AddButton movie={movie}/>
</div>
</div>
{/* İMAGE */}
<div>
    <img src={imageUrl + movie.poster_path } className='my-4 object-cover rounded-md max-h-[300px] min-w-[500px] max-md:w-full  drop-shadow-[0_0_80px_rgba(255,255,255,0.4)]' alt="hero-image" />
</div> 
      </div>
    )}
  </div>
);
};
  
export default Hero
