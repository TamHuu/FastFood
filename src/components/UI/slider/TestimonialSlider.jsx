import React from 'react'
import Slider from "react-slick";
import ava01 from "../../../assets/images/ava-1.jpg"
import ava02 from "../../../assets/images/ava-2.jpg"
import ava03 from "../../../assets/images/ava-3.jpg"
import "../../../styles/slider.css"
function TestimonialSlider() {
    const settings = {
        dots: true,
        autoplay: true,
        infinity: true,
        autoplaySpeed: 1000,
        speed: 3000,
        swipeToSlide: true,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (

        <Slider {...settings}>
            <div >
                <p className='review__text'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint, expedita!
                </p>
                <div className='slider__content  d-flex align-items-center gap-3'>
                    <img src={ava01} alt="avatar" className=' rounded' />
                    <h6>Steven Crock</h6>
                </div>
            </div>
            <div >
                <p className='review__text'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint, expedita!
                </p>
                <div className=' slider__content  d-flex align-items-center gap-3'>
                    <img src={ava02} alt="avatar" className=' rounded' />
                    <h6>Steven Crock</h6>
                </div>
            </div>
            <div >
                <p className='review__text'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint, expedita!
                </p>
                <div className=' slider__content d-flex align-items-center gap-3'>
                    <img src={ava03} alt="avatar" className=' rounded' />
                    <h6>Steven Crock</h6>
                </div>
            </div>
        </Slider>
    )
}

export default TestimonialSlider