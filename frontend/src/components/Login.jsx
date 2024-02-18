import React, { useState } from 'react'
import {Input} from "@nextui-org/react";
import {EyeFilledIcon} from "./EyeFilledIcon";
import {EyeSlashFilledIcon} from "./EyeSlashFilledIcon ";
import {useNavigate} from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';
function Login() {
    const [isVisible, setIsVisible] = React.useState(false);
    const toggleVisibility = () => setIsVisible(!isVisible);
    const [email, setEmail] = useState('');
    const [password,setPassword] = useState("");

    const handleChangePassword = (event) => {
        setPassword(event.target.value);
    }
    const handleChange = (event) => {
      setEmail(event.target.value);
    };
    const navigate = useNavigate();
  
    const handleSubmit = (e)=>{
    e.preventDefault();
    const user = {
        email: email,
        password: password
    }
    axios.post('http://localhost:3000/login', user)
    .then(result=>{
      console.log(result)
      if (result.data === "Login Success"){
        navigate('/home')
      }
      else {
        navigate("/signup")
        alert("You are not registered, please register first.")
      }
    })
    .catch(err=>console.log(err))
    
   }

    return (
    <div className='h-screen w-full bg-[#10111E] text-white flex justify-center items-center'>
      <div className='bg-[#161725] px-10 py-16 w-[28vw]  rounded-xl'>
        <div className='font-bold text-3xl mb-12 '>
            Log In
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
      value={password}
      onChange={handleChangePassword}
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
            <button className='w-full rounded-3xl text-white bg-[#e70f2fce] text-lg font-bold px-6 py-4 text-center' onClick={handleSubmit} >
                Log In
            </button>
        </div>

        <div className='flex justify-between items-center'>
            <div>
                <p>Want to make an account ?</p>
            </div>
            <div className='text-[#e70f2cf4]'>
                <Link to={'/signup'}>Sign up</Link>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Login
