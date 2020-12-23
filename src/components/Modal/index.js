import React from 'react'
import './style.css'
import {Modal} from '@material-ui/core'
import Close from 'assets/close.svg'
import {useSelector,useDispatch} from 'react-redux'
import {modalToggleReset} from 'redux/action/general'
import PosterDetail from './src/movie_poster'
export default function Index() {
    const dispatch=useDispatch()
    const general = useSelector(state => state.general)
    const {modal}=general
    const {modal_open,modal_title,modal_size,modal_component,modal_data}=modal
    
    return (
        <div>
            <Modal
                className='modal'
                open={modal_open}
                onClose={()=>dispatch(modalToggleReset())}
            >
                <div className='modal-content' style={{width:modal_size}}>
                    {/* <div className='modal-header'>
                        <h2>{modal_title}</h2>
                        <img src={Close} style={{width:20}} onClick={()=>dispatch(modalToggleReset())}/>
                    </div> */}
                    {/* {renderBody()} */}
                    {modal_component==='poster_detail'&&<PosterDetail modal_data={modal_data}/>}
                </div>
            </Modal>
        </div>
    )
}
