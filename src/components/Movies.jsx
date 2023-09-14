import MovieCard from "./MovieCard";
import SortTitle from "./SortTitle";


const Movies = ({movieList}) => {
    // console.log(movieList)
    return(
        <>
            <div className="container pt-20 md:pb-8 px-6 lg:px-16 xl:px-28">
                <SortTitle 
                title={'Top Rated Movies'}
                />
                <div className="conatainer flex-wrap justify-center md:justify-between xl:justify-start w-full flex gap-8 sm:gap-3 xl:gap-20 py-14">
                    
                    {movieList && <MovieCard movies={movieList}/>}
                </div>
            </div>
        </>
    )
}

export default Movies;