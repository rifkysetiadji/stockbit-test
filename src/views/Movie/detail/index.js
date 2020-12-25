import React from 'react'
import {useSelector} from 'react-redux'
export default function Detail({tabToggle,movie_detail}) {
    // const movie = useSelector(state => state.movie)
    // const {movie_detail}=movie
    return (
        <div>
            <a href="#" onClick={()=>tabToggle('list')}>Back</a>
            <br/>
            {movie_detail!==null&&
                <div className='detail-wrapper' data-test='detail-wrapper'>
                    <div className='detail-info'>
                        <img src={movie_detail.Poster}/>
                        &nbsp;
                        <div>
                            <h2>{movie_detail.Title}</h2>
                            <p>Plot : {movie_detail.Plot}</p>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}
