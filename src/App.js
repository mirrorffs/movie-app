import MovieList from "./MovieList"
import Navbar from "./Navbar"
import React from "react"
import { list } from "./movies-data"

class App extends React.Component{
  constructor(){
    super()
    this.state = {
        movies : list,
        cartCount: 0
    } 
}
handleIsInCart=(movie)=>{
    let {movies,cartCount} = this.state
    const id = movies.indexOf(movie)
    movies[id].isInCart = !movies[id].isInCart

    if(movies[id].isInCart){
      cartCount+=1
    }else{
      cartCount-=1
    }
    this.setState({
        movies,
        cartCount
    })
}

handleFav=(movie)=>{
    const {movies} = this.state
    const id = movies.indexOf(movie)
    movies[id].fav = !movies[id].fav
    this.setState({
        movies
    })
}

handleDelStar=(movie)=>{
    const {movies} = this.state
    const id = movies.indexOf(movie)
    if(movies[id].star === 0){
        return 
    }else{
        movies[id].star -= 1
    }
    this.setState({
        movies
    })
}
handleAddStar=(movie)=>{
    const {movies} = this.state
    const id = movies.indexOf(movie)
    if(movies[id].star === 5){
        return 
    }else{
        movies[id].star += 1
    }
    this.setState({
        movies
    })
}
  
  
  render(){
    const {movies , cartCount} = this.state
    return(
      <>
      <Navbar cartCount={cartCount}/>
      <MovieList movies={movies} handleIsInCart={this.handleIsInCart} handleFav={this.handleFav} addStar={this.handleAddStar} delStar={this.handleDelStar}/>
      </>
    )
  }
}

export default App