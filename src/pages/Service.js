import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Hero from '../Components/heroSection/Hero'
import img8 from '../Assests/img8.jpg'
import Trip from '../Components/trip/Trip'
import Footer from '../Components/Footer/Footer'


export default function Service() {
  return (
    <>
        <Navbar/>
        <Hero himg={img8}  htag={"tag_no"} hbtn={"BTN_no"} head={"Our Services"} hdesc={"Nothing to Show"}/>
        <Trip/>
        <Footer/>

    </>
  )
}
