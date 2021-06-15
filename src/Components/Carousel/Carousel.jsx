import React from 'react';
import image1 from "../../images/1.jpg"
import image3 from "../../images/3.jpg"
import image4 from "../../images/4.jpg"

const Carousel = () => {
    return (
        <div>
             <div class="container-fluid">
        
        
        <div class="row">
            <div id="carousel-example-generic" class="carousel slide" data-ride="carousel">
             
                <ol class="carousel-indicators">
                  <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
                  <li data-target="#carousel-example-generic" data-slide-to="1"></li>
                  <li data-target="#carousel-example-generic" data-slide-to="2"></li>
                </ol>
              
               
                <div class="carousel-inner my_carousel" role="listbox">
                        <div class="item active ">
                        <img src ={image1}/>
                        </div>
                        <div class="item my_image">
                        <img src={image3}/>
                        </div>
                        <div class="item my_image">
                        <img src={image4}/>
                        </div>
                       
                </div>
              
                <a class="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
                  <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                  <span class="sr-only">Previous</span>
                </a>
                <a class="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
                  <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                  <span class="sr-only">Next</span>
                </a>
              </div>
              
        </div>

    </div>
        </div>
    );
}

export default Carousel;
