import React from 'react'
import '../styles/About.css';
import profilePic from '../images/img_profile.jpeg'


const About = () => {
  return (
    <div className='about-container'>
        <img src={profilePic} className='profile-img' alt='profile' />
        <h1>Ryan McGuiness</h1>
        <div className='description'>
            <h5>A hardworking and intuitive problem solver that desires to be better each day.</h5>
        </div> 
        <div className='side-bar'>
            <div className='education'>
                <h2>Education</h2>
                <div className='school'>
                    <h4>Lehigh University</h4>
                    <p className='school-date'>Jan 2018 - May 2021</p>
                </div>
                <p className='education-desc'>B.A in Computer Science</p>
            </div>
            <div className='skills'>
                <h2>Skills</h2>
                <p>Python • PHP • Java • C/C++ • JavaScript • TypeScript • React • React-Native • Git</p>
            </div>
        </div>
    </div>
  )
}

export default About