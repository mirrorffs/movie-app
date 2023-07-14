import React from 'react'

export default function MovieCard(props){
        
        const {movies , addStar, delStar, handleFav, handleIsInCart} = props
        const {title,price,plot,rating,star,fav, isInCart,poster} = movies

        return (

            <div className='main'>
                <div className='movie-card'>
                    <div className='left'>
                        <img src={poster} alt='poster'/>
                    </div>
                    <div className='right'>
                        <div className='title'>{title}</div>
                        <div className='plot'>{plot}</div>
                        <div className='price'>{price}</div>
                        <div className='footer'>
                            <div className='rating'>{rating}</div>
                            <div className='star-dis'>
                                <img onClick={()=>{delStar(movies)}} className='str-btn' alt='minus' src='https://cdn-icons-png.flaticon.com/128/10263/10263924.png'/>
                                <img className='stars' alt='star' src='https://cdn-icons-png.flaticon.com/128/1828/1828884.png'/>
                                <img onClick={()=>{addStar(movies)}} className='str-btn' alt='plus' src='https://cdn-icons-png.flaticon.com/128/1828/1828925.png'/>
                                <span className='starCount'>{star}</span>
                            </div>

                            {fav? <button onClick={()=>{handleFav(movies)}} className='unfavourite-btn'>Un-Favourites</button>:<button onClick={()=>{handleFav(movies)}} className='favourite-btn'>Favourites</button>}
                            
                            { isInCart?  <button onClick={()=>{handleIsInCart(movies)}} className='cart-btn'>Remove from cart</button>: <button onClick={()=>{handleIsInCart(movies)}} className='cart-btn'>Add to cart</button>}

                        </div>
                    </div>
                </div>

            </div>

        )
    }


