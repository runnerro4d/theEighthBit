import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import React from 'react';
import '../index.css';
import eightbitlogo from '../images/eightbitlogo.jpg'
import pres from '../images/Itisha.jpg'
import vicepres from '../images/Aaditya.jpg'
import Treasurer from '../images/Laveeshka.jpg'
import Secretary from '../images/Manali.jpg'
import SponOff from '../images/Thomas.jpg'
import SponAss2 from '../images/Kartik.jpg'
import Rang from '../images/Ranginberry.jpg'
import Ranveer from '../images/Ranveer.jpg'
import Praggy from '../images/Praggy.jpg'
import EventAssistant from '../images/Neha.jpg'


const members = ["Itisha Singh","Aaditya Neil Sinha","Manali Choudhary","Laveeshka Devi Mahadea","Thomas Birkenes","Jashandeep Singh","Kartik Pathak","Shreya Khosla","Neha Nayeem","Keovechchta Net","Ranginberry","Pragyandeep Sahoo","Ranveer Singh"];
const titles = ["President","Vice-President","Secretary","Treasurer" ,"Sponsorship Officer","Sponsorship Associate","Sponsorship Associate","Events Officer","Events Associate","Social Media","Graphics Designer","Senior Advisor","Executive Advisor"];
const memPics = [pres,vicepres,Secretary,Treasurer,SponOff,eightbitlogo,SponAss2,eightbitlogo,EventAssistant,eightbitlogo,Rang,Praggy,Ranveer]

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
                {listElement(mem[1])}
                {listElement(mem[2])}
                {listElement(mem[3])}
                {listElement(mem[4])}
                {listElement(mem[5])}
                {listElement(mem[6])}
                {listElement(mem[7])}
                {listElement(mem[8])}
                {listElement(mem[9])}
                {listElement(mem[10])}
                {listElement(mem[11])}
                
                
            </div>
            <div className= "card-deck  mt-2 justify-content-center">
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

class AboutUs extends React.Component{
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

export default AboutUs;