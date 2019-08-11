import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from'react-bootstrap/Navbar';
import Nav from'react-bootstrap/Nav';
import 'font-awesome/css/font-awesome.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import './index.css';
import eightbitlogo from './images/eightbitlogo.jpg'
import Wallpaper from './images/wallpaper1.jpg'
import Events from './component/eventCarousels'
import Home from './component/home'
import Committee from './component/committee'
import "../node_modules/slick-carousel/slick/slick.css"; 
import "../node_modules/slick-carousel/slick/slick-theme.css";



class Header extends React.Component{
    render(){
        return(
            <Navbar collapseOnSelect expand="lg"  variant="dark" id = "nav" className="navbar fixed-top">
                <div>
                    <Link to="/home">
                        <img id= "navbar-image" src={this.props.image} alt="" height="70" width="70" />
                    </Link>
                </div>
                <Navbar.Brand>
                    <Link className="text-white" to="/home">The Eighth Bit</Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto w-100 justify-content-end">
                        <Link className="text-white nav-item" to="/home">Home</Link>
                        <Link className="text-white nav-item" to="/events">Events</Link>
                        <Link className="text-white nav-item" to="/about-us">About Us</Link>

                        <Link className="text-white nav-item" to="/committee">Committee</Link>  
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

function makeFooter(){
    return(
    <div className="footer container-fluid mx-auto">
        <h3>Join Us And Skill Up!!</h3>
        <p>Connect with us on:</p>
        <ul className="navbar-nav mr-auto w-100" style={{'marginTop':'1.5%'}}>
            <li><i className="fa fa-facebook Icon list-inline-item"></i><a style={{'marginLeft':'1.5%'}} href="https://www.facebook.com/theighthBit/"> facebook</a></li>
            <li><i className="fa fa-linkedin Icon list-inline-item"></i><a style={{'marginLeft':'1.5%'}} href="https://www.linkedin.com/company/the-eighth-bit/">LinkedIn</a></li>
            <li><i className="fa fa-envelope Icon list-inline-item"></i><a style={{'marginLeft':'1.5%'}} href="mailto:eightbit.monash@gmail.com">eighthbit.monash@gmail.com | club.teb@monsu.org</a></li>
            <li><i className="fa fa-instagram Icon list-inline-item"></i><a style={{'marginLeft':'1.5%'}} href="https://www.instagram.com/theeighthbit/">/theeighthbit</a></li>
        </ul>
    </div>
    );
}

class Page extends React.Component{
    render(){
        return(
            <Router id = "main-stuff" className="container-fluid">
                <div>
                    <Header image = {eightbitlogo}></Header>
                    
                </div>
                <Route exact path="/" component={Home}/>
                <Route path="/home" component={Home}/>
                <Route path="/events" component={Events}/>
                {/* <Route path="/about-us" component={AboutUs}/> */}
                <Route path="/committee" component={Committee}/>
                {makeFooter()}
            </Router>
        );

    }
}

ReactDOM.render(
    <Page />,
    document.getElementById('root')
);