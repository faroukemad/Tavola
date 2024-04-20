import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, EffectFlip } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css';
import 'swiper/css/effect-flip';
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

export default function IntroSlider(){

    return(
    <div>


<div className="button-next-side position-absolute bg-black text-white " style={{top:'50%',right:'0%',zIndex:'99',cursor:'pointer'}}>
                <IoIosArrowForward style={{width:'30px',height:'30px'}}/>
            </div>
            <div className="button-prev-side position-absolute bg-black text-white " style={{top:'50%',left:'0%',zIndex:'99',cursor:'pointer'}}>
                <IoIosArrowBack style={{width:'30px',height:'30px'}}/>
            </div>
         <Swiper
          loop={true}
          spaceBetween={50}
          slidesPerView={1}
          navigation={{
            nextEl:".button-next-side",
            prevEl:".button-prev-side",
          }}
          modules={[Navigation, EffectFlip]}
          effect="flip"
        >
          
            <SwiperSlide>
                <div className="img position-relative">
                    <img src="https://demo1.leotheme.com/leo_wooden_demo/themes/leo_wooden/assets/img/modules/leoslideshow/2.jpg" alt="" />
                    <div className="position-absolute top-25 left-0" style={{top:'25%',color:'black',left:'5%'}}>
                        <h3 style={{color:'#7da640'}}>High Quality Test Station</h3>
                        <h1 className="intro-slider-we">We believe Good Food Offer Great Smile</h1>
                        <p className="intro-slider-lorem" >Lorem ipsum dolor sit amet consectetim sit deleniti et voluptatum voluptatibus veritatis!</p>
                        <button className="intro-slider-book">Book Link table</button>
                        <button className="intro-slider-view">View More</button>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="img position-relative">
                    <img src="https://demo1.leotheme.com/leo_wooden_demo/themes/leo_wooden/assets/img/modules/leoslideshow/1.jpg" alt="" />
                    <div className="position-absolute top-25 left-0" style={{top:'25%',color:'black',left:'5%'}}>
                    <h3 style={{color:'#7da640'}}>High Quality Test Station</h3>
                        <h1 className="intro-slider-we">We believe Good Food Offer Great Smile</h1>
                        <p className="intro-slider-lorem" >Lorem ipsum dolor sit amet consectetim sit deleniti et voluptatum voluptatibus veritatis!</p>
                        <button className="intro-slider-book">Book Link table</button>
                        <button className="intro-slider-view">View More</button>
                    </div>
                </div>
            </SwiperSlide>
            
        </Swiper>
    </div>
    );
};
