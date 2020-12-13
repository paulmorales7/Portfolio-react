import React from 'react';
import { Grid, Cell } from 'react-mdl';

function home() {
    return (
        <div style={{ width: '100%', margin: 'auto' }}>
            <Grid className="home-grid">
                <Cell col={12}>Hello</Cell>
            </Grid>
        </div>
    )
}

export default home;