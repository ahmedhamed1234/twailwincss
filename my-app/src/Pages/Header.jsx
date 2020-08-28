import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function Header() {
    var settings = {
        arrows: false,
        dots: true,
        fade: true,
        autoplay: true,
        autoplaySpeed: 3000,
        dotsClass: "sliderOnedot",
    };
    return (
        <header className="container mx-auto relative flex-wrap">

            <Slider {...settings}  >

                <div>
                    <div className="flex  relative " >
                        <div className="bg-blue-200 w-2/3 flex items-center">
                            <img src={require('../assets/images/cosmetic-bottle.png')} alt='Main Logo' />
                            <div className="absolute hero_headring _mt-16">
                                <h4 className="text-3xl font-gotham">New</h4>
                                <h1 className="sm:text-4xl md:text-8xl leading-normal mb-4">Shower Gel</h1>
                                <p className="sm:w-11/12 lg:w-144 leading-normal font-gotham lg:text-3xl text-gray-600" >If you're using postcss-import (or a tool that uses it under the hood, such as Webpacker for Rails), use our imports instead of the @tailwind directive to avoid issues when importing any of your own additional files:</p>
                            </div>
                        </div>

                        <div className="bg-green-200 w-1/3 flex flex-col justify-end">
                            <button className="sm:p-8 bg-orange-900 flex items-center justify-between lg:p-16 hover:bg-orange-100 ">
                                <span className="text-white">SEE ALL</span>
                                <img src={require('../assets/images/arrow-right.svg')} alt='Main Logo' />
                            </button>
                        </div>

                    </div>
                </div>
                <div>

                    <div className="flex relative" >
                        <div className="bg-blue-200 w-2/3 flex items-center">
                            <img src={require('../assets/images/bott1.png')} alt='Main Logo' />
                            <div className="absolute hero_headring _mt-16">
                                <h4 className="text-3xl font-gotham">New</h4>
                                <h1 className="sm:text-4xl md:text-8xl leading-normal mb-4">Chambor Poetry</h1>
                                <p className="sm:w-11/12 lg:w-144 leading-normal font-gotham lg:text-3xl text-gray-600" >If you're using postcss-import (or a tool that uses it under the hood, such as Webpacker for Rails), use our imports instead of the @tailwind directive to avoid issues when importing any of your own additional files:</p>
                            </div>
                        </div>

                        <div className="bg-green-200 w-1/3 flex flex-col justify-end">
                            <button className="sm:p-8 bg-orange-900 flex items-center justify-between lg:p-16 hover:bg-orange-100 ">
                                <span className="text-white">SEE ALL</span>
                                <img src={require('../assets/images/arrow-right.svg')} alt='Main Logo' />
                            </button>
                        </div>

                    </div>
                </div>
                <div>

                    <div className="flex relative" >
                        <div className="bg-blue-200 w-2/3 flex items-center">
                            <img src={require('../assets/images/bott2.png')} alt='Main Logo' />
                            <div className="absolute hero_headring _mt-16">
                                <h4 className="text-3xl font-gotham">New</h4>
                                <h1 className="sm:text-4xl md:text-8xl leading-normal mb-4">French perfume</h1>
                                <p className="sm:w-11/12 lg:w-144 leading-normal font-gotham lg:text-3xl  text-gray-600" >If you're using postcss-import (or a tool that uses it under the hood, such as Webpacker for Rails), use our imports instead of the @tailwind directive to avoid issues when importing any of your own additional files:</p>
                            </div>
                        </div>

                        <div className="bg-green-200 w-1/3 flex flex-col justify-end">
                            <button className="sm:p-8 bg-orange-900 flex items-center justify-between lg:p-16 hover:bg-orange-100 ">
                                <span className="text-white">SEE ALL</span>
                                <img src={require('../assets/images/arrow-right.svg')} alt='Main Logo' />
                            </button>
                        </div>

                    </div>
                </div>
            </Slider>

            <div className="sliderOnedot"></div>
        </header>
    )
}

export default Header
