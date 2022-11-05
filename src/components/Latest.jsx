import React from 'react'
import { NavLink } from 'react-router-dom'
import Course from './Course'

const Latest = () => {
  return (
    <section className="latest course-section">
        <h1>New Courses</h1>
        <div className="courses">
            <Course/>
            <Course/>
            <Course/>
        </div>
        <NavLink to='/courses'>
        <button className="btn f-btn">View All Courses</button>
      </NavLink>
    </section>
  )
}

export default Latest