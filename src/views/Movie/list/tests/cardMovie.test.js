import React from 'react'
import {shallow} from 'enzyme'
import {findByTestAttr} from 'utils'
import CardMovie from '../cardMovie'
describe('Card movie',()=>{
    let wrapper;
    beforeEach(()=>{
        const props={
            // onClickTitle(),
            movie:{
                "Title": "Batman: The Killing Joke",
                "Year": "2016",
                "imdbID": "tt4853102",
                "Type": "movie",
                "Poster": "https://m.media-amazon.com/images/M/MV5BMTdjZTliODYtNWExMi00NjQ1LWIzN2MtN2Q5NTg5NTk3NzliL2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
            },
        }
        wrapper=shallow(<CardMovie {...props}/>)
    })
    it('Should render list without error',()=>{
        const component=findByTestAttr(wrapper,'card-movie')
        expect(component.length).toBe(1)
    })
})
