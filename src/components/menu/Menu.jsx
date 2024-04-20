import React, { useEffect } from 'react'
import './menu.scss'
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
// import Menuslider from './Menuslider';

export default function Menu() {



  return (
    <div className='menu' id="menu">
      <div className="menu-cont">
        <div className="menu-cont-ourmenu">
          Our Menu
        </div>
        <div className="menu-cont-home-ourmenu">
          Home / Our Menu
        </div>
      </div>
      <div className="menu-cont2 ">
        {/* <div className="menu-cont2-veg-img">
          <img src="assests/veg.png" alt="" />
        </div> */}
        <div className="menu-cont2-containers me-3">

          <div className="menu-cont2-1 ">
            <div className="menu-cont2-starters">Starters</div>
            <div className="menu-cont2-Creamy-price">
              <div className="menu-cont2-creamy">Creamy Mushroom Soup</div>

              <div className="menu-cont2-price">$10</div>
            </div>
            <div className="menu-cont2-lorem">Lorem Ipsum is simply dummy text of
              the printing and typesetting industry. Lorem Ipsum has been the industry's</div>
          </div>
          <div className="menu-cont2-1 ">

            <div className="menu-cont2-Creamy-price">
              <div className="menu-cont2-creamy">Grilled Caesar Salad</div>

              <div className="menu-cont2-price">$10</div>
            </div>
            <div className="menu-cont2-lorem">Lorem Ipsum is simply dummy text of
              the printing and typesetting industry. Lorem Ipsum has been the industry's</div>
          </div>
          <div className="menu-cont2-1 ">

            <div className="menu-cont2-Creamy-price">
              <div className="menu-cont2-creamy">Signature Autumn Salad</div>

              <div className="menu-cont2-price">$10</div>
            </div>
            <div className="menu-cont2-lorem">Lorem Ipsum is simply dummy text of
              the printing and typesetting industry. Lorem Ipsum has been the industry's</div>
          </div>
          <div className="menu-cont2-1 ">

            <div className="menu-cont2-Creamy-price">
              <div className="menu-cont2-creamy">Glazed Tomato Bruschite</div>

              <div className="menu-cont2-price">$10</div>
            </div>
            <div className="menu-cont2-lorem">Lorem Ipsum is simply dummy text of
              the printing and typesetting industry. Lorem Ipsum has been the industry's</div>
          </div>
          <div className="menu-cont2-1 ">

            <div className="menu-cont2-Creamy-price">
              <div className="menu-cont2-creamy">Stuffed Mushrooms</div>

              <div className="menu-cont2-price">$10</div>
            </div>
            <div className="menu-cont2-lorem">Lorem Ipsum is simply dummy text of
              the printing and typesetting industry. Lorem Ipsum has been the industry's</div>
          </div>
        </div>
        <div className="menu-cont2-containers">

          <div className="menu-cont2-1 ">
            <div className="menu-cont2-starters">Sea Food</div>
            <div className="menu-cont2-Creamy-price">
              <div className="menu-cont2-creamy">Baked Oysters Rockefeller</div>

              <div className="menu-cont2-price">$10</div>
            </div>
            <div className="menu-cont2-lorem">Lorem Ipsum is simply dummy text of
              the printing and typesetting industry. Lorem Ipsum has been the industry's</div>
          </div>
          <div className="menu-cont2-1 ">

            <div className="menu-cont2-Creamy-price">
              <div className="menu-cont2-creamy">Stuffed Mushrooms</div>

              <div className="menu-cont2-price">$10</div>
            </div>
            <div className="menu-cont2-lorem">Lorem Ipsum is simply dummy text of
              the printing and typesetting industry. Lorem Ipsum has been the industry's</div>
          </div>
          <div className="menu-cont2-1 ">

            <div className="menu-cont2-Creamy-price">
              <div className="menu-cont2-creamy">Grilled Shrimp Skewers</div>

              <div className="menu-cont2-price">$10</div>
            </div>
            <div className="menu-cont2-lorem">Lorem Ipsum is simply dummy text of
              the printing and typesetting industry. Lorem Ipsum has been the industry's</div>
          </div>
          <div className="menu-cont2-1 ">

            <div className="menu-cont2-Creamy-price">
              <div className="menu-cont2-creamy">Seafood Linguine</div>

              <div className="menu-cont2-price">$10</div>
            </div>
            <div className="menu-cont2-lorem">Lorem Ipsum is simply dummy text of
              the printing and typesetting industry. Lorem Ipsum has been the industry's</div>
          </div>
          <div className="menu-cont2-1 ">

            <div className="menu-cont2-Creamy-price">
              <div className="menu-cont2-creamy">Shrimp Scampi</div>

              <div className="menu-cont2-price">$10</div>
            </div>
            <div className="menu-cont2-lorem">Lorem Ipsum is simply dummy text of
              the printing and typesetting industry. Lorem Ipsum has been the industry's</div>
          </div>

        </div>
        {/* <div className="col-1"></div>
        <div className="menu-cont2-1 col-3">
          <div className="menu-cont2-starters">Starters</div>
          <div className="menu-cont2-Creamy-price">
            <div className="menu-cont2-creamy">Creamy Mushroom Soup</div>
           
            <div className="menu-cont2-price">$10</div>
          </div>
          <div className="menu-cont2-lorem">Lorem Ipsum is simply dummy text of
            the printing and typesetting industry. Lorem Ipsum has been the industry's</div>
        </div>
        <div className="menu-cont2-1 col-3">
          <div className="menu-cont2-starters">Sea Food</div>
          <div className="menu-cont2-Creamy-price">
            <div className="menu-cont2-creamy">Baked Oysters Rockefeller</div>
           
            <div className="menu-cont2-price">$10</div>
          </div>
          <div className="menu-cont2-lorem">Lorem Ipsum is simply dummy text of
            the printing and typesetting industry. Lorem Ipsum has been the industry's</div>
        </div>
        <div className="col-4 me-3"></div>
        <div className="col-1"></div>
        <div className="menu-cont2-1 col-3">

          <div className="menu-cont2-Creamy-price">
            <div className="menu-cont2-creamy">Stuffed Mushrooms</div>
           
            <div className="menu-cont2-price">$10</div>
          </div>
          <div className="menu-cont2-lorem">Lorem Ipsum is simply dummy text of
            the printing and typesetting industry. Lorem Ipsum has been the industry's</div>
        </div>
        <div className="menu-cont2-1 col-3">

          <div className="menu-cont2-Creamy-price">
            <div className="menu-cont2-creamy">Grilled Shrimp Skewers</div>
           
            <div className="menu-cont2-price">$10</div>
          </div>
          <div className="menu-cont2-lorem">Lorem Ipsum is simply dummy text of
            the printing and typesetting industry. Lorem Ipsum has been the industry's</div>
        </div>
        <div className="col-4 me-3"></div>
        <div className="col-1"></div>
        <div className="menu-cont2-1 col-3">

          <div className="menu-cont2-Creamy-price">
            <div className="menu-cont2-creamy">Grilled Caesar Salad</div>
           
            <div className="menu-cont2-price">$10</div>
          </div>
          <div className="menu-cont2-lorem">Lorem Ipsum is simply dummy text of
            the printing and typesetting industry. Lorem Ipsum has been the industry's</div>
        </div>
        <div className="menu-cont2-1 col-3">

          <div className="menu-cont2-Creamy-price">
            <div className="menu-cont2-creamy">Seafood Linguine</div>
           
            <div className="menu-cont2-price">$10</div>
          </div>
          <div className="menu-cont2-lorem">Lorem Ipsum is simply dummy text of
            the printing and typesetting industry. Lorem Ipsum has been the industry's</div>
        </div>
        <div className="col-4 me-3"></div>
        <div className="col-1"></div>
        <div className="menu-cont2-1 col-3">

          <div className="menu-cont2-Creamy-price">
            <div className="menu-cont2-creamy">Signature Autumn Salad</div>
           
            <div className="menu-cont2-price">$10</div>
          </div>
          <div className="menu-cont2-lorem">Lorem Ipsum is simply dummy text of
            the printing and typesetting industry. Lorem Ipsum has been the industry's</div>
        </div>
        <div className="menu-cont2-1 col-3">

          <div className="menu-cont2-Creamy-price">
            <div className="menu-cont2-creamy">Shrimp Scampi</div>
           
            <div className="menu-cont2-price">$10</div>
          </div>
          <div className="menu-cont2-lorem">Lorem Ipsum is simply dummy text of
            the printing and typesetting industry. Lorem Ipsum has been the industry's</div>
        </div>
        <div className="col-4"></div>
        */}
      </div>
      <div className="menu-cont2 ">
        <div className="menu-cont2-containers me-3">

          <div className="menu-cont2-1 ">
            <div className="menu-cont2-starters">Drinks</div>
            <div className="menu-cont2-Creamy-price">
              <div className="menu-cont2-creamy">Cranberry Juice</div>

              <div className="menu-cont2-price">$10</div>
            </div>
            <div className="menu-cont2-lorem">Lorem Ipsum is simply dummy text of
              the printing and typesetting industry. Lorem Ipsum has been the industry's</div>
          </div>

          <div className="menu-cont2-1 ">
            <div className="menu-cont2-Creamy-price">
              <div className="menu-cont2-creamy">Hot Chocolate</div>

              <div className="menu-cont2-price">$10</div>
            </div>
            <div className="menu-cont2-lorem">Lorem Ipsum is simply dummy text of
              the printing and typesetting industry. Lorem Ipsum has been the industry's</div>
          </div>
          <div className="menu-cont2-1 ">
            <div className="menu-cont2-Creamy-price">
              <div className="menu-cont2-creamy">Hot Chocolate</div>

              <div className="menu-cont2-price">$10</div>
            </div>
            <div className="menu-cont2-lorem">Lorem Ipsum is simply dummy text of
              the printing and typesetting industry. Lorem Ipsum has been the industry's</div>
          </div>
          <div className="menu-cont2-1 ">
            <div className="menu-cont2-Creamy-price">
              <div className="menu-cont2-creamy">Lemon-Lime Soda</div>

              <div className="menu-cont2-price">$10</div>
            </div>
            <div className="menu-cont2-lorem">Lorem Ipsum is simply dummy text of
              the printing and typesetting industry. Lorem Ipsum has been the industry's</div>
          </div>
          <div className="menu-cont2-1 ">
            <div className="menu-cont2-Creamy-price">
              <div className="menu-cont2-creamy">pepsi</div>

              <div className="menu-cont2-price">$10</div>
            </div>
            <div className="menu-cont2-lorem">Lorem Ipsum is simply dummy text of
              the printing and typesetting industry. Lorem Ipsum has been the industry's</div>
          </div>
        </div>
        <div className="menu-cont2-containers me-3">

          <div className="menu-cont2-1 ">
            <div className="menu-cont2-starters">Specials</div>
            <div className="menu-cont2-Creamy-price">
              <div className="menu-cont2-creamy">Beef Tenderloin </div>

              <div className="menu-cont2-price">$10</div>
            </div>
            <div className="menu-cont2-lorem">Lorem Ipsum is simply dummy text of
              the printing and typesetting industry. Lorem Ipsum has been the industry's</div>
          </div>
          <div className="menu-cont2-1 ">
            <div className="menu-cont2-Creamy-price">
              <div className="menu-cont2-creamy">Mushroom Risotto</div>

              <div className="menu-cont2-price">$10</div>
            </div>
            <div className="menu-cont2-lorem">Lorem Ipsum is simply dummy text of
              the printing and typesetting industry. Lorem Ipsum has been the industry's</div>
          </div>
          <div className="menu-cont2-1 ">
            <div className="menu-cont2-Creamy-price">
              <div className="menu-cont2-creamy">Lobster Thermidor</div>

              <div className="menu-cont2-price">$10</div>
            </div>
            <div className="menu-cont2-lorem">Lorem Ipsum is simply dummy text of
              the printing and typesetting industry. Lorem Ipsum has been the industry's</div>
          </div>
          <div className="menu-cont2-1 ">
            <div className="menu-cont2-Creamy-price">
              <div className="menu-cont2-creamy">Beef Bourguignon</div>

              <div className="menu-cont2-price">$10</div>
            </div>
            <div className="menu-cont2-lorem">Lorem Ipsum is simply dummy text of
              the printing and typesetting industry. Lorem Ipsum has been the industry's</div>
          </div>
          <div className="menu-cont2-1 ">
            <div className="menu-cont2-Creamy-price">
              <div className="menu-cont2-creamy">chicken pizza</div>

              <div className="menu-cont2-price">$10</div>
            </div>
            <div className="menu-cont2-lorem">Lorem Ipsum is simply dummy text of
              the printing and typesetting industry. Lorem Ipsum has been the industry's</div>
          </div>
        </div>
        <div className="menu-cont2-containers">

          <div className="menu-cont2-1 ">
            <div className="menu-cont2-starters">Meat</div>
            <div className="menu-cont2-Creamy-price">
              <div className="menu-cont2-creamy">Beef Bourguignon</div>

              <div className="menu-cont2-price">$10</div>
            </div>
            <div className="menu-cont2-lorem">Lorem Ipsum is simply dummy text of
              the printing and typesetting industry. Lorem Ipsum has been the industry's</div>
          </div>
          <div className="menu-cont2-1 ">
            <div className="menu-cont2-Creamy-price">
              <div className="menu-cont2-creamy">Barbecue Ribs</div>

              <div className="menu-cont2-price">$10</div>
            </div>
            <div className="menu-cont2-lorem">Lorem Ipsum is simply dummy text of
              the printing and typesetting industry. Lorem Ipsum has been the industry's</div>
          </div>
          <div className="menu-cont2-1 ">
            <div className="menu-cont2-Creamy-price">
              <div className="menu-cont2-creamy">Roasted Turkey</div>

              <div className="menu-cont2-price">$10</div>
            </div>
            <div className="menu-cont2-lorem">Lorem Ipsum is simply dummy text of
              the printing and typesetting industry. Lorem Ipsum has been the industry's</div>
          </div>
          <div className="menu-cont2-1 ">
            <div className="menu-cont2-Creamy-price">
              <div className="menu-cont2-creamy">Beef Stroganoff</div>

              <div className="menu-cont2-price">$10</div>
            </div>
            <div className="menu-cont2-lorem">Lorem Ipsum is simply dummy text of
              the printing and typesetting industry. Lorem Ipsum has been the industry's</div>
          </div>
          <div className="menu-cont2-1 ">
            <div className="menu-cont2-Creamy-price">
              <div className="menu-cont2-creamy">Meat Pasta</div>

              <div className="menu-cont2-price">$10</div>
            </div>
            <div className="menu-cont2-lorem">Lorem Ipsum is simply dummy text of
              the printing and typesetting industry. Lorem Ipsum has been the industry's</div>
          </div>
        </div>
        {/* <div className="col-1 ms-3"></div>
        <div className="menu-cont2-1 col-3">
          <div className="menu-cont2-starters">Drinks</div>
          <div className="menu-cont2-Creamy-price">
            <div className="menu-cont2-creamy">Cranberry Juice</div>

            <div className="menu-cont2-price">$10</div>
          </div>
          <div className="menu-cont2-lorem">Lorem Ipsum is simply dummy text of
            the printing and typesetting industry. Lorem Ipsum has been the industry's</div>
        </div>
        <div className="menu-cont2-1 col-3">
          <div className="menu-cont2-starters">Specials</div>
          <div className="menu-cont2-Creamy-price">
            <div className="menu-cont2-creamy">Beef Tenderloin </div>

            <div className="menu-cont2-price">$10</div>
          </div>
          <div className="menu-cont2-lorem">Lorem Ipsum is simply dummy text of
            the printing and typesetting industry. Lorem Ipsum has been the industry's</div>
        </div>
        <div className="menu-cont2-1 col-3">
          <div className="menu-cont2-starters">Meat</div>
          <div className="menu-cont2-Creamy-price">
            <div className="menu-cont2-creamy">Beef Bourguignon</div>

            <div className="menu-cont2-price">$10</div>
          </div>
          <div className="menu-cont2-lorem">Lorem Ipsum is simply dummy text of
            the printing and typesetting industry. Lorem Ipsum has been the industry's</div>
        </div>
        <div className="col-1 me-3"></div>

        <div className="col-1 ms-3"></div>
        <div className="menu-cont2-1 col-3">
          <div className="menu-cont2-Creamy-price">
            <div className="menu-cont2-creamy">Hot Chocolate</div>

            <div className="menu-cont2-price">$10</div>
          </div>
          <div className="menu-cont2-lorem">Lorem Ipsum is simply dummy text of
            the printing and typesetting industry. Lorem Ipsum has been the industry's</div>
        </div>
        <div className="menu-cont2-1 col-3">
          <div className="menu-cont2-Creamy-price">
            <div className="menu-cont2-creamy">Mushroom Risotto</div>

            <div className="menu-cont2-price">$10</div>
          </div>
          <div className="menu-cont2-lorem">Lorem Ipsum is simply dummy text of
            the printing and typesetting industry. Lorem Ipsum has been the industry's</div>
        </div>
        <div className="menu-cont2-1 col-3">
          <div className="menu-cont2-Creamy-price">
            <div className="menu-cont2-creamy">Barbecue Ribs</div>

            <div className="menu-cont2-price">$10</div>
          </div>
          <div className="menu-cont2-lorem">Lorem Ipsum is simply dummy text of
            the printing and typesetting industry. Lorem Ipsum has been the industry's</div>
        </div>
        <div className="col-1 me-3"></div>
        <div className="col-1 ms-3"></div>
        <div className="menu-cont2-1 col-3">
          <div className="menu-cont2-Creamy-price">
            <div className="menu-cont2-creamy">Lemon-Lime Soda</div>

            <div className="menu-cont2-price">$10</div>
          </div>
          <div className="menu-cont2-lorem">Lorem Ipsum is simply dummy text of
            the printing and typesetting industry. Lorem Ipsum has been the industry's</div>
        </div>
        <div className="menu-cont2-1 col-3">
          <div className="menu-cont2-Creamy-price">
            <div className="menu-cont2-creamy">Lobster Thermidor</div>

            <div className="menu-cont2-price">$10</div>
          </div>
          <div className="menu-cont2-lorem">Lorem Ipsum is simply dummy text of
            the printing and typesetting industry. Lorem Ipsum has been the industry's</div>
        </div>
        <div className="menu-cont2-1 col-3">
          <div className="menu-cont2-Creamy-price">
            <div className="menu-cont2-creamy">Roasted Turkey</div>

            <div className="menu-cont2-price">$10</div>
          </div>
          <div className="menu-cont2-lorem">Lorem Ipsum is simply dummy text of
            the printing and typesetting industry. Lorem Ipsum has been the industry's</div>
        </div>
        <div className="col-1 me-3"></div>
        <div className="col-1 ms-3"></div>
        <div className="menu-cont2-1 col-3">
          <div className="menu-cont2-Creamy-price">
            <div className="menu-cont2-creamy">Alcoholic beverages</div>

            <div className="menu-cont2-price">$10</div>
          </div>
          <div className="menu-cont2-lorem">Lorem Ipsum is simply dummy text of
            the printing and typesetting industry. Lorem Ipsum has been the industry's</div>
        </div>
        <div className="menu-cont2-1 col-3">
          <div className="menu-cont2-Creamy-price">
            <div className="menu-cont2-creamy">Beef Bourguignon</div>

            <div className="menu-cont2-price">$10</div>
          </div>
          <div className="menu-cont2-lorem">Lorem Ipsum is simply dummy text of
            the printing and typesetting industry. Lorem Ipsum has been the industry's</div>
        </div>
        <div className="menu-cont2-1 col-3">
          <div className="menu-cont2-Creamy-price">
            <div className="menu-cont2-creamy">Beef Stroganoff</div>

            <div className="menu-cont2-price">$10</div>
          </div>
          <div className="menu-cont2-lorem">Lorem Ipsum is simply dummy text of
            the printing and typesetting industry. Lorem Ipsum has been the industry's</div>
        </div>
        <div className="col-1 me-3"></div> */}
      </div>
    </div>
  )
}
