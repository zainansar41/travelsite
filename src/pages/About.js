import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Hero from '../Components/heroSection/Hero'
import img10 from '../Assests/img10.jpg'

export default function About() {
  return (
    <>
        <Navbar/>
        <Hero himg={img10}  htag={"tag_no"} hbtn={"BTN_no"} head={"About"} hdesc={"Nothing to Show"}/>
    </>
  )
}
