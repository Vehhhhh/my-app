import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, db } from "../../firebase";
import { collection, addDoc } from "firebase/firestore";
import { useState } from "react";

export default function Return() {
  const navigate = useNavigate();
  const [inputData, setInputData] = useState({
    senderName: "",
    phone: "",
    itemId: "",
    reason: "",
  });
  const [packages, setPackages] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const returnRef = collection(db, "returns");
      await addDoc(returnRef, {
        ...inputData,
        package: packages,
      });
      alert("Form filled success, waiting for returning");
      navigate("/schome");
    } catch (error) {
      console.log(error);
    }
  };

  const onChange = (e) => {
    setInputData({
      ...inputData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogout = async () => {
    try {
      await auth.signOut();
      navigate("/"); // Use navigate instead of history.push
    } catch (error) {
      console.error("Error logging out:", error.message);
    }
  };
  return (
    <div>
      {/* <!--=============== HEADER ===============-->*/}
      <header className="header mt-3" id="header">
        <nav className="nav container">
          <div className="nav__menu" id="nav-menu">
            <ul className="nav__list">
              <li className="nav__item">

                <Link to="/schome" className="nav__link ">
                  Booking
                </Link>
                
              </li>
            </ul>
          </div>

          <div className="nav__link">
            <button onClick={handleLogout}>Logout</button>
          </div>
        </nav>
      </header>
      <h1 className="mt-44 text-2xl font-bold">Return Package</h1>
      <div class="flex items-center justify-center mt-3">
        <div class="mx-auto w-full max-w-[550px] bg-white">
          <form>
            <div class="-mx-3 flex flex-wrap">
              <div class="w-full px-3">
                <div class="mb-3">
                  <input
                    type="text"
                    name="senderName"
                    onChange={onChange}
                    value={inputData.senderName}
                    placeholder="Recipient name"
                    required
                    class="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-3 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md label-return-package"
                  />
                </div>
                <div class="mb-3">
                  <input
                    type="text"
                    name="phone"
                    onChange={onChange}
                    value={inputData.phone}
                    placeholder="Phone number"
                    required
                    class="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-3 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md label-return-package"
                  />
                </div>
                <div class="mb-3">
                  <input
                    type="text"
                    name="itemId"
                    value={inputData.itemId}
                    onChange={onChange}
                    placeholder="Enter Items ID"
                    required
                    class="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-3 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md label-return-package"
                  />
                </div>
                <div class="mb-3">
                  <input
                    type="text"
                    name="reason"
                    onChange={onChange}
                    value={inputData.reason}
                    placeholder="Enter your reason"
                    required
                    class="w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-3 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md label-return-package"
                  />
                </div>
              </div>
            </div>
            <div class="mb-3">
              <div className="flex items-center mx-4 border border-[#e0e0e0]">
                <input
                  type="number"
                  name="packages"
                  onChange={(e) => setPackages(e.target.value)}
                  value={packages}
                  required
                  placeholder="How many package do you want to return?"
                  min="0"
                  class="w-full appearance-none rounded-md  bg-white py-2 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md label-return-package"
                />
                <p>Package</p>
              </div>
            </div>
            <div>
              <button
                onClick={handleSubmit}
                class="hover:shadow-form rounded-md bg-[#6A64F1] py-2 px-4 text-center text-base font-semibold text-white outline-none"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
