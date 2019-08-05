import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from'react-bootstrap/Carousel';
import 'font-awesome/css/font-awesome.min.css';
import React from 'react';
import '../index.css';
import eightbitlogo from '../images/eightbitlogo.jpg'
import bitlogo from '../images/8bit.jpeg'
import thbitlogo from '../images/8thbit.jpeg'
import Poster1 from '../images/Poster1.png'
import Poster2 from '../images/Poster2.png'
import Poster3 from '../images/Poster3.jpeg'
import Poster4 from '../images/Poster4.jpeg'
import Poster5 from '../images/Poster5.jpeg'

const images = [Poster5,thbitlogo,bitlogo,eightbitlogo];

function eventCarousel(items){
    return(
        <Carousel id = "carousel" className="caro">
            {carouselItem(items)}
            {carouselItem(images)}
        </Carousel>
    );
}

function carouselItem(items){
    return(
        <Carousel.Item className="container-fluid caros">
            <section>
                <div className="item"><img className="img-fluid" src={items[0]} alt="" /></div>
                <div className="item"><img className="img-fluid" src={items[1]} alt="" /></div>
                <div className="item"><img className="img-fluid" src={items[2]} alt="" /></div>
                <div className="item"><img className="img-fluid" src={items[3]} alt="" /></div>
            </section>
        </Carousel.Item>
    );
}

class Events extends React.Component{
    render(){
        return(
            <div>
                <div><h1 id="events">Events</h1></div>
                {eventCarousel([Poster1,Poster2,Poster3,Poster4])}
            </div>
        );
    }
}

export default Events;