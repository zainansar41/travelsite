import React from 'react'
import './destination.css'


export default function Destination(props) {
    return (

        <>
            <div className="destination">
                <div className={props.content}>
                    <div className="dest_text">{props.paragraph} </div>
                    <div className="image">
                        <img src={props.image1} alt="img1" />
                        <img src={props.image2} alt="img2" />
                    </div>
                </div>
            </div>
        </>
    )
}
