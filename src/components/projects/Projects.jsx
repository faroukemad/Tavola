import React from "react";

import './projects.scss'
import { CiPercent } from "react-icons/ci";
import { GiSandwich } from "react-icons/gi";
import { MdOutlineRoomService } from "react-icons/md";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, EffectFlip, Autoplay } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css';
import 'swiper/css/effect-flip';
import 'swiper/css/autoplay';
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { IoArrowForwardOutline } from "react-icons/io5";
import { IoArrowBackOutline } from "react-icons/io5";
import { AiOutlinePlus } from "react-icons/ai";
import { IoShareSocialOutline } from "react-icons/io5";
import { RiDoubleQuotesR } from "react-icons/ri";
import { Link } from "react-router-dom";

//import Fade from 'react-reveal/Fade'

//  const [ref, inView] = useInView({
//     threshold: 1,
//    triggerOnce: false
//  });

//  const variants = {
//    visible: { opacity: 1, scale: 1 },
//   hidden: { opacity: 0, scale: 0.65 }
// };
const Projects = () => {




  // animate={inView ? "visible" : "hidden"}
  //         variants={variants}  exit="hidden" transition={{ duration: 2 }}   ref={ref} 
  return (
    <div className='projects' id="projects">
      <div className="wrapper " >



        <Swiper className="intro-swiper"
          loop={true}
          spaceBetween={50}
          slidesPerView={1}
          navigation={{
            nextEl: ".button-next-side",
            prevEl: ".button-prev-side",
          }}
          modules={[Navigation, EffectFlip]}
          effect="flip"
        >

          <SwiperSlide>
            <div className="img  intro-slider-relative">
              <img src="assests/back2.jpg" alt="" />
              <div className=" intro-slider-absolute" >
                <h3 className="intro-slider-high">High Quality Test Station</h3>
                <h1 className="intro-slider-we">We believe Good Food Offer Great Smile</h1>
                <p className="intro-slider-lorem" >Lorem ipsum dolor sit amet consectetim sit deleniti et voluptatum voluptatibus veritatis!</p>
                <Link to='/contact'> <button className="intro-slider-book">Book Link table</button></Link>
                <Link to='/menu'> <button className="intro-slider-view">View More</button></Link>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="img intro-slider-relative">
              <img src="assests/back.jpg" alt="" />
              <div className=" intro-slider-absolute" >
                <h3 className="intro-slider-high">High Quality Test Station</h3>
                <h1 className="intro-slider-we">We believe Good Food Offer Great Smile</h1>
                <p className="intro-slider-lorem" >Lorem ipsum dolor sit amet consectetim sit deleniti et voluptatum voluptatibus veritatis!</p>
                <Link to='/contact'> <button className="intro-slider-book">Book Link table</button></Link>
                <Link to='/menu'> <button className="intro-slider-view">View More</button></Link>
              </div>
            </div>
          </SwiperSlide>
          <div className="button-next-side position-absolute  text-white " style={{ top: '50%', right: '0%', zIndex: '99', cursor: 'pointer' }}>
            <IoIosArrowForward style={{ width: '30px', height: '30px' }} />
          </div>
          <div className="button-prev-side position-absolute  text-white " style={{ top: '50%', left: '0%', zIndex: '99', cursor: 'pointer' }}>
            <IoIosArrowBack style={{ width: '30px', height: '30px' }} />
          </div>
        </Swiper>

        <div className="w-100 d-flex align-items-center justify-content-evenly mt-5 project-icons-wrap">
          <div className="d-flex align-items-center mb-4">
            <div className="green-circle me-3">
              <CiPercent className="black" />
            </div>
            <div className="d-flex flex-column">
              <h4 className="text-black fw-bold mb-0">Discount Voucher</h4>
              <p className=" project-lorem">lorem ipsum dolor shit amet lorem ipsum</p>
            </div>
          </div>

          {/* <div className="ver-line"></div> */}

          <div className="d-flex align-items-center mb-4">
            <div className="green-circle me-3">
              <GiSandwich className="black" />
            </div>
            <div className="d-flex flex-column">

              <h4 className="text-black fw-bold mb-0">Fresh Healty Food </h4>
              <p className="project-lorem">lorem ipsum dolor shit amet lorem ipsum</p>
            </div></div>

          {/* <div className="ver-line"></div> */}

          <div className="d-flex align-items-center  ">
            <div className="green-circle me-3">
              <MdOutlineRoomService className="black" />
            </div>
            <div className="d-flex flex-column">
              <h4 className="text-black fw-bold mb-0">Fast Serve On table</h4>
              <p className="project-lorem">lorem ipsum dolor shit amet lorem ipsum</p>
            </div>
          </div>
        </div>


        <div className="position-relative project-browse-buttons mt-5 mb-5">
          <div className="project-browse">Browse Our Menu</div>
          <div className="button-next-side2 position-absolute text-white px-2 py-1" >
            <IoArrowForwardOutline style={{ width: '15px', height: '15px' }} />
          </div>
          <div className="button-prev-side2 position-absolute text-white px-2 py-1" >
            <IoArrowBackOutline style={{ width: '15px', height: '15px' }} />
          </div>
        </div>


        <Swiper
          className="mt-2 p-4"
          spaceBetween={10}
          slidesPerView={4}
          navigation={{
            nextEl: ".button-next-side2",
            prevEl: ".button-prev-side2",
          }}
          modules={[Navigation, Autoplay]}
          loop={true}
          autoplay={{ delay: 2000 }}
          speed={2000}
          breakpoints={{
            // when window width is >= 640px
            900: {
              slidesPerView: 3,
            },
            // when window width is >= 768px
            1: {
              slidesPerView: 1,
            },
            600: {
              slidesPerView: 2,
            },
            1200: {
              slidesPerView: 4,
            }

          }}
        >
          <SwiperSlide>
            <div className="food-menu">
              <div className="row d-flex flex-column">
                <div className="d-flex align-items-center my-3">
                  <img className="mx-3" src="assests/burger.png" width={'60px'} height={'60px'} alt="" style={{ borderRadius: "50%" }} />
                  <div className="d-flex flex-column">
                    <p className="fw-bold  mb-0 food-burger" >Burger</p>
                    <p className=" mb-0 food-spicy">Delicuis and Spicy</p>
                  </div>
                </div>
                <p className="food-spicy mb-0 ms-3">Regular Price</p>
                <p className="food-burger mb-0 ms-3">$10.00</p>
              </div>
              <div className="food-plus">
                <AiOutlinePlus className="food-plus-icon" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="food-menu">
              <div className="row d-flex flex-column">
                <div className="d-flex align-items-center my-3">
                  <img className="mx-3" src="assests/momos.png" width={'60px'} height={'60px'} alt="" style={{ borderRadius: "50%" }} />
                  <div className="d-flex flex-column">
                    <p className="fw-bold  mb-0 food-burger" >Momos</p>
                    <p className=" mb-0 food-spicy">Delicuis and Spicy</p>
                  </div>
                </div>
                <p className="food-spicy mb-0 ms-3">Regular Price</p>
                <p className="food-burger mb-0 ms-3">$25.00</p>
              </div>
              <div className="food-plus">
                <AiOutlinePlus className="food-plus-icon" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="food-menu">
              <div className="row d-flex flex-column">
                <div className="d-flex align-items-center my-3">
                  <img className="mx-3" src="assests/Rice.png" alt="" width={'60px'} height={'60px'} style={{ borderRadius: "50%" }} />
                  <div className="d-flex flex-column">
                    <p className="fw-bold  mb-0 food-burger" >Hot Rice</p>
                    <p className=" mb-0 food-spicy">Delicuis and Spicy</p>
                  </div>
                </div>
                <p className="food-spicy mb-0 ms-3">Regular Price</p>
                <p className="food-burger mb-0 ms-3">$15.00</p>
              </div>
              <div className="food-plus">
                <AiOutlinePlus className="food-plus-icon" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="food-menu">
              <div className="row d-flex flex-column">
                <div className="d-flex align-items-center my-3">
                  <img className="mx-3" src="assests/burger.png" alt="" width={'60px'} height={'60px'} style={{ borderRadius: "50%" }} />
                  <div className="d-flex flex-column">
                    <p className="fw-bold  mb-0 food-burger" >Burger</p>
                    <p className=" mb-0 food-spicy">Delicuis and Spicy</p>
                  </div>
                </div>
                <p className="food-spicy mb-0 ms-3">Regular Price</p>
                <p className="food-burger mb-0 ms-3">$10.00</p>
              </div>
              <div className="food-plus">
                <AiOutlinePlus className="food-plus-icon" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="food-menu">
              <div className="row d-flex flex-column">
                <div className="d-flex align-items-center my-3">
                  <img className="mx-3" src="assests/pasta.png" alt="" width={'60px'} height={'60px'} style={{ borderRadius: "50%" }} />
                  <div className="d-flex flex-column">
                    <p className="fw-bold  mb-0 food-burger" >pasta</p>
                    <p className=" mb-0 food-spicy">Delicuis and Spicy</p>
                  </div>
                </div>
                <p className="food-spicy mb-0 ms-3">Regular Price</p>
                <p className="food-burger mb-0 ms-3">$45.00</p>
              </div>
              <div className="food-plus">
                <AiOutlinePlus className="food-plus-icon" />
              </div>
            </div>
          </SwiperSlide>



        </Swiper>



        <div className="project-div mt-5">
          {/* <img src="assests/project.png" className="project-img" alt="" /> */}
          <div className="project-today mb-4"> Today's Special</div>
          <div className="projects-div">
            <div className="project-cont">
              <div className="d-flex align-items-center justify-content-between">
                <p className="text-black mb-0">pepproni</p>
                <p className="text-black mb-0">750g</p>
              </div>
              <div className="d-flex align-items-center justify-content-between">
                <p className="text-black fw-bold mb-0 project-cont-pep" >pepproni</p>
                <p className=" mb-0 fw-bold" style={{ color: '#7da640' }}>$15.00</p>
              </div>
              <div className="project-container-img">
                <img src="assests/pep.jpg" className="project-cont-img" alt="" />
                <Link to='/menu'>
                  <div className="swiper-chef-plus">
                    <AiOutlinePlus className="food-plus-icon" />
                  </div>
                </Link>
              </div>
            </div>
            <div className="project-cont">
              <div className="d-flex align-items-center justify-content-between">
                <p className="text-black mb-0">pepproni</p>
                <p className="text-black mb-0">750g</p>
              </div>
              <div className="d-flex align-items-center justify-content-between">
                <p className="text-black fw-bold mb-0 project-cont-pep" >pepproni</p>
                <p className=" mb-0 fw-bold" style={{ color: '#7da640' }}>$15.00</p>
              </div>
              <div className="project-container-img">
                <img src="assests/pep.jpg" className="project-cont-img" alt="" />
                <Link to='/menu'>
                  <div className="swiper-chef-plus">
                    <AiOutlinePlus className="food-plus-icon" />
                  </div>
                </Link>
              </div>
            </div>
            <div className="project-cont">
              <div className="d-flex align-items-center justify-content-between">
                <p className="text-black mb-0">pepproni</p>
                <p className="text-black mb-0">750g</p>
              </div>
              <div className="d-flex align-items-center justify-content-between">
                <p className="text-black fw-bold mb-0 project-cont-pep" >pepproni</p>
                <p className=" mb-0 fw-bold" style={{ color: '#7da640' }}>$15.00</p>
              </div>
              <div className="project-container-img">
                <img src="assests/pep.jpg" className="project-cont-img" alt="" />
                <Link to='/menu'>
                  <div className="swiper-chef-plus">
                    <AiOutlinePlus className="food-plus-icon" />
                  </div>
                </Link>
              </div>
            </div>
            <div className="project-cont">
              <div className="d-flex align-items-center justify-content-between">
                <p className="text-black mb-0">pepproni</p>
                <p className="text-black mb-0">750g</p>
              </div>
              <div className="d-flex align-items-center justify-content-between">
                <p className="text-black fw-bold mb-0 project-cont-pep" >pepproni</p>
                <p className=" mb-0 fw-bold" style={{ color: '#7da640' }}>$15.00</p>
              </div>
              <div className="project-container-img">
                <img src="assests/pep.jpg" className="project-cont-img" alt="" />
                <Link to='/menu'>
                  <div className="swiper-chef-plus">
                    <AiOutlinePlus className="food-plus-icon" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>


        <div className="project-cont2">
          {/* <img src="assests/food.png" alt="" /> */}

          <h1 className="project-swiper-meet my-5">Meet The</h1>


          <Swiper className="mt-2"
            spaceBetween={50}
            slidesPerView={4}
            navigation={{
              nextEl: ".button-next-side3",
              prevEl: ".button-prev-side3",
            }}
            modules={[Navigation, Autoplay]}
            loop={true}
            autoplay={{ delay: 2000 }}
            speed={2000}
            breakpoints={{
              // when window width is >= 640px
              900: {
                slidesPerView: 3,
              },
              // when window width is >= 768px
              1: {
                slidesPerView: 1,
              },
              600: {
                slidesPerView: 2,
              },
              1200: {
                slidesPerView: 4,
              }

            }}
          >
            <SwiperSlide>
              <div className="swiper-chef">
                <div className="swiper-chef-img">
                  <img src="assests/chef.jpg" alt="" />

                </div>
                <div className="swiper-chef-name">
                  <div className="swiper-chef-info">
                    <p className=" swiper-chef-john">John Doe</p>
                    <p className="  swiper-chef-senior"> Senior Chef</p>
                  </div>
                  <div className="swiper-chef-social">
                    <IoShareSocialOutline className="swiper-chef-icon" />
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="swiper-chef">
                <div className="swiper-chef-img">
                  <img src="assests/chef4.jpg" alt="" />
                </div>
                <div className="swiper-chef-name">
                  <div className="swiper-chef-info">
                    <p className=" swiper-chef-john">Cotlin Care</p>
                    <p className="  swiper-chef-senior"> Senior Chef</p>
                  </div>
                  <div className="swiper-chef-social">
                    <IoShareSocialOutline className="swiper-chef-icon" />
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-chef">
                <div className="swiper-chef-img">
                  <img src="assests/chef3.jpg" alt="" />
                </div>
                <div className="swiper-chef-name">
                  <div className="swiper-chef-info">
                    <p className=" swiper-chef-john">Sarah Albert</p>
                    <p className="  swiper-chef-senior"> Senior Chef</p>
                  </div>
                  <div className="swiper-chef-social">
                    <IoShareSocialOutline className="swiper-chef-icon" />
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-chef">
                <div className="swiper-chef-img">
                  <img src="assests/chef.jpg" alt="" />
                </div>
                <div className="swiper-chef-name">
                  <div className="swiper-chef-info">
                    <p className=" swiper-chef-john">John Doe</p>
                    <p className="  swiper-chef-senior"> Senior Chef</p>
                  </div>
                  <div className="swiper-chef-social">
                    <IoShareSocialOutline className="swiper-chef-icon" />
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-chef">
                <div className="swiper-chef-img">
                  <img src="assests/chef2.jpg" alt="" />
                </div>
                <div className="swiper-chef-name">
                  <div className="swiper-chef-info">
                    <p className=" swiper-chef-john">Jemy Carline</p>
                    <p className="  swiper-chef-senior"> Senior Chef</p>
                  </div>
                  <div className="swiper-chef-social">
                    <IoShareSocialOutline className="swiper-chef-icon" />
                  </div>
                </div>
              </div>
            </SwiperSlide>


          </Swiper>

          <div className="position-relative w-100 my-4">
            <div className="button-next-side3 position-absolute text-white px-2 py-1" >
              <IoArrowForwardOutline style={{ width: '15px', height: '15px' }} />
            </div>
            <div className="button-prev-side3 position-absolute text-white px-2 py-1" >
              <IoArrowBackOutline style={{ width: '15px', height: '15px' }} />
            </div>
          </div>
        </div>


        <div className="project-customers mb-5">
          <div className="project-customers-comment">
            Customer's Comment
          </div>


          <Swiper className="mt-2"
            spaceBetween={50}
            slidesPerView={1}
            navigation={{
              nextEl: ".button-next-side",
              prevEl: ".button-prev-side",
            }}
            modules={[Navigation, Autoplay]}
            loop={true}
            autoplay={{ delay: 2000 }}
            speed={2000}
          >
            <SwiperSlide>
              <div className="swiper-customer row">
                <div className="swiper-customer-img ">
                  <img src="assests/customer.jpg" alt="" />
                </div>
                <div className="swiper-cutomer-review ">
                  <p className="swiper-customer-p">There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                    alteration in some form, by injected humour, or randomised words which don't look even slightly
                    believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't
                    anything embarrassing hidden in the middle of text.
                  </p>
                  <div className="swiper-customer-name-dot">
                    <div className="swiper-customer-names">
                      <div className="swiper-green-line me-4"></div>
                      <div className="swiper-customer-name">
                        John Doe
                        <p>Food Expert</p>
                      </div>
                    </div>
                    <RiDoubleQuotesR className="swiper-customer-quotes" />

                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-customer row">
                <div className="swiper-customer-img ">
                  <img src="assests/customer2.jpg" alt="" />
                </div>
                <div className="swiper-cutomer-review ">
                  <p className="swiper-customer-p">There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                    alteration in some form, by injected humour, or randomised words which don't look even slightly
                    believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't
                    anything embarrassing hidden in the middle of text.
                  </p>
                  <div className="swiper-customer-name-dot">
                    <div className="swiper-customer-names">
                      <div className="swiper-green-line me-4"></div>
                      <div className="swiper-customer-name">
                        Marn kamk
                        <p>Food Expert</p>
                      </div>
                    </div>
                    <RiDoubleQuotesR className="swiper-customer-quotes" />

                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper-customer row">
                <div className="swiper-customer-img ">
                  <img src="assests/customer3.jpg" alt="" />
                </div>
                <div className="swiper-cutomer-review ">
                  <p className="swiper-customer-p">There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                    alteration in some form, by injected humour, or randomised words which don't look even slightly
                    believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't
                    anything embarrassing hidden in the middle of text.
                  </p>
                  <div className="swiper-customer-name-dot">
                    <div className="swiper-customer-names">
                      <div className="swiper-green-line me-4"></div>
                      <div className="swiper-customer-name">
                        Carry Mint
                        <p>Food Expert</p>
                      </div>
                    </div>
                    <RiDoubleQuotesR className="swiper-customer-quotes" />

                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

      </div>
    </div>
  );
};
export default Projects;
