import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper } from '@material-ui/core';
import './beerpost.scss';
 
function Example({photos})
{
 
    return (
        <Carousel
            autoPlay={false}
            // indicators={false}
        >
            {
                photos && photos.map( (photo, i) => <Item key={i} photo={photo} /> )
            }
        </Carousel>
    )
}
 
function Item({photo})
{
    return (
        <Paper
            elevation={0}
        >
            <img src={photo.image} alt="Beerpost photo"/>
        </Paper>
    )
}

export default Example;