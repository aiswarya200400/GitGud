import React, { useState } from "react"; 
import { useNavigate } from "react-router-dom"; 
import BackgroundImage from "@/components/BackgroundImage"; 
import { AuroraBackground } from "@/components/ui/aurora-background"; 
import Navbar from "../components/ui/navbar";  

const LoginPage = () => {   
  console.log("LoginPage rendering");    
  const [email, setEmail] = useState("");   
  const [password, setPassword] = useState("");   
  const navigate = useNavigate();    
  
  const handleSubmit = (e) => {     
    e.preventDefault();     
    console.log("Login attempt with:", { email, password });
    
    // Navigate to ProblemEntryPage after login attempt
    navigate('/problems');
  };    
  
  return (     
    <div className="flex flex-col">       
      <Navbar />       
      <AuroraBackground>         
        {/* Remove the min-h-screen and bg-black since AuroraBackground handles that */}         
        <div className="z-10 flex w-full items-center justify-center px-4 py-8">           
          <div className="flex h-[85vh] w-full max-w-5xl shadow-xl rounded-xl overflow-hidden relative">                          
            {/* Left side - Background Image */}             
            <div className="hidden md:block w-1/2 h-full relative z-10">               
              <BackgroundImage />             
            </div>                          
            
            {/* Right side - Login Form with z-index */}             
            <div className="w-full md:w-1/2 bg-black bg-opacity-70 flex items-center justify-center p-6 z-10">               
              <div className="w-[90%] max-w-lg">                                  
                {/* Social Login Button */}                                  
                <h2 className="text-3xl font-semibold text-center text-white mt-4 mb-4">                   
                  Welcome Back!                 
                </h2>                 
                <p className="text-sm text-center text-gray-400 mb-6">                   
                  Login to continue                 
                </p>                                  
                
                <form onSubmit={handleSubmit}>                   
                  <div className="mb-3">                     
                    <label className="block text-xs text-gray-300 mb-1">Email</label>                     
                    <input                       
                      type="email"                       
                      value={email}                       
                      onChange={(e) => setEmail(e.target.value)}                       
                      className="w-full px-3 py-2 bg-black border border-gray-500 rounded-full text-white focus:ring-blue-500"                       
                      required                     
                    />                   
                  </div>                    
                  
                  <div className="mb-2">                     
                    <label className="block text-xs text-gray-300 mb-1">Password</label>                     
                    <input                       
                      type="password"                       
                      value={password}                       
                      onChange={(e) => setPassword(e.target.value)}                       
                      className="w-full px-3 py-2 bg-black border border-gray-500 rounded-full text-white focus:ring-blue-500"                       
                      required                     
                    />                   
                  </div>                    
                  
                  <div className="text-right mb-4">                     
                    <a href="#" className="text-xs text-blue-500 hover:underline">                       
                      Forgot password?                     
                    </a>                   
                  </div>                    
                  
                  <button                     
                    type="submit"                     
                    className="w-full py-2 text-black bg-gray-200 rounded-full text-sm font-semibold hover:bg-gray-300 transition cursor-pointer"                   
                  >                     
                    Sign In                   
                  </button>                 
                </form>                  
                
                <div className="mt-4 text-center text-xs text-gray-400 transition cursor-pointer">                   
                  Don't have an account?{" "}                   
                  <button                     
                    onClick={() => navigate("/signup")}                     
                    className="text-blue-500 hover:underline transition cursor-pointer"                   
                  >                     
                    Sign up                   
                  </button>                 
                </div>               
              </div>             
            </div>           
          </div>         
        </div>       
      </AuroraBackground>     
    </div>   
  ); 
};  

export default LoginPage;