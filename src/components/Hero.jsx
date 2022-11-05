import React from 'react'
import { useContext } from 'react'
import AppContext from '../context/AppContext'


const Hero = () => {
  const {courseIntoView} = useContext(AppContext)
  return (
    <section className="h">
        <h1 className="h-i">Want to learn Front End Development.</h1>
        <h1 className="h-i">But You have no idea where to start?</h1>
        <button className="btn h-btn" onClick={courseIntoView}>Explore Our Courses</button>
    </section>
  )
}

export default Hero