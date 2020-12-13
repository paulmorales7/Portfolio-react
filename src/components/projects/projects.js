import React from 'react';



function Projects() {
    const portfolio = [
        {
            deployedLink: "https://paulmorales7.github.io/Commit-To-Be-Fit/",
            title: "BMI and Recipe Generator App",
            src: "../../images/commit to be fit.png",
            alt: "Project fitness app",
            className: "fitness"
        },
        {
            deployedLink: "https://paulmorales7.github.io/week-six-hw/",
            title: "Weather App",
            src: "../../images/weather app.png",
            alt: "Project weather app",
            className: "weather"
        },
        {
            deployedLink: "https://banking-app1.herokuapp.com/",
            title: "Banking App",
            src: "../../images/banking app.png",
            alt: "Project banking app",
            className: "banking"
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
                    <>
                        <a href={eL.deployedLink}>
                            <img className={eL.className} src={eL.src} alt={eL.alt} />
                        </a>
                        <div>
                            <p >{eL.title}</p>
                            <p>Repo: <a href={eL.deployedLink}>{eL.deployedLink}</a></p>
                        </div>
                    </>
                )
            })}
        </div>
    )
}

export default Projects;