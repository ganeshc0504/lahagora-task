import React from 'react'
import './LatetstCard.css'

const LatetstCard = (props) => {
    return (
        <div className='heartCard'>
            <img src={`https://image.tmdb.org/t/p/w220_and_h330_face${props.data?.poster_path}`} style={{width:"100%", height:"100%",borderRadius:"15px"}} alt='error'/>
        </div>
    )
}

export default LatetstCard