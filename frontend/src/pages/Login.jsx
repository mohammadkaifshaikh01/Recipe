import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";




const Login = ({setIsLoggedIn}) => {
  const navigate = useNavigate();
  
  const [email ,setEmail ] = useState("")
  const [password ,setPassword ] = useState("")

  const handleSubmit = async (e) =>{
    e.preventDefault()
    const userData = {email,password}
    if(!email || !password){
      toast.error("Please fill in all fields");
            return;

    }
    console.log(userData)
    try {
      const response = await axios.post('http://localhost:5000/login',userData);
      console.log(response.data)
      localStorage.setItem("isLoggedIn" , "true")
      setIsLoggedIn(true)
      localStorage.setItem("isLogged", "true")
         toast.success("Login Successfull !");

         setTimeout(() => navigate("/"), 2000);
    } catch (error) {
      console.error(error)
       toast.error(
              error.response?.data?.message || "Login failed! Please try again."
            );
      
    }
  }
  return (
    <>
      {/* <nav className="bg-blue-600 p-4 text-white flex justify-between items-center shadow-lg">
      {/* <h1 onClick={()=>navigate("/")} className="text-2xl font-bold tracking-wide cursor-pointer">MyApp</h1> */}
    
    {/* </nav> */} 
  <div className="flex justify-center items-center h-[60vh] mt-20 ">
      <div className="w-[550px] bg-white shadow-lg rounded-xl overflow-hidden">
        {/* Header */}
        <div className="text-center py-6 bg-gradient-to-tr from-cyan-600 to-cyan-300 text-white shadow-md">
          <h3 className="text-2xl font-semibold">Hello, Welcome Back</h3>
        </div>

        {/* Form Fields */}
        <form  onSubmit={handleSubmit}>
        <div className="p-6 flex flex-col gap-6">
          <div className="">
          <label className=" left-4 top-3 text-gray-500 text-sm peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-cyan-500 transition-all">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              className="peer w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-cyan-500 outline-none"
              placeholder=" Enter Your Email ... "
            />
            
          </div>

          <div className="">
          <label className=" left-4 top-3  text-gray-500 text-sm peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-cyan-500 transition-all">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
              className="peer w-full px-4 py-4 border border-gray-300 rounded-md focus:ring-2 focus:ring-cyan-500 outline-none"
              placeholder=" Enter Your Password "
            />
           
          
          </div>
          <button type='submit' className="w-60 cursor-pointer bg-gradient-to-tr from-cyan-600 to-cyan-400 text-white py-3 rounded-md font-bold text-sm shadow-md hover:shadow-lg transition">
            Log In
          </button>
        </div>
</form>
        {/* Button & Link */}
        <div className="px-6 pb-6">
         

          <p className="mt-4 text-center text-sm text-gray-600">
            Don't have an account? 
            <button onClick={() => navigate("/signup")} className="ml-1 font-bold text-cyan-500 cursor-pointer hover:underline">
              Sign Up
            </button>
          </p>
        </div>
      </div>

    </div>
     <ToastContainer
            position="top-center"
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick={false}
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
            
          />

   
    </>
  )
}

export default Login

