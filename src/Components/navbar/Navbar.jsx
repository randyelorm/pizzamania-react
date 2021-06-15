import React from 'react';
import './navcss.css';

const Navbar = () => {
    return (
        <div>
              
                <nav class="navbar navbar-default navbar-home">
                    <a class="navbar-brand" href="#">PIZZA MANNIA </a>
                    
                
                    <div class="collapse navbar-collapse my_nav_links" id="bs-example-navbar-collapse-1">
                    <ul class="nav navbar-nav navbar-right">
                    
                            <li> <a href="#">Home</a> </li>
                            <li> <a href="#about_us">About Us</a> </li>
                            <li> <a href="#pizza_types">Pizza Types</a> </li>
                
                    </ul>  
                    </div>        
                </nav>
            
        </div>
    );
}

export default Navbar;
