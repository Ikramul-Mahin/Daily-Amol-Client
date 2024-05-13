import React from 'react';
import  { CarouselTransition } from '../Banner/Banner';
import Cover from '../Cover/Cover';
import HomeContent from '../HomeContent/HomeContent';
import Video from '../Video/Video';
import { MasonryGridGallery } from '../Galary/Galary';
import CountDown from '../CountDown/CountDown';
import Testimonial from '../Testimonial/Testimonial';
import AnalyticsDashboard from '../../AnalyticsDashboard /AnalyticsDashboard';

const Homes = () => {
    return (
        <div>
            <CarouselTransition></CarouselTransition>
            <Cover></Cover>
            <AnalyticsDashboard></AnalyticsDashboard>
            <MasonryGridGallery></MasonryGridGallery>
            <Video></Video>
            <CountDown></CountDown>
            <Testimonial></Testimonial>   
        </div>
    );
};

export default Homes;