import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../Home/SecondHome.css';
import { auth,db } from '../../firebase';
import { addDoc, collection } from 'firebase/firestore';
import { v4 as uuidv4 } from 'uuid';
import logo from '../Auth/logo.png'


export default function SecondHome() {
  const [isOffcanvasOpen, setOffcanvasOpen] = useState(false);
  const [totalOrder, setTotalOrder] = useState(0);
  const uid = uuidv4();
  const [inputData,setInputData] = useState({
    province:"",
    senderName:"",
    senderPhone:"",
    recieverName:"",
    recieverPhone:"",
    size:"",
    kg:"",
    type:"",
    deliveryBy:"",
    cashBy:"",
  })


  const onChange = (e) => {
    setInputData((prevInputData) => ({
      ...prevInputData,
      [e.target.name]: e.target.value,
    }));
  };

  const navigate = useNavigate();

  //when input kg column Change value re-render this useEffect
  useEffect(()=>{
    setTotalOrder(calculateTotalOrder(inputData.kg))
  },[inputData.kg])

  const calculateTotalOrder = (newWeight) => {
    const ratePerkg = 0.50;
    const weightCost = newWeight * ratePerkg;
    return weightCost
  };

  const handleLogout = async () => {
    try {
      await auth.signOut();
      navigate('/'); // Use navigate instead of history.push
    } catch (error) {
      console.error('Error logging out:', error.message);
    }
  };


  const handleSubmit = async(e)=>{
    e.preventDefault();
    try{
        const trackRef = collection(db, "tracks");
        await addDoc(trackRef,{
            ...inputData,
            receptId:uid
        });
        alert('Booked Success');
        navigate('/Track')
    }catch(error){
        console.log(error);
    }
  }

  console.log(inputData);


  return (
     <div>
         {/* <!--=============== HEADER ===============-->*/}
        <header className ="header mt-3" id="header">
            <nav className ="nav container">
            
            <Link to="/" style={{ textDecoration: "none" }}>
                <img className="image" src={logo} alt="Logo" width= "160px"/>
            </Link>

                        <li className ="nav__item">
                            <Link to= "#" className ="nav__link ">Home</Link>
                        </li>

                        <li className ="nav__item">
                            <Link to="/Return" className ="nav__link">Return</Link>
                        </li>

                <div className="nav__link">
                <button onClick={handleLogout}>Logout</button>
               </div>

            </nav>
        </header>      
            {/* <!--=============== HOME ===============--> */}
        <div >
        <section className ="home section flex justify-start " id="home">
            <div className ="home__container container flex">
                <form onSubmit={handleSubmit} className ="home__data">
                    <div className='home__actionRow__2zr8E mb-4 flex justify-between'>
                    <div>
                    <label htmlFor="option">Delivery in </label>
                    <select name="province" onChange={onChange} value={inputData.province} className="outline-offset-0 outline-transparent">
                        <option value="Phnom Penh">Phnom Penh</option>
                        <option value="Kompot">Kompot</option>
                        <option value="Siem Reap">Siem Reap</option>
                        <option value="Kondal">Kondal</option>
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
                                <div className="flex mt-3">
                                    <input type="text" className="text-black text-xs"placeholder='sender name?' name="senderName" onChange={onChange} value={inputData.senderName} />
                                    <input type="text"  className="text-black text-xs" placeholder='Phone Number' name="senderPhone" onChange={onChange} value={inputData.senderPhone} />
                                </div>
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
                            <div>
                            <div className="flex mt-3">
                                    <input type="text" className="text-black text-xs"placeholder='reciever name?' name="recieverName" onChange={onChange} value={inputData.recieverName} />
                                    <input type="text"  className="text-black text-xs" placeholder='Phone Number' name="recieverPhone" onChange={onChange} value={inputData.recieverPhone} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>  
                <section className="text-sm mt-4 ">
        <h2 className="text-start">Item Details</h2>
        <div>
        <div>
         <div className="flex justify-between items-center mt-3">
            <select name="size" className="outline-offset-0 outline-transparent  bg-blue-100 p-1 rounded-md" onChange={onChange} value={inputData.size}>
                            <option value="">Choose size</option>
                            <option >S</option>
                            <option >M</option>
            </select>
            <div className=" bg-blue-100 rounded-md p-1">
            <label htmlFor="weight"></label> 
            <input type="number" name="kg" value={inputData.kg} onChange={onChange} />
            <label htmlFor="kilo">kg</label>
           </div>
           <div>
           <select name="type" onChange={onChange} value={inputData.type} className="outline-offset-0 outline-transparent bg-blue-100 p-1 rounded-md">
                            <option value="">Select item type(Optional)</option>
                            <option value="Food">Food</option>
                            <option value="Clothes">Clothes</option>
                            <option value="Electronics">Electronics</option>
                            <option value="Other">Other</option>
            </select>
           </div>
        <div>
            <select name="deliveryBy" value={inputData.deliveryBy} onChange={onChange} className="outline-offset-0 outline-transparent bg-blue-100 p-1 rounded-md">
                            <option value="">Choose delivery options</option>
                            <option value="Tuk Tuk">Tuk Tuk</option>
                            <option value="Moto">Moto</option>
        </select>
        </div>
        <div>
            <select name="cashBy" value={inputData.cashBy} onChange={onChange} className="outline-offset-0 outline-transparent bg-blue-100 p-1 rounded-md">
            <option value="">Choose cash by options</option>
                            <option value="Recipiet">Cash by Recipiet</option>
                            <option value="Sender">Cash by Sender</option>
        </select>
        </div>
         </div>
        </div>
        </div>
        </section>     
        <div className="text-sm mt-4 flex ">
        <div>
      <p>Total Order: ${totalOrder.toFixed(2)}</p>
    </div>
        </div>   
        <div>
            <button type="submit" className ="book mt-4 text-sm text-white">{" "} Book Delivery</button>
        </div>     
        </form>   
        </div>
    </section>
   
        </div>
    </div>
     
  )
}
