import Footer from '../components/Footer';
import Header from '../components/Header';
import Movies from '../components/Movies';
import axios from "axios";
import { useState, useEffect} from 'react'

const API_URL = 'https://api.themoviedb.org/3/discover/movie';
const API_KEY = '08004a5babd38a393e515f06876a45d6';

const Moviespage = () => {
    const [movielist, setMovielist] = useState(null);


    const fetchMovieDetails = async () => {
        try {
          const response = await axios.get(
            `${API_URL}?api_key=${API_KEY}`
          );
  
          setMovielist(response.data.results);
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
            {movielist && <Header movlist={movielist}/>}
            {movielist && <Movies movieList={movielist}/>}
            <Footer />
        </>
    )
}

export default Moviespage;