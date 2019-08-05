
import React from 'react';
import Pitch from '../images/Final.mp4'

const icons = ["fa fa-eye fa-2x", "fa fa-tasks fa-2x","fa fa-bullseye fa-2x"]
const headings = ["VISION","MISSION","GOAL"];
const pageText = ["Empower IT students with capabilities and connections that catalyses their absorption into the ICT sector.",
"We achieve them through our 3C’s\nC - Cognition\nC - Capabilities\nC - Connections",
"We aim to provide: \nA platform for Industry and students to interact \nDevelop job relevant skills outside academic curriculum and \nmake sure that every event you attend helps you check something off your List-of-things-to-getting-a-job."];

class WhyWereHere extends React.Component{
    render() {
        
        return(
            <div>
            <div><h1 id="why-were-here">Why We're Here</h1></div>            
            {addVideo(Pitch)}
            <div>{myList([addPara(0),addPara(1),addPara(2)])}</div>
            </div>
        );
    }
}

function addVideo(vidname){

    return(
        <div className="justify-content-center">
            <video id="vid" className="container-fluid justify-content-center" controls>
                <source src={vidname} type="video/mp4" />
            </video>
        </div>
            
    );
}

function paraElement(item){
    return (
        <div className="col-md-3 card bg-faded">
            {item}
        </div>
    );
}

function myList (items){
    return (
        <div className=" card-deck col-sm-12 justify-content-center">
            {paraElement(items[0])}
            {paraElement(items[1])}
            {paraElement(items[2])}
        </div>
    );
}

function addPara(number){
    return(
        <Para icon = {icons[number]} heading = {headings[number]} pageText = {pageText[number]} ></Para>
    );
}

class Para extends React.Component{
    render() {
        return(
            <div className="  ">
                <div className="card-body">
                    <i className={this.props.icon}></i>
                    <p className="card-text">{this.props.heading}</p>
                    <blockquote> {this.props.pageText}</blockquote>
                </div>
            </div>
            
        );
    }
}

export default WhyWereHere;