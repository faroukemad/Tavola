import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import './about.scss';
import { BiCoffee } from 'react-icons/bi'
import { CiCoffeeBean } from 'react-icons/ci'
import { MdOutlineCoffeeMaker } from 'react-icons/md'
import Aboutslider from './Aboutslider';
import { GiFruitBowl } from "react-icons/gi";
import { TbChefHat } from "react-icons/tb";
import { BiSolidDrink } from "react-icons/bi";
import { IoFastFoodOutline } from "react-icons/io5";

const About = () => {



  return (
    <div className='about' id='about'>
      <div className="about-cont">
        <div className="about-cont-ourmenu">
          About Us
        </div>
        <div className="about-cont-home-ourmenu">
          Home / About Us
        </div>
      </div>
      <div className="about-cont2">
        <div className="about-cont2-we">
          We Invite you to Visit Our Restaurant
        </div>
        <div className="about-cont2-lorem">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        </div>
        <div className="about-cont2-video">
          <img src="assests/video.jpg" alt="" />
        </div>
        <div className="about-cont2-what">
          What We Do
        </div>
        <div className="about-cont2-containers">
          <div className="about-cont2-container">
              <div className="about-cont2-circle">
                <GiFruitBowl className="about-cont2-fruit"/>
              </div>
              <div className="about-cont2-fresh">
                Fresh Products
              </div>
              <div className="about-cont2-lorem2">
              Lorem Ipsum is simply dummy text of the printing and
              </div>
          </div>
          <div className="about-cont2-container">
              <div className="about-cont2-circle">
                <TbChefHat className="about-cont2-fruit"/>
              </div>
              <div className="about-cont2-fresh">
                Fresh Products
              </div>
              <div className="about-cont2-lorem2">
              Lorem Ipsum is simply dummy text of the printing and
              </div>
          </div>
          <div className="about-cont2-container">
              <div className="about-cont2-circle">
                <IoFastFoodOutline className="about-cont2-fruit"/>
              </div>
              <div className="about-cont2-fresh">
                Fresh Products
              </div>
              <div className="about-cont2-lorem2">
              Lorem Ipsum is simply dummy text of the printing and
              </div>
          </div>
          <div className="about-cont2-container">
              <div className="about-cont2-circle">
                <IoFastFoodOutline className="about-cont2-fruit"/>
              </div>
              <div className="about-cont2-fresh">
                Fresh Products
              </div>
              <div className="about-cont2-lorem2">
              Lorem Ipsum is simply dummy text of the printing and
              </div>
          </div>
        </div>
      </div>

    </div>
  )
}
export default About;