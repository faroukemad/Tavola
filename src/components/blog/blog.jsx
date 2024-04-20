import React from 'react'
import './blog.scss'
import { IoPersonOutline } from "react-icons/io5";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { AiOutlineMessage } from "react-icons/ai";
import { TiSocialFacebook } from "react-icons/ti";
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { RiDoubleQuotesR } from "react-icons/ri";

export default function blog() {
    return (
        <div className='blog'>
            <div className="blog-cont-greyshape">
                    <span> Home  / </span>Blog  <span>/</span> Blog Standard
                </div>
            <div className="blog-cont">
                
                <div className="blog-cont-img-cont">
                    <img src="./assests/blog.jpg" alt="" />
                </div>
                <div className="blog-cont-restuarant">
                    Restaurant Has The Answer
                </div>
                <div className="blog-cont-personinfo">
                    <IoPersonOutline className="blog-cont-outline"/>
                    <div className="blog-cont-by"> By <span> KK Sharma </span></div>
                    <MdOutlineCalendarMonth className="blog-cont-outline"/>
                    <div className="blog-cont-by"> 26 Jan 2023</div>
                    <AiOutlineMessage className="blog-cont-outline"/>
                    <div className="blog-cont-by">2.5K</div>
                </div>
                <div className="blog-cont-lorem">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took Link galley of type and scrambled it to make Link type specimen book.
                </div>
                <div className="blog-cont-quote">
                    <div className="blog-cont-create">Create An Information Architecture That’s Easy To Use Way Precise
                        Usability Considerations For Partially</div>
                        <div className="blog-cont-quote-1">
                            
                        <div className="blog-cont-ronald"> <div className="blog-cont-darkline"></div>Ronald M. Spino</div>
                        <RiDoubleQuotesR className="swiper-customer-quotes" />
                        </div>
                </div>
                <div className="blog-cont-lorem">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                    been the industry's standard dummy text ever since the 1500s, when an unknown printer took
                    Link galley of type and scrambled it to make Link type specimen book. It has survived not
                    only five centuries, but also the leap into electronic typesetting, remaining essentially
                    unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
                    Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker
                    including versions of Lorem Ipsum.
                </div>
                <ul className='blog-cont-ul'>
                    <li className='blog-cont-li'>A wonderful serenity has taken possession.</li>
                    <li className='blog-cont-li'>Of my entire soul, like these sweet mornings of spring which.</li>
                    <li className='blog-cont-li'>I enjoy with my whole heart.</li>
                    <li className='blog-cont-li'>This spot, which was created For the bliss of souls like mine.</li>
                </ul>
                <div className="blog-cont-lorem">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                    been the industry's standard dummy text ever since the 1500s, when an unknown printer took
                    Link galley of type and scrambled it to make Link type specimen book. It has survived not
                    only five centuries, but also the leap into electronic typesetting, remaining essentially
                    unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
                    Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker
                    including versions of Lorem Ipsum.
                </div>
                <div className="blog-cont-tags">
                    <div className="blog-cont-tags-1">
                        <div className="blog-cont-tag-">Tags:</div>
                        <div className="blog-cont-pizza">Pizza</div>
                        <div className="blog-cont-pizza">Veronese</div>
                        <div className="blog-cont-pizza">Chicken</div>
                        <div className="blog-cont-pizza">Pizza</div>
                        <div className="blog-cont-pizza">Burger</div>
                        <div className="blog-cont-pizza">Sandwich</div>
                    </div>
                    <div className="blog-cont-tags-2">
                        <TiSocialFacebook className='blog-cont-face' />
                        <FaInstagram className='blog-cont-face' />
                        <CiLinkedin className='blog-cont-face' />
                    </div>

                </div>
                <div className="blog-cont-comments">Comments (03)</div>
                <div className="blog-cont-commenter-comment">
                    <div className="blog-cont-comment-img">
                        <img src="assests/comment1.jpg" alt="" />
                    </div>
                    <div className="blog-cont-comment">
                        <div className="blog-cont-mansour-reply">
                            <div className="blog-cont-mansour">Monsur Rahman Lito</div>
                            <div className="blog-cont-reply">Reply</div>
                        </div>
                        <div className="blog-cont-lorem3">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took Link galley of type and scrambled it to make Link type specimen book.</div>
                    </div>
                </div>
                <div className="blog-cont-commenter-comment blog-cont-commenter2">
                    <div className="blog-cont-comment-img">
                        <img src="assests/comment2.jpg" alt="" />
                    </div>
                    <div className="blog-cont-comment">
                        <div className="blog-cont-mansour-reply">
                            <div className="blog-cont-mansour">Monsur Rahman Lito</div>
                            <div className="blog-cont-reply">Reply</div>
                        </div>
                        <div className="blog-cont-lorem3">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took Link galley of type and scrambled it to make Link type specimen book.</div>
                    </div>
                </div>
                <div className="blog-cont-commenter-comment">
                    <div className="blog-cont-comment-img">
                        <img src="assests/comment3.jpg" alt="" />
                    </div>
                    <div className="blog-cont-comment">
                        <div className="blog-cont-mansour-reply">
                            <div className="blog-cont-mansour">Monsur Rahman Lito</div>
                            <div className="blog-cont-reply">Reply</div>
                        </div>
                        <div className="blog-cont-lorem3">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took Link galley of type and scrambled it to make Link type specimen book.</div>
                    </div>
                </div>
            </div>





        </div>
    )
}
