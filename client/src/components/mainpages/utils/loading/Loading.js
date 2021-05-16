import React from 'react'
import './loading.css'
import Loader from '../../../../images/loader.gif'

function Loading() {
    return (
        <div className="load-page">
           
            <img src={Loader} alt="" id="loader" />

        </div>
    )
}

export default Loading
