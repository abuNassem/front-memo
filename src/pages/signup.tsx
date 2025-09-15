

import { Link } from 'react-router-dom';
import SignupForm from '../component/forms/signupForm';
import { FaHome } from 'react-icons/fa';
const SignUp = () => {
 
return (
  <div>
    <div className='w-[90%] md:w-[70%] lg:w-[45%] h-[90vh] mx-auto bg-zinc-900 rounded-md p-3 flex flex-col justify-between'>
      <div className='flex flex-col items-center relative'>
        <Link to={'/'} className='absolute text-zinc-100 text-lg start-0 '><FaHome/></Link>
        <h1 className='text-[25px] text-zinc-50'>Sigup <span className='text-sky-500'>memo shop</span></h1>
        <p className='text-zinc-400 text-sm mt-2'>if not have acount enter your information to have one .</p>
      </div>

      <SignupForm/>
     
           <p className='text-zinc-300 text-lg flex justify-center w-full'>have acount ? <Link to='/login' className='w-[50px] text-lg text-zinc-50 duration-[0.5s] text-center  hover:text-sky-600'>LogIn</Link></p>
     
    </div>

  </div>
)
}

export default SignUp