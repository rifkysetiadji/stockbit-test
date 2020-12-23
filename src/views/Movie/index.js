import React,{useState} from 'react'
import './style.css'
import Header from 'components/header'
import List from './list'
import Detail from './detail'
export default function Index() {
    const [tab,setTab]=useState('list');
    const tabToggle=(key)=>{
        setTab(key)
    }
    return (
        <div className='movie-wrapper'>
            <Header/>
            <br/>
            {tab==='list'&&<List tabToggle={tabToggle}/>}
            {tab==='detail'&&<Detail tabToggle={tabToggle}/>}
        </div>
    )
}
