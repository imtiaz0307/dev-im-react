import React from 'react'
import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import AppContext from '../context/AppContext'
import Course from './Course'

const Featured = () => {
  const {courseRef} = useContext(AppContext)
  return (
    <section className="featured course-section" ref={courseRef}>
      <h1>Featured Courses</h1>
      <div className="courses">
        <Course />
        <Course />
        <Course />
      </div>
      <NavLink to='/courses'>
        <button className="btn f-btn">View All Courses</button>
      </NavLink>
    </section>
  )
}

export default Featured