import * as actionType from 'redux/constant/movie'
import movieReducer from 'redux/reducer/movie'

describe('Movie Reducer',()=>{
    it('get list',()=>{
        const movie=[
            {
                "Title": "Batman: The Killing Joke",
                "Year": "2016",
                "imdbID": "tt4853102",
                "Type": "movie",
                "Poster": "https://m.media-amazon.com/images/M/MV5BMTdjZTliODYtNWExMi00NjQ1LWIzN2MtN2Q5NTg5NTk3NzliL2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
            }
        ]
        const newState=movieReducer(undefined,{
            type:actionType.GET_MOVIE,
            payload:movie
        })
        expect(newState.movie_list).toEqual(movie)
    })
    it('get detail',()=>{
        const detail_movie={
            "Title": "Batman Begins",
            "Year": "2005",
            "Rated": "PG-13",
            "Released": "15 Jun 2005",
            "Runtime": "140 min",
            "Genre": "Action, Adventure",
            "Director": "Christopher Nolan",
            "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
            "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
            "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from corruption.",
            "Language": "English, Mandarin",
            "Country": "USA, UK",
            "Awards": "Nominated for 1 Oscar. Another 14 wins & 72 nominations.",
            "Poster": "https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
            "Ratings": [
                {
                    "Source": "Internet Movie Database",
                    "Value": "8.2/10"
                },
                {
                    "Source": "Rotten Tomatoes",
                    "Value": "84%"
                },
                {
                    "Source": "Metacritic",
                    "Value": "70/100"
                }
            ],
            "Metascore": "70",
            "imdbRating": "8.2",
            "imdbVotes": "1,298,360",
            "imdbID": "tt0372784",
            "Type": "movie",
            "DVD": "N/A",
            "BoxOffice": "$206,852,432",
            "Production": "Warner Brothers, Di Bonaventura Pictures",
            "Website": "N/A",
            "Response": "True"
        }
        const newState=movieReducer(undefined,{
            type:actionType.SET_MOVIE,
            payload:detail_movie
        })
        expect(newState.movie_detail).toEqual(detail_movie)
    })
})