import { FaHome } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";

import { Link } from 'react-router-dom';
import LoginForm from '../component/forms/loginForm';
const Login = () => {
 const handlAuth=()=>{
window.open("https://backmemo.onrender.com/auth/google", "_self");
 }
 
 


return (
  <div>
    <div className='w-[90%] md:w-[70%] lg:w-[45%] h-[90vh] mx-auto bg-zinc-900 rounded-md p-3 flex flex-col justify-between'>
      <div className='flex flex-col items-center relative'>
                <Link to={'/'} className='absolute text-zinc-100 text-lg start-0 '><FaHome/></Link>
        
        <h1 className='text-[25px] text-zinc-50'>login <span className='text-sky-500'>memo shop</span></h1>
        <p className='text-zinc-400 text-sm mt-2'>welcom in our shop enjoy</p>
      </div>
      <LoginForm/>
      <div className='flex justify-center px-4 w-[70%] sm:w-[50%] mx-auto mt-5'>
        <button onClick={handlAuth} className='w-[80%] h-[40px] border-2 border-zinc-50/50 hover:border-zinc-50 duration-[0.5s] rounded-lg text-zinc-50/50 hover:text-zinc-50 flex items-center justify-center'><FaGoogle className='text-[22px]' /></button>

      </div>
      <p className='text-zinc-300 text-lg flex justify-center w-full'>if not have acount            <Link to='/signup' className='w-[50px] text-lg text-zinc-50 duration-[0.5s] text-center  hover:text-sky-600'>SignUp</Link></p>

    </div>

  </div>
)
}

export default Login