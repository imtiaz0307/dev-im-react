import React from 'react'
import Photo from '../assets/hero2.jpg'


const Course = () => {
  return (
    <div className="course">
                <div className="up">
                    <img src={Photo} alt="" className="c-i"/>
                    <h1 className="c-t">HTML CSS Crash Course</h1>
                    <p className="c-d">The ultimate HTML and CSS crash course to make you go from zero to hero.</p>
                </div>
                <div className="c-c-p">
                    <div className="c-c">
                        <img src={Photo} alt="" className="c-c-i"></img>
                        <p>Imtiaz</p>
                    </div>
                    <div className="c-p">
                        <p>Price: 29$</p>
                    </div>
                </div>
            </div>
  )
}

export default Course