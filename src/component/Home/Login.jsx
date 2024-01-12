import React  , {useState} from "react";
import "../Home/Home.css";
import { doc, setDoc } from 'firebase/firestore';
import { db } from '../../firebase'
import { useNavigate } from 'react-router-dom';


export default function Login() {
  const navigate = useNavigate();
  const [loginSuccess, setLoginSuccess] = useState(false);

  const [formData, setFormData] = useState({
    email: '',
    password: '',
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
    if ( !formData.email || !formData.password ) {
      alert('Please fill in all the fields.');
      return;
    }
  
    // if (formData.password !== formData.confirm_password) {
    //   alert('Passwords do not match.');
    //   return;
    // }
  
    try {
      // Add data to Firestore collection
      const userRef = doc(db, 'signin', formData.email);
      await setDoc(userRef, formData);
  
      // Update state to indicate successful registration
      setLoginSuccess(true);
  
      // Reset the form data after submission
      setFormData({
        email: '',
        password: '',
      });
  
      console.log('User data added to Firestore successfully!');
    } catch (error) {
      console.error('Error adding user data to Firestore:', error);
    }
  };
  

  // Check if registration was successful before navigating
  if (loginSuccess) {
    navigate('/schome');
  }
  return (
    <section className="py-26 bg-white">
      <div className="container px-4 mx-auto">
        <div className="max-w-lg mx-auto">
          <div className="text-center mb-8">
            <a className="inline-block mx-auto mb-6" href="#">
              <img src="nigodo-assets/logo-icon-nigodo.svg" alt="" />
            </a>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-2">Login</h2>
          </div>
          <form className="space-y-6" onSubmit={handleSubmit}>

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

            <div className="flex flex-wrap -mx-4 mb-6 items-center justify-between">
              <div className="w-full lg:w-auto px-4 mb-4 lg:mb-0">
                <label for="">
                  <input type="checkbox" />
                  <span className="ml-1 ">Remember me</span>
                </label>
              </div>
              <div className="w-full lg:w-auto px-4">
                <a className="inline-block hover:underline" href="#">
                  Forgot your password?
                </a>
              </div>
            </div>
            <button className="inline-block w-full py-2 px-4 mb-6 text-center text-lg leading-6 text-white font-extrabold bg-indigo-800 hover:bg-indigo-900 border-3 border-indigo-900 shadow rounded transition duration-200 submit-login-btn">
              {" "}
              Login
            </button>
            <p className="text-center">
              Don&rsquo;t have an account?{" "}
              <a className="text-red-500 hover:underline" href="/register">
                Register
              </a>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
