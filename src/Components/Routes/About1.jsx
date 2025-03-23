import React from 'react'
import Header from '../Pages/Header'
import About from '../Pages/About'
import Navbar from '../Pages/Navbar'
import Footer from '../Pages/Footer'
import Service from '../Pages/Service'
import Testimonial from '../Pages/Testimonial'

export default function About1() {
  return (
    <>
    <Navbar/>
    <Header name="About"/>
    <About/>
    <Service/>
    <Testimonial/>
    <Footer/>
    </>
  )
}
