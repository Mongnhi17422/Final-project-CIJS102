import React from 'react'
import Navbar from './Navbar'
import Slide from './Slide'
import Service from './Service'
import About from './About'
import Courses from './Courses'  
import Testimonial from './Testimonial'  
import Footer from './Footer' 

export default function Home() {
    return (
        <>
            <Navbar/>
            <Slide/>
            <Service/>
            <About/>
            <Courses/>
            <Testimonial/>
            <Footer/>  
        </>
    )
}
