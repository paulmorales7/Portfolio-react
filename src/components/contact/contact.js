import React from 'react';
import { Grid, Cell } from 'react-mdl';
import './contact.css'

function contact(){
return(
    <div className="contact-body">
        <Grid className="contact-grid">
            <Cell col={6}>Half</Cell>
            <Cell col={6}>Half</Cell>
        </Grid>
    </div>

)
}

export default contact;