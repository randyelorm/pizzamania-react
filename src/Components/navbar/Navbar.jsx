import React from 'react';
import './navcss.css';

const Navbar = () => {
    return (
        <div>
              
                <nav class="navbar navbar-default navbar-home">
                <div class="navbar-header">
                        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                            <span class="sr-only">Toggle navigation</span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                        </button>
                        <a class="navbar-brand" href="#">PIZZAMANIA</a>
                        </div>

                    
                
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
