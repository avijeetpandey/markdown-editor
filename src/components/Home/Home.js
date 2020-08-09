import React from 'react'
import './../../styles/home.css'
import image from './../../assets/home.png'


const Home = ()=>{
    return(
        <div className="main_box">
            <div className="left_box">
                <h1><span>MD</span> Your own markdown editor</h1>
                <h3>Edit and Preview markdowns instantly</h3>
            </div>
            <div className="right_box">
                <img src={image} />
            </div>
        </div>
    )
}

export default Home