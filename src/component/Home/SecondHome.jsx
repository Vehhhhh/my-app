import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import '../Home/SecondHome.css'

export default function SecondHome() {
     const [isOffcanvasOpen, setOffcanvasOpen] = useState(false);
     const [distance, setDistance] = useState(0);
     const [totalOrder, setTotalOrder] = useState(0);

     const handleDistanceChange = (event) => {
     const newDistance = parseFloat(event.target.value);
     setDistance(newDistance);
     calculateTotalOrder(newDistance);
  };

  const calculateTotalOrder = (newDistance) => {
    const costPerKm = 1.00;
    const newTotalOrder = newDistance * costPerKm;
    setTotalOrder(newTotalOrder);
  };
  return (
     <div>
         {/* <!--=============== HEADER ===============-->*/}
        <header className ="header mt-3" id="header">
            <nav className ="nav container">
            

                <div className ="nav__menu" id="nav-menu">
                    <ul className ="nav__list">
                        <li className ="nav__item">
                            <a href="#home" className ="nav__link ">Home</a>
                        </li>
                        <li className ="nav__item">
                            <Link to="/Return" className ="nav__link">Return</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>      
            {/* <!--=============== HOME ===============--> */}
        <div >
        <section className ="home section flex justify-start " id="home">
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
                    </div>
                <div className ="ant-row-flex styles__bookOrderWidget___1orvu">
                    <div className="deli-destination flex items-center justify-between">
                        <div className ="ant-col styles__poiField___1MV95 styles__pickUp___3yfVZ ant-col-xs-22 ant-col-md-6">
                            <div className ="styles__location___3el4p">
                                <button
                                    className=""
                                    type="button"
                                    data-bs-toggle="offcanvas"
                                    data-bs-target="#offcanvasWithBothOptions"
                                    aria-controls="offcanvasWithBothOptions"
                                    onClick={() => setOffcanvasOpen(!isOffcanvasOpen)}
                                >
                                    Delivery from.......

                                </button>
                                                          
                                <div
                                    className={`offcanvas offcanvas-start ${isOffcanvasOpen ? 'show' : ''}`}
                                    data-bs-scroll="true"
                                    tabIndex="-1"
                                    id="offcanvasWithBothOptions"
                                    aria-labelledby="offcanvasWithBothOptionsLabel">
                                    <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3908.7706603776874!2d104.88811507486918!3d11.568291888632734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3109519fe4077d69%3A0x20138e822e434660!2sRUPP%20(Royal%20University%20of%20Phnom%20Penh)!5e0!3m2!1sen!2skh!4v1704729544607!5m2!1sen!2skh" 
                                    width="600" 
                                    height="450" 
                                    style={{border:0}}
                                    allowfullscreen="" 
                                    loading="lazy" 
                                    referrerpolicy="no-referrer-when-downgrade">
                                    </iframe>
                                    <button type="button" className="w-full justify-center rounded-md border border-transparent bg-sky-400 py-2 px-2 mt-5 text-sm font-medium text-white shadow-sm hover:bg-opacity-75 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2 register-account-btn">
                                        <span>Confirm</span>
                                    </button>                                 
                                </div>
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
                            <button
                                    className=""
                                    type="button"
                                    data-bs-toggle="offcanvas"
                                    data-bs-target="#offcanvasWithBothOptions"
                                    aria-controls="offcanvasWithBothOptions"
                                    onClick={() => setOffcanvasOpen(!isOffcanvasOpen)}
                                >
                                    Delivery to.......

                                </button>
                                <div
                                    className={`offcanvas offcanvas-start hidden`}
                                    data-bs-scroll="true"
                                    tabIndex="-1"
                                    id="offcanvasWithBothOptions"
                                    aria-labelledby="offcanvasWithBothOptionsLabel">
                                    <iframe 
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3908.7706603776874!2d104.88811507486918!3d11.568291888632734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3109519fe4077d69%3A0x20138e822e434660!2sRUPP%20(Royal%20University%20of%20Phnom%20Penh)!5e0!3m2!1sen!2skh!4v1704729544607!5m2!1sen!2skh" 
                                    width="600" 
                                    height="450" 
                                    style={{border:0}}
                                    allowfullscreen="" 
                                    loading="lazy" 
                                    referrerpolicy="no-referrer-when-downgrade">
                                    </iframe>
                                    <button type="button" className="w-full justify-center rounded-md border border-transparent bg-sky-400 py-2 px-2 mt-5 text-sm font-medium text-white shadow-sm hover:bg-opacity-75 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2 register-account-btn">
                                        <span>Confirm</span>
                                    </button>
                                </div>
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
        <h2 className="text-start">Item Details</h2>
        <div>
        <form action="">
         <div className="flex justify-between items-center mt-3">
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
                            <option value="">Select item type(Optional)</option>
                            <option value="">Food</option>
                            <option value="">Clothes</option>
                            <option value="">Electronics</option>
                            <option value="">Other</option>
            </select>
           </div>
        <div>
            <select name="select" id="" className="outline-offset-0 outline-transparent bg-blue-100 p-1 rounded-md">
                            <option value="">Choose delivery options</option>
                            <option value="">Tuk Tuk</option>
                            <option value="">Moto</option>
        </select>
        </div>
        <div>
            <select name="select" id="" className="outline-offset-0 outline-transparent bg-blue-100 p-1 rounded-md">
                            <option value="">Cash by Recipiet</option>
                            <option value="">Cash by Sender</option>
        </select>
        </div>
         </div>
        </form>
        </div>
        </section>     
        <div className="text-sm mt-4 flex ">
            <p>Total Price: ${totalOrder.toFixed(2)}</p>
        </div>   
        <div>
            <button type="submit" className ="book mt-4 text-sm text-white">{" "} Book Delivery</button>
        </div>     
        </div>   
        </div>
    </section>
   
        </div>
    </div>
  )
}
