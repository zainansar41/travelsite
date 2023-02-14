import React from 'react'
import './hero.css'

export default function Hero(props) {
    return (
        <div className="hero">
            <img src={props.himg} alt="home_hero" />
            <div className="hero_desc">
                <h1 className="hero_heading">{props.head}</h1>
                <p className={props.htag}>{props.hdesc}</p>
                <button className={props.hbtn}>
                    <span>Let's Go</span>
                </button>
            </div>
        </div>
    )
}
