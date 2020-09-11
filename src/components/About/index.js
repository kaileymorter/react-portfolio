import React from 'react';
import portrait from '../../assets/About/portrait.jpg'

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
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <p>A iaculis at erat pellentesque adipiscing commodo elit at imperdiet. Tempus iaculis urna id volutpat lacus. Sem et tortor consequat id porta nibh venenatis cras. Vivamus at augue eget arcu dictum. Ac feugiat sed lectus vestibulum mattis ullamcorper velit sed. Ut diam quam nulla porttitor. Cursus eget nunc scelerisque viverra mauris in aliquam sem fringilla. Urna nunc id cursus metus aliquam eleifend mi in. Sagittis id consectetur purus ut faucibus pulvinar. Consequat interdum varius sit amet mattis.</p>
                    <p>In metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Amet justo donec enim diam vulputate ut pharetra sit. Et sollicitudin ac orci phasellus. Quis varius quam quisque id diam. Sit amet massa vitae tortor condimentum lacinia quis. Sit amet est placerat in egestas. Risus viverra adipiscing at in tellus integer feugiat scelerisque varius. Aliquet bibendum enim facilisis gravida neque convallis a cras. Amet est placerat in egestas erat imperdiet. Netus et malesuada fames ac turpis egestas integer eget. Suspendisse ultrices gravida dictum fusce ut. Fermentum leo vel orci porta. Arcu non sodales neque sodales ut. Donec ultrices tincidunt arcu non sodales neque sodales. Pretium lectus quam id leo in vitae.</p>
                </div>
            </div>
        </div>
    )
}

export default About;