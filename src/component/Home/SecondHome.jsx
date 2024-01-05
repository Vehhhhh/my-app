import React from 'react'
import { Link } from 'react-router-dom'
import '../Home/SecondHome.css'

export default function SecondHome() {
    //function initMap() {
        // var map = new google.maps.Map(document.getElementById('map'), {
        //   center: {lat: 40.7128, lng: -74.0060},
        //   zoom: 12
        // });
     // }
  return (
     <div>
         {/* <!--=============== HEADER ===============-->*/}
        <header className ="header" id="header">
            <nav className ="nav container">
            <a href="#" className Name="nav__logo">
          <img src="../assets.Screenshot(262).png" alt="" width="160px" />
        </a>

                <div className ="nav__menu" id="nav-menu">
                    <ul className ="nav__list">
                        <li className ="nav__item">
                            <a href="#home" className ="nav__link active-link">Home</a>
                        </li>
                        <li className ="nav__item">
                            <Link to="/Report" className ="nav__link">Return</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>      
            {/* <!--=============== HOME ===============--> */}
        <div>
        <section className ="home section flex justify-start" id="home">
            <div className ="home__container container flex">
                <div className ="home__data">
                    <div className='home__actionRow__2zr8E mb-4 flex justify-between'>
                    <div>
                    <label htmlFor="option">Delivery in </label>
                    <select name="select" id="" className="outline-offset-0 outline-transparent">
                        <option value="">Phnom Penh</option>
                        <option value="">Kompot</option>
                        <option value="">Siem Reap</option>
                        <option value="">Kondal</option>
                    </select>
                    </div>
                    <a href="#" className="multiple">Multiple Booking</a>
                    </div>
                <div className ="ant-row-flex styles__bookOrderWidget___1orvu">
                    <div className="deli-destination flex items-center justify-between">
                        <div className ="ant-col styles__poiField___1MV95 styles__pickUp___3yfVZ ant-col-xs-22 ant-col-md-6">
                            <div className ="styles__location___3el4p">
                                <h6 className="text-start">Delivery from........</h6>
                            </div> 
                            <div >
                                <form action="" className="flex mt-3">
                                    <input type="text" className="text-black text-xs"placeholder='Who is sending?' name="" id="" />
                                    <input type="text"  className="text-black text-xs" placeholder='Phone Number' name="" id="" />
                                </form>
                            </div>
                        </div>
                        <div class="ant-col styles__swapField___S3fmc ant-col-xs-2 ant-col-md-1">
                            <span class="styles__swapIcon___2sM6A">
                                <i aria-label="icon: swap" title="" tabindex="-1" class="anticon anticon-swap">
                                    <svg viewBox="64 64 896 896" focusable="false" class="" data-icon="swap" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                                        <path d="M847.9 592H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h605.2L612.9 851c-4.1 5.2-.4 13 6.3 13h72.5c4.9 0 9.5-2.2 12.6-6.1l168.8-214.1c16.5-21 1.6-51.8-25.2-51.8zM872 356H266.8l144.3-183c4.1-5.2.4-13-6.3-13h-72.5c-4.9 0-9.5 2.2-12.6 6.1L150.9 380.2c-16.5 21-1.6 51.8 25.1 51.8h696c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"></path>
                                    </svg>
                                </i>
                            </span>
                        </div>
                        <div className ="ant-col styles__poiField___1MV95 styles__dropOff___2jYMB ant-col-xs-24 ant-col-md-6">
                            <div className ="styles__location___3el4p">
                                <h6 className="text-start"> Delivery to........ </h6>
                            </div>
                            <div className="">
                                <form action="" className="flex mt-3">
                                    <input type="text" className="text-black text-xs" name="" placeholder='Recipient name' id="" />
                                    <input type="text" name="" className="text-black text-xs" placeholder='Phone Number' id="" />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>  
                <section className="text-sm mt-4 ">
        <h2 className="text-start">item Details</h2>
        <div>
        <form action="">
         <div className="flex justify-between items-center mt-5">
            <select name="select" id="" className="outline-offset-0 outline-transparent bg-blue-100 p-1 rounded-md">
                            <option value="">Choose size</option>
                            <option value="">S</option>
                            <option value="">M</option>
            </select>
           <div className=" w-fit bg-blue-100 rounded-md p-1">
                <input type="number" name="" className="outline-none bg-blue-100 rounded-md" placeholder='' id="" />
                <label htmlFor="">Kg</label>
           </div>
           <div>
           <select name="select" id="" className="outline-offset-0 outline-transparent bg-blue-100 p-1 rounded-md">
                            <option value="">Choose size</option>
                            <option value="">S</option>
                            <option value="">M</option>
            </select>
           </div>
        <div>
            <select name="select" id="" className="outline-offset-0 outline-transparent bg-blue-100 p-1 rounded-md">
                            <option value="">Choose size</option>
                            <option value="">S</option>
                            <option value="">M</option>
        </select>
        </div>
        <div>
            <select name="select" id="" className="outline-offset-0 outline-transparent bg-blue-100 p-1 rounded-md">
                            <option value="">Choose size</option>
                            <option value="">S</option>
                            <option value="">M</option>
        </select>
        </div>
         </div>
        </form>
        </div>
        </section>       
        </div>   
        </div>
    </section>
   
        </div>
    </div>
  )
}
