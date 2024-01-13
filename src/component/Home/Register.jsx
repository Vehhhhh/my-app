import React, { useState } from 'react'
import { doc, setDoc } from 'firebase/firestore';
import { db } from '../../firebase'
import { useNavigate } from 'react-router-dom';


export default function Register() {
    const navigate = useNavigate();
  const [registrationSuccess, setRegistrationSuccess] = useState(false);

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirm_password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Validation checks
    // if (!formData.username || !formData.email || !formData.password || !formData.confirm_password) {
    //   alert('Please fill in all the fields.');
    //   return;
    // }
  
    if (formData.password !== formData.confirm_password) {
      alert('Passwords do not match.');
      return;
    }
  
    try {
      // Add data to Firestore collection
      const userRef = doc(db, 'signup', formData.email);
      await setDoc(userRef, formData);
  
      // Update state to indicate successful registration
      setRegistrationSuccess(true);
  
      // Reset the form data after submission
      setFormData({
        username: '',
        email: '',
        password: '',
        confirm_password: '',
      });
  
      console.log('User data added to Firestore successfully!');
    } catch (error) {
      console.error('Error adding user data to Firestore:', error);
    }
  };
  

  // Check if registration was successful before navigating
  if (registrationSuccess) {
    navigate('/schome');
  }
  return (
    <div className ="bg-gray-100 flex h-screen items-center justify-center px-4 sm:px-6 lg:px-8">
    <div className ="w-full max-w-md space-y-8">
        <div className ="bg-white shadow-md rounded-md p-6">

            <img className ="mx-auto h-12 w-auto" src="https://www.svgrepo.com/show/499664/user-happy.svg" alt="" />

            <h2 className ="my-3 text-center text-3xl font-bold tracking-tight text-gray-900">
                Register for an account
            </h2>


            <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium text-gray-700 content-start"
              >
                User Name
              </label>
              <div className="mt-1">
                <input
                  name="user"
                  type="user"
                  placeholder="Enter your name"
                  required
                  className="px-2 py-3 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm"
                  onChange={handleChange}
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 content-start"
              >
                Email
              </label>
              <div className="mt-1">
                <input
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  required
                  className="px-2 py-3 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm"
                  onChange={handleChange}
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 content-start"
              >
                Password
              </label>
              <div className="mt-1">
                <input
                  name="password"
                  type="password"
                  placeholder="Enter your password"
                  required
                  className="px-2 py-3 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm"
                  onChange={handleChange}
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="confirm_password"
                className="block text-sm font-medium text-gray-700 content-start"
              >
                Confirm Password
              </label>
              <div className="mt-1">
                <input
                  name="confirm_password"
                  type="password"
                  placeholder="Confirm your password"
                  required
                  className="px-2 py-3 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm"
                  onChange={handleChange}
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md border border-transparent bg-sky-400 py-2 px-2 text-sm font-medium text-white shadow-sm hover:bg-opacity-75 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2 register-account-btn"
              >
                Register Account
              </button>
            </div>
          </form>
        </div>
    </div>
</div>
  )
}
