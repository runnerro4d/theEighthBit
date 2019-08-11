import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import React from 'react';
import '../index.css';
import pres from '../images/Itisha.jpg'
import vicepres from '../images/Aaditya.jpg'
import Treasurer from '../images/Laveeshka.jpg'
import Secretary from '../images/Manali.jpg'
import SponOff from '../images/Thomas.jpg'
import SponAss1 from '../images/Jashan.jpg'
import SponAss2 from '../images/Kartik.jpg'
import EventOff from '../images/Shreya.JPG'
import EventAssistant from '../images/Neha.jpg'
import SocialMed from '../images/viki.jpg'
import Ranveer from '../images/Ranveer.jpg'
import Praggy from '../images/Praggy.jpg'
import Rang from '../images/Ranginberry.jpg'




const members = ["Itisha Singh",
"Aaditya Neil Sinha",
"Manali Choudhary",
"Laveeshka Devi Mahadea",
"Thomas Birkenes",
"Shreya Khosla",
"Keovechchta Net",
"Jashandeep Singh",
"Kartik Pathak",
"Neha Nayeem",
"Ranginberry",
"Ranveer Singh",
"Pragyandeep Sahoo"];

const titles = ["President",
"Vice-President",
"Secretary",
"Treasurer" ,
"Sponsorship Officer",
"Events Officer",
"Social Media",
"Sponsorship Associate",
"Sponsorship Associate",
"Events Associate",
"Graphics Designer",
"Executive Advisor",
"Senior Advisor"];

const memPics = [pres,
    vicepres,
    Secretary,
    Treasurer,
    SponOff,
    EventOff,
    SocialMed,
    SponAss1,
    SponAss2,
    EventAssistant,
    Rang,
    Ranveer,
    Praggy]

function listElement (item) {
    return (
        <div className="col-md-3 col-sm-6">
            {item}
        </div>
    );
}

function memberList(mem){
    return (
        <div className="justify-content-center">
            <div className= "card-deck mt-2 justify-content-center">
                {listElement(mem[0])}
            </div>
            <div className= "card-deck  mt-2 justify-content-center">
                {listElement(mem[1])}
                {listElement(mem[2])}
                {listElement(mem[3])}
            </div>
            <div className= "card-deck  mt-2 justify-content-center">
                {listElement(mem[4])}
                {listElement(mem[5])}
                {listElement(mem[6])}
                
            </div>
            <div className= "card-deck  mt-2 justify-content-center">
                {listElement(mem[7])}
                {listElement(mem[8])}
                {listElement(mem[9])}
                
            </div>
            <div className= "card-deck  mt-2 justify-content-center">
                {listElement(mem[10])}
                {listElement(mem[11])}
                {listElement(mem[12])}
            </div>
        </div>
    );
}

class MemberCard extends React.Component{
    render() {
        return(
            <div className="card bg-faded">
                <img className="card-img-top" src={this.props.image} alt="Card image cap"/>
                <div className="card-body">
                    <h5 className="card-title">{this.props.title}</h5>
                    <p className="card-text">{this.props.name}</p>
                </div>
            </div>
            
        );
    }
}

function addAboutUs(number){
    return(
        <div>
            <MemberCard name = {members[number]} title = {titles[number]} image = {memPics[number]}>

            </MemberCard>
        </div>
    );
}

class Committee extends React.Component{
    render(){
        return(
            <div>
                <div><h1 id="about-us">About Us</h1></div>
                {memberList([addAboutUs(0),
                            addAboutUs(1),
                            addAboutUs(2),
                            addAboutUs(3),
                            addAboutUs(4),
                            addAboutUs(5),
                            addAboutUs(6),
                            addAboutUs(7),
                            addAboutUs(8),
                            addAboutUs(9),
                            addAboutUs(10),
                            addAboutUs(11),
                            addAboutUs(12)])}
            </div>
                
        );
    }
}

export default Committee;