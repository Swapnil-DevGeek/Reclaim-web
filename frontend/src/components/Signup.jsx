import React, { useState } from 'react'
import {Input} from "@nextui-org/react";
import {EyeFilledIcon} from "./EyeFilledIcon";
import {EyeSlashFilledIcon} from "./EyeSlashFilledIcon ";
import { Link } from 'react-router-dom';
import axios from 'axios';

import { useNavigate } from 'react-router-dom';


function Signup() {
    const navigate = useNavigate();
    const [isVisible, setIsVisible] = React.useState(false);
    const toggleVisibility = () => setIsVisible(!isVisible);
    const [email, setEmail] = useState('');
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");

    const handleChangePassword = (e)=>{
      setPassword(e.target.value);
    }

    const handleChange = (event) => {
      setEmail(event.target.value);
    };

    const handleChangeUsername = (event)=>{
        setUsername(event.target.value);
    }
    const handleSubmit = (e)=>{
      e.preventDefault();
      const user = {
          username: username,
          email: email,
          password: password
    }
    axios.post('http://localhost:3000/register', user)
    .then(result=>{
      console.log(result)
      if(result.data === "User Created"){
        alert("Registered Successfully")
        navigate("/login")
      }
      else{
        alert("Registration Failed")
      }
     
    })

    .catch(err=>console.log(err))
  }

    

    return (
    <div className='h-screen w-full bg-[#10111E] text-white flex justify-center items-center'>
      <div className='bg-[#161725] px-10 py-16 w-[28vw]  rounded-xl'>
        <div className='font-bold text-3xl mb-12 '>
            Sign Up
        </div>

        <div className='mb-6'>
        <Input
            isClearable
            type="text"
            label="Username"
            variant="bordered"
            placeholder="Enter your username"
            onChange={handleChangeUsername}
            value={username}
            onClear={() => setUsername('')}
            required
            className="w-full"
        />
        </div>

        <div className='mb-6'>
        <Input
            isClearable
            type="email"
            label="Email"
            variant="bordered"
            placeholder="Enter your email"
            onChange={handleChange}
            value={email}
            onClear={() => setEmail('')}
            required
            className="w-full"
        />
        </div>

        <div className='mb-12'>
        <Input
      label="Password"
      variant="bordered"
      placeholder="Enter your password"
      onChange = {handleChangePassword}
      value={password}
      endContent={
        <button className="focus:outline-none" type="button" onClick={toggleVisibility}>
          {isVisible ? (
            <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
          ) : (
            <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
          )}
        </button>
      }
      type={isVisible ? "text" : "password"}
      className="w-full "
    />
        </div>

        <div className='mb-16'>
            <button className='w-full rounded-3xl text-white bg-[#e70f2fce] text-lg font-bold px-6 py-4 text-center'onClick={handleSubmit} >
                Sign up
            </button>
        </div>

        <div className='flex justify-between items-center'>
            <div>
                <p>Already have an account?</p>
            </div>
            <div className='text-[#e70f2cf4]'>
                <Link to={'/login'}>Log In</Link>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Signup
