import React from 'react';
import { FaUser } from "react-icons/fa";
import { IoIosLock } from "react-icons/io";

const Login = () => {
  return (
    <div className='wrapper'>
      <form action="">
        <h1 className='title'>LOGIN</h1>

        <div className="input-box">
          <FaUser className='icon'/>
          <input type="text" placeholder='Username' required />
        </div>

        <div className="input-box">
          <IoIosLock className='icon'/>
          <input type="password" placeholder='Password' required />
        </div>

        <div className="remember-forgot">
          <label><input type="checkbox" />Remember Me</label>
          <a href="http://google.com">Forgot Password</a>
        </div>

        <button type='submit'>Log In</button>

      </form>
    </div>
  );
};

export default Login;
