import React from 'react';
import { Grid, Cell } from 'react-mdl';
import headshot from '../../images/headshot.jpg';
import './home.css'
function home() {
    return (
        <div style={{ width: '100%', margin: 'auto' }}>
            <Grid className="home-grid">
                <Cell col={12}>
                    <img
                        src={headshot}
                        alt="headshot"
                        className="headshot"
                    />

                    <div className="banner-text">
                        <h1>Full Stack Web Developer</h1>
                        <hr />
                        <p>JavaScript | HTML/CSS | React | NodeJs | MongoDb | MySql | Express</p>

                        <div className="social-links">
                            <a href="http://google.com" target="_blank">
                                <i className="fab fa-linkedin" aria-hidden="true" />
                            </a>
                            <a href="https://github.com/paulmorales7" target="_blank">
                                <i className="fab fa-github" aria-hidden="true" />
                            </a>
                            <a href="http://google.com" target="_blank">
                                <i className="fab fa-linkedin" aria-hidden="true" />
                            </a>
                        </div>
                    </div>




                </Cell>
            </Grid>
        </div>
    )
}

export default home;