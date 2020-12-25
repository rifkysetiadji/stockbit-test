import React from 'react'
import Skeleton from 'react-loading-skeleton';
const Loader=()=>{
    return(
        <div>
            <Skeleton height={200}/>
            <Skeleton height={200}/>
            <Skeleton height={200}/>
        </div>
    )
}

export default Loader