import React from 'react'
import Hero from '../Components/heroSection/Hero'
import Navbar from '../Components/Navbar/Navbar'
import Destination from '../Components/Destination/Destination'
import Trip from '../Components/trip/Trip'
import img4 from '../Assests/img4.jpg'
import img1 from '../Assests/img1.jpg'
import img2 from '../Assests/img2.jpg'
import img9 from '../Assests/img9.jpg'
import img7 from '../Assests/img7.jpg'
import Footer from '../Components/Footer/Footer'


export default function Home() {
    return (
        <>
            <Navbar />
            <Hero himg={img4}  htag={"hero_tag"} hbtn={"BTN"} head={"Start Yout Journey with us"} hdesc={"we offer best pakage for traveling and exploring world"}/>
            <h1 className="dest_head">Tourism</h1>  
            <Destination content ={"dest_content"} paragraph={" Tourism is a trip for recreational, refreshing, refreshing, satisfying or scenic purposes. Traveling is a hobby of almost everyone. There are very few people who have no interest in travel at all. Tourism is not only a source of entertainment but also extremely beneficial for physical and mental health. Traveling gives us the opportunity to develop new foods, see new environments, and engage in brain-building activities such as listening and speaking different languages. Travel also keeps our hearts healthy."} image1 ={img1} image2={img2}/>
            <Destination content ={"dest_content reverse"} paragraph={"Pakistan is one of the most popular destinations for tourists in Asia. It is a Muslim country, and there are many attractions for travelers to enjoy, including beaches, mountains, mosques, and wildlife parks.The city of Karachi is very beautiful, with many historical buildings and parks. There are also many interesting places to visit in Lahore and Islamabad. Tourism is one of the main sources of income for Pakistan. When people travel to the country, they spend money on hotels, restaurants, tours, transportation, souvenirs, and other services."} image1 ={img7} image2={img9}/>
            <Trip/>
            <Footer/>
        </>
    )
}
