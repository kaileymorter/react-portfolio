import React from 'react'

function Resume() {
    return (
        <section>
            <h1 className="resume-title">Resume</h1>
            <div className="resume-content">
                <h4>Downloaded version of my <a href="https://github.com/kaileymorter/react-portfolio/raw/master/src/assets/Kailey-Morter-Resume.pdf">resume</a></h4>
                <br></br>
                <div>
                    <h3>Front-End Proficiencies</h3>
                    <p>HTML, CSS (Bootstrap, Materialize), JavaScript, jQuery, React.js, IndexedDB</p>
                </div>
                <br></br>
                <div>
                    <h3>Back-End Proficiencies</h3>
                    <p>Node.js, Express.js, SQL (sqlite, mySQL), Sequelize, NoSQL (MongoDB, Mongoose), API's (third-party, RESTful, server-side), Templating (Handlebars)</p>
                </div>
            </div>
        </section>
    )
}

export default Resume