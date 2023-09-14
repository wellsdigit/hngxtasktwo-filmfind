import { FaPlayCircle } from "react-icons/fa";
import imdbLogo from './../assets/imdb-logo.svg';
import fruit from './../assets/fruit.png';
import axios from 'axios';
import { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';

const API_URL = 'https://api.themoviedb.org/3/movie';
const API_KEY = '08004a5babd38a393e515f06876a45d6';

const MovieDetailPage = () => {
    const [movie, setMovie] = useState(null);

    // Fetch movie details based on the ID
    const { id } = useParams();    // Extract movie ID from the URL parameter
    const fetchMovieDetails = async () => {
        try {
          const response = await axios.get(
            `${API_URL}/${id}`,
            {
              params: {
                api_key: API_KEY,
              },
            }
          );
  
          setMovie(response.data);
          console.log(response.data)
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };

      useEffect(() => {
        fetchMovieDetails();
      },[])

      let backgroundStyle;
      if (movie !== null) {
      backgroundStyle = {
        backgroundImage: `linear-gradient(#ffffffe0,#ffffff), url(https://image.tmdb.org/t/p/w500${movie.poster_path})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'top',
      };
    } else {
        backgroundStyle = {}
    }



    return(
        <div style={backgroundStyle}>
            {movie && <div className=" py-4 container max-w-[90%] min-w-[80%] md:max-w-[70%] lg:min-w-[45%] lg:max-w-[45%] mx-auto flex flex-col justify-center items-center w-full h-screen">
                <div className="img-container flex justify-center w-full items-center bg-black rounded-t-3xl overflow-hidden h-[50%] relative">
                    <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="" className='object-cover w-full opacity-50 hover:scale-105 transition duration-300'/>
                    <FaPlayCircle className='text-white top-48 drop-shadow-2xl hover:text-rose-700 transition-all duration-300 text-5xl absolute'/>
                </div>
                <div className="detail w-full flex flex-col px-2 gap-5 mt-4">
                    <div className='flex md:flex-row flex-col justify-between'>
                        <h2 data-testid="movie-title" className='capitalize text-2xl font-bold md:w-[60%] text-rose-700'>{movie.title}</h2>
                        <div className='md:text-right text-sm md:text-base flex flex-col gap-1 font-semibold text-gray-600'>
                            <span data-testid="movie-release-date">{`USA, ${new Date(movie.release_date).toUTCString().split(" ")
                            .slice(1, 4)
                            .join(" ")} UTC+00:00`}</span>
                            <p data-testid="movie-runtime">{movie.runtime} minutes</p>
                        </div>
                    </div>
                    <p data-testid="movie-overview">{movie.overview}</p>
                    <div className='flex gap-4 items-center w-75%'>
                        <img src={imdbLogo} alt="..." />
                        <span key='rate'>86.0/100</span>
                        <p className='flex gap-3 ms-6'>
                            <img src={fruit} alt="..." />
                            <small>97%</small>
                        </p>
                    </div>
                    <div className='animate-bounce w-100 mt-5 h-2 bg-rose-700 rounded-full drop-shadow-2xl '></div>
                </div>
            </div>}
        </div>
    )
}

export default MovieDetailPage;