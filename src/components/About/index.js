import React from 'react';
import portrait from '../../assets/images/kailey_portrait.jpg'

function About() {
    return (
        <div className="text-center m-4">
            <div className="about-title">
                <h1>About Kailey Morter</h1>
            </div>
            <div>
                <div>
                    <img className="portrait" alt="Kailey Morter" src={portrait}/>
                </div>
                <div className="about-body">
                    <p>I am a full stack web developer with newly attained knowledge of many different front end and back end languages, responsive frameworks, databases, and best code practices.</p>
                    <p>Within my web development career I am dedicated to learn from seasoned developers, remain humble, and continuously make strides to learn all that I can about development. I have a passion for problem solving and creating new things.</p>
                    <p>Through my current and previous work expereinces in digital marketing, particularly social media and email, I have developed knowledge on how to effectively market products and services. With this knowledge, I believe I can be a vital team player on a development team by combining my marketing and web skills to help develop a better web experience for any brand or customer.</p>
                </div>
            </div>
        </div>
    )
}

export default About;