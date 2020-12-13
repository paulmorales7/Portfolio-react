import React from 'react';
import fitnessimg from '../../images/commit to be fit.png'
import weatherimg from "../../images/weather app.png"
import bankingimg from "../../images/banking app.png"
import './projects.css';

function Projects() {
    const portfolio = [
        {
            deployedLink: "https://paulmorales7.github.io/Commit-To-Be-Fit/",
            title: "BMI and Recipe Generator App",
            src: fitnessimg,
            alt: "Project fitness app",
            repo: "https://github.com/paulmorales7/Commit-To-Be-Fit.git"
        },
        {
            deployedLink: "https://paulmorales7.github.io/week-six-hw/",
            title: "Weather App",
            src: weatherimg,
            alt: "Project weather app",
            repo: "https://github.com/paulmorales7/week-six-hw.git"
        },
        {
            deployedLink: "https://banking-app1.herokuapp.com/",
            title: "Banking App",
            src: bankingimg,
            alt: "Project banking app",
            repo: "https://github.com/paulmorales7/banking-system.git"
        }
    ];
    return (
        <div>
            {/* <div className="header">
                <h1>PORTFOLIO</h1>
                <h1 className="name">PAUL MORALES</h1>
                <p className="infoHeader">CLICK ON ANY PICTURE TO USE</p>
            </div> */}

            {portfolio.map((eL) => {
                return (
                    <div className="card-container">
                        <div className="img-container">
                            <img src={eL.src} alt={eL.alt} />
                        </div>
                        <div className="card-title">
                            <h4>{eL.title}</h4>
                        </div>
                        <div className="button">
                            <button>
                                <a src={eL.repo}>Repo</a>
                            </button>
                            <button><a src={eL.deployedLink}>App</a></button>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Projects;



 // <>
                    //     <a href={eL.deployedLink}>
                    //         <img className={eL.className} src={eL.src} alt={eL.alt} />
                    //     </a>
                    //     <div>
                    //         <p >{eL.title}</p>
                    //         <p>Repo: <a href={eL.deployedLink}>{eL.deployedLink}</a></p>
                    //     </div>
                    // </>