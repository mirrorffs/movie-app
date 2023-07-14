
import MovieCard from "./MovieCard"

export default function MovieList(props){
        const {movies,addStar, delStar,handleIsInCart,handleFav} = props
        return(
            
            <>
            {movies.map((movie,index)=>(<MovieCard key={index} movies={movie} handleIsInCart={handleIsInCart} handleFav={handleFav} addStar={addStar} delStar={delStar}/>))}
            
            </>
        )
    
}

