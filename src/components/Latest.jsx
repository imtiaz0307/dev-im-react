import React from 'react'
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
        <button className="btn f-btn">View All Courses</button>
    </section>
  )
}

export default Latest