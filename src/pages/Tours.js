import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Hero from '../Components/heroSection/Hero'
import img5 from '../Assests/img5.jpg'
import Trip from '../Components/trip/Trip'
import Footer from '../Components/Footer/Footer'

export default function Tours() {
  return (
    <>
        <Navbar />
        <Hero himg={img5}  htag={"tag_no"} hbtn={"BTN_no"} head={"Tours Guide"} hdesc={"Nothing to Show"}/>
        <Trip/>
        <Footer/>
    </>
  )
}
