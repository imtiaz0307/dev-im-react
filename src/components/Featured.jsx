import React from 'react'
import Course from './Course'

const Featured = () => {
  return (
    <section className="featured course-section">
        <h1>Featured Courses</h1>
        <div className="courses">
            <Course/>
            <Course/>
            <Course/>
        </div>
        <button className="btn f-btn">View All Courses</button>
    </section>
  )
}

export default Featured