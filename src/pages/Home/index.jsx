import { useEffect, useState } from "react"
import Hero from "./Hero"
import api from "../../utils"
import MovieList from "./MovieList"
import Error from "../../components/Error"
import Loader from "../../components/Loader"

const Home = () => {
// ! STATELER
const [genres,setGenres] = useState([])
const [error,setError] = useState(null)

useEffect(() => {
    api.get(`/genre/movie/list?language=tr`).then((response) => {setGenres(response.data.genres)}).catch((error) => setError(error.message))
},[])

  return (
    <div>
        {/* Hero */}
     <Hero/>
     {/* Genre List */}
{error ? (<Error info={error} />) : !genres ? (<Loader/> ) : (<div>{genres.map((i) => ( <MovieList key={i.id} genres={i} />
))} 
</div>)}
    </div>
  )
}

export default Home
