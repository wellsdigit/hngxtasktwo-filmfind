import Footer from '../components/Footer';
import Header from '../components/Header';
import Movies from '../components/Movies';
import axios from "axios";
import { useState, useEffect} from 'react'
import { Circles } from  'react-loader-spinner'

const API_URL = 'https://api.themoviedb.org/3/movie/top_rated';
const API_KEY = '08004a5babd38a393e515f06876a45d6';
const SEARCH_API_URL = 'https://api.themoviedb.org/3/search/movie?api_key={Key}&query={the+avengers}'

const Moviespage = () => {
    const [movielist, setMovielist] = useState(null);
    const [loading, setLoading] = useState(false);


    const fetchMovieDetails = async () => {
        setLoading(true);
        try {
          const response = await axios.get(
            `${API_URL}?api_key=${API_KEY}`
          );
  
          setMovielist(response.data.results);
          setLoading(false);
        //   console.log(response.data.results)
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };

      useEffect(() => {
        fetchMovieDetails();
      },[])

    return(
        <>
            {loading ? <div className='w-full flex justify-center bg-black/70 h-screen items-center'> <Circles
                        height="80"
                        width="80"
                        color="#be123c"
                        ariaLabel="circles-loading"
                        wrapperStyle={{}}
                        wrapperClass=""
                        visible={true}
                        /> </div> : movielist && <Header movlist={movielist}/>}
            {movielist && <Movies movieList={movielist}/>}
            {loading? '' :<Footer />}
        </>
    )
}

export default Moviespage;