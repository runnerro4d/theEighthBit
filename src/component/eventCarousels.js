import React from "react";
import Slider from "react-slick";
import eightbitlogo from '../images/eightbitlogo.jpg'
import bitlogo from '../images/8bit.jpeg'
import thbitlogo from '../images/8thbit.jpeg'
import Poster1 from '../images/Poster1.png'


export default class SimpleSlider extends React.Component {
  render() {var settings = {
    className:"center bg-faded",
    dots:true,
    infinite: true,
    centerMode:true,
    slidesToShow:3,
    autoplay: true,
    speed: 400,
    autoplaySpeed: 3000,
    cssEase: "linear"
  };
  return (
        <div className= "container-fluid"style={{"marginTop":"5em","width":"93%","marginLeft":"5%"}}>
            <h2 style={{"textAlign":"center"}}>Events</h2>
            <Slider {...settings} className="slide justify-content-center">
                <div>
                    <img className="img-fluid slider-item" src={eightbitlogo} alt=""/>
                
                </div>
                <div>
                    
                    <img className="img-fluid slider-item" src={bitlogo} alt=""/>
                </div>
                <div>
                    <img className="img-fluid slider-item" src={thbitlogo} alt=""/>
                </div>
                <div>
                    
                    <img className="img-fluid slider-item" src={Poster1} alt=""/>
                </div>
            </Slider>
      </div>
  
    );
  }
}


