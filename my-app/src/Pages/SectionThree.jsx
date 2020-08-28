import React from 'react'
import Slider from "react-slick";
import Dotes from './Dotes'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function SectionThree() {

 
      
    var settings = {
        arrows: false,
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        autoplay:true,
        dots:true,
        dotsClass: "button__bar",


 
    }
      
    return (
        < div className="sliders relative"> 
            <Slider {...settings}  >
                <div className="slide">
                    <div className="inner_box">
                    <div className="bg-gray-500 relative">
                            <div className="labal absolute top-0 left-0 bg-white text-3xl">new boye</div>
                        <img src={require('../assets/images/cosmetics-yellow-jar.png')} alt='Main Logo' />
                        <div className=" number bg-orange-900 px-6 py-6  absolute bottom-0 left-0"> 1</div>
                        </div>
                    </div>
                </div>
                <div className="slide">
                    <div className="inner_box">
                    <div className="bg-gray-500 relative">
                            <div className="labal absolute top-0 left-0 bg-white text-3xl">new boye</div>
                        <img src={require('../assets/images/cosmetics-yellow-jar.png')} alt='Main Logo' />
                        <div className=" number bg-orange-900 px-6 py-6  absolute bottom-0 left-0"> 1</div>
                        </div>
                    </div>
                </div>
                <div className="slide">
                    <div className="inner_box">
                    <div className="bg-gray-500 relative">
                            <div className="labal absolute top-0 left-0 bg-white text-3xl">new boye</div>
                        <img src={require('../assets/images/cosmetics-yellow-jar.png')} alt='Main Logo' />
                        <div className=" number bg-orange-900 px-6 py-6  absolute bottom-0 left-0"> 1</div>
                        </div>
                    </div>
                </div>
                <div className="slide">
                    <div className="inner_box">
                    <div className="bg-gray-500 relative">
                            <div className="labal absolute top-0 left-0 bg-white text-3xl">new boye</div>
                        <img src={require('../assets/images/cosmetics-yellow-jar.png')} alt='Main Logo' />
                        <div className=" number bg-orange-900 px-6 py-6  absolute bottom-0 left-0"> 1</div>
                        </div>
                    </div>
                </div>
                <div className="slide">
                    <div className="inner_box">
                    <div className="bg-gray-500 relative">
                            <div className="labal absolute top-0 left-0 bg-white text-3xl">new boye</div>
                        <img src={require('../assets/images/cosmetics-yellow-jar.png')} alt='Main Logo' />
                        <div className=" number bg-orange-900 px-6 py-6  absolute bottom-0 left-0"> 1</div>
                        </div>
                    </div>
                </div>
                </Slider>
      
                <div className="button__bar"> </div>
         
        </div >
    )
}

export default SectionThree
