import React from 'react';
import { Grid, Cell } from 'react-mdl';
import headshot from '../../images/headshot.jpg';
import './home.css'
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';

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
                            <a href="https://github.com/paulmorales7" target="_blank" rel="noreferrer">
                                <div className="github"> <FaGithub /></div>
                            </a>
                            <a href="https://www.linkedin.com/in/paul-morales-9a9571189/" target="_blank" rel="noreferrer">
                                <div className="linkedin"> <FaLinkedin /></div>
                            </a>
                        </div>
                    </div>




                </Cell>
            </Grid>
        </div>
    )
}

export default home;