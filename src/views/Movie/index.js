import React,{useState} from 'react'
import './style.css'
import Header from 'components/header'
import List from './list'
import Detail from './detail'
import {useSelector} from 'react-redux'
export default function Index() {
    const movie = useSelector(state => state.movie)
    const [tab,setTab]=useState('list');
    const tabToggle=(key)=>{
        setTab(key)
    }
    return (
        <div className='movie-wrapper'>
            <Header/>
            <br/>
            {tab==='list'&&<List movie_list={movie.movie_list} tabToggle={tabToggle}/>}
            {tab==='detail'&&<Detail movie_detail={movie.movie_detail} tabToggle={tabToggle}/>}
        </div>
    )
}
