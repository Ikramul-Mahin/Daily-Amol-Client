import React from 'react';
import Banner, { CarouselTransition } from '../Banner/Banner';
import Cover from '../Cover/Cover';
import HomeContent from '../HomeContent/HomeContent';
import Video from '../Video/Video';
import { MasonryGridGallery } from '../Galary/Galary';

const Homes = () => {
    return (
        <div>
            <CarouselTransition></CarouselTransition>
            <Cover></Cover>
            <MasonryGridGallery></MasonryGridGallery>
            <Video></Video>
            <HomeContent></HomeContent>
        </div>
    );
};

export default Homes;