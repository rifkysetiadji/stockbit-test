import React,{useEffect,useState,useRef} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {getMovie,getDetailMovie} from 'redux/action/movie'
import {modalToggle} from 'redux/action/general'
import detectBottom from 'services/detectBottom';
import {debounce} from 'lodash'
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import Loader from 'components/Loading/skeleton'
import CardMovie from './cardMovie'
export default function List(props) {
    const ref = useRef()
    const isVisible = detectBottom(ref)
    const dispatch=useDispatch()
    const general = useSelector(state => state.general)
    const [search,setSearch]=useState('batman')
    const [page,setPage]=useState(1) 
    const [detail_poster,setDetailPoster]=useState({
        isOpen:false,
        url:''
    })
    useEffect(()=>{
        if(isVisible){
            setPage(page+1)
            dispatch(getMovie(`&s=${search}&page=${page}`,false))
        }
        
    },[isVisible])
    const searchToggle=debounce(async (value)=>{
        setSearch(value)
        dispatch(getMovie(`&s=${value!==''?value:'batman'}&page=${1}`,true))
    },1000)
    const onClickPoster=(url)=>{
        dispatch(modalToggle({
            modal_open:true,
            modal_title:'',
            modal_component:'poster_detail',
            modal_size:400,
            modal_data:url
        }))

        
    }
    const onClickTitle=async (id)=>{
        let res=await dispatch(getDetailMovie(`&i=${id}`))
        if(res){
            props.tabToggle('detail')
        }
    }
    return (
        <div  >
            <input onChange={(e)=>searchToggle(e.target.value)} placeholder='search'/>
            {general.isLoadingSkeleton&&<Loader/>}
            {props.movie_list.map((data,i)=>(
                    <CardMovie movie={data} key={i} onClickPoster={onClickPoster} onClickTitle={onClickTitle}/>
                ))
            }
            <div ref={ref}></div>
            {general.isLoadingSkeleton&&<Loader/>}
            
        </div>
    )
}
