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
    </div>
  )
}

export default About