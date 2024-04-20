import React, { useRef } from "react";
import "./intro.scss";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import Lottie from "react-lottie";
import scroll from "../../scroll.json";
import "bootstrap/dist/css/bootstrap.min.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import IntroSlider from "./IntroSlider";

// import ReactFullpage from "@fullpage/react-fullpage";

export default function Intro({
  menuOpen,
  setMenuOpen,
  backOpen,
  setBackOpen,
}) {
  const lottieRef = useRef(null);

  const handleClick = () => {
    if (lottieRef.current) {
      lottieRef.current.play();
    }
  };

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: scroll,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  
  };

  return (
    <div className={"intro"} id="intro">
      <div className="wrapper  ">
        {/* <Slider {...settings}>
          <div>
          <img src="assests/main-photo.jpg" width={'100%'} height={'650px'} alt="" />
          </div>
          <div>
          <img src="assests/main-photo.jpg" width={'100%'} height={'650px'} alt="" />
          </div>
          <div>
          <img src="assests/main-photo.jpg" width={'100%'} height={'650px'} alt="" />

          </div>
          <div>
          <img src="assests/main-photo.jpg" width={'100%'} height={'650px'} alt="" />

          </div>
          <div>
          <img src="assests/main-photo.jpg" width={'100%'} height={'650px'} alt="" />

          </div>
          <div>
          <img src="assests/main-photo.jpg" width={'150px'} height={'200px'} alt="" />

          </div>
        </Slider> */}
        <IntroSlider/>
      </div>
    </div>
  );
}
