import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import './Slider.css'
import Slider1 from '../../images/Slider1.jpg'
import Slider2 from '../../images/Slider2.jpg'
import Slider3 from '../../images/Slider3.jpg'
import Slider4 from '../../images/Slider4.jpg'
import Slider5 from '../../images/Slider5.jpg'




const Slider = () => {
  return (
    <Carousel autoPlay="true" className='carousel'>
                <div>
                    <img src={Slider1}  />
                    
                </div>
                <div>
                    <img src={Slider2} />
                  
                </div>
                <div>
                    <img src={Slider3} height="600px" />
                    
                </div>
                <div>
                    <img src={Slider4} height="600px" />
                    
                </div>
                <div>
                    <img src={Slider5} height="600px"/>
                  
                </div>
                <div>
                    <img src={Slider1}  />
                    
                </div>
            </Carousel>
  )
}

export default Slider