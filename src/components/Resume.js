import React from 'react'
import '../styles/Resume.css';


const Resume = () => {
  return (
    <div className="resume-container">
        <div className='education'>
            <h2>Education</h2>
            <hr/>
            <div className='school'>
                <h4>Lehigh University</h4>
                <p className='school-date'>Jan 2018 - May 2021</p>
            </div>
            <p className='education-desc'>B.A in Computer Science</p>
            <ul>
                <li>
                    GPA: 4.0
                </li>
                <li>
                    Course Work: Algorithms, OOP, multithreading
                </li>
            </ul>
        </div>
        <div className='skills'>
            <h2>Skills</h2>
            <hr/>
            <p>Python • PHP • Java • C/C++ • JavaScript • TypeScript • React • React-Native • Git</p>
        </div>
        <div className='experience'>
            <h2>Work Experience</h2>
            <hr/>
            <div className='job'>
                <h4>Perficient</h4>
                <p className='job-title'>Software Engineer</p>
                <ul>
                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </li>
                    <li>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</li>
                </ul>
            </div>
            <div className='job'>
                <h4>Hello World</h4>
                <p className='job-title'>Software Developer</p>
                <ul>
                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </li>
                    <li>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</li>
                </ul>
            </div>
        </div>

    </div>
    
  )
}

export default Resume