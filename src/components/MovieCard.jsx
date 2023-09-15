import imdbLogo from './../assets/imdb-logo.svg';
import fruit from './../assets/fruit.png';
import { MdOutlineFavorite } from "react-icons/md";
import { useState } from 'react';
import { Link } from 'react-router-dom';

const MovieCard = ({movies}) => {
    const [favorite, setFavorite] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleFavorite = (id) => {
        if (id === id){
            setFavorite((prevState) => !prevState);
        }
    }
    let iconBg;
    let iconCl;
    if (favorite === true){
        iconBg = 'bg-rose-700/50'
        iconCl = 'text-rose-700'
    } else {
        iconBg = 'bg-slate-600/50'
        iconCl = 'text-white/50'
    }

    // Limit the displayed movies to the first 10
    const limitedMovies = movies.slice(0, 10);
    return(
        <>
            {limitedMovies.map(movie => (
                <Link to={`movie/${movie.id}`} data-testid="movie-card" key={movie.id} className={`card ${favorite ? 'favorite' : ''} card max-w-[98%] mb-3 min-w-[40%] sm:max-w-[45%] sm:min-w-[45%] md:max-w-[24%] md:min-w-[15%] xl:max-w-[19%] xl:min-w-[19%] relative`}>
                    <div onClick={()=>{handleFavorite(movie.id)}} className={`absolute right-3 top-3 p-2 ${iconBg} rounded-full z-40`}>
                        <MdOutlineFavorite className={`${iconCl} hover:scale-110 transition duration-300`}/>
                    </div>
                    <div className='w-full bg-black overflow-hidden'>
                        <img className='w-full hover:scale-105 hover:opacity-70 hover:drop-shadow-xl transition duration-300' src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="" data-testid="movie-poster"/>
                    </div>
                    <div className='w-full flex flex-col gap-1 mt-2'>
                        <p className='text-gray-500 text-sm font-semibold' data-testid="movie-release-date">{`${new Date(movie.release_date).toUTCString().split(" ")
                        .slice(1, 4)
                        .join(" ")}`}</p>
                        <h3 className='capitalize text-lg font-semibold' data-testid="movie-title">{movie.title}</h3>
                        <div className='flex gap-4 pe-1 items-center w-full'>
                            <img src={imdbLogo} alt="..." />
                            <span key='rate'>86.0/100</span>
                            <p className='flex ms-auto gap-3'>
                                <img src={fruit} alt="..." />
                                <small>97%</small>
                            </p>
                        </div>
                        <p className='text-gray-500 text-sm font-semibold'>Action, Adventure, Horror</p>
                    </div>
                </Link>

            ))
            
            }
        </>
    )
};

export default MovieCard;