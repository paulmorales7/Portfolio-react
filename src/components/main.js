import React from 'react';
import projects from './projects/projects';

const main = () => {
    <switch>
        <route exact path="/projects" component={projects} />
        {/* <route exact path="/projects" component={projects} /> */}
    </switch>
}

export default main;