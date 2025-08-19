import React, { useContext, useState } from 'react'
import { FaLock, FaRegEye } from 'react-icons/fa6';
import { MdOutlineMailOutline } from "react-icons/md";
import { GoEyeClosed } from "react-icons/go";
import { api } from '../../template/layout';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import getAllFavo from '../../store/favority/act/getallfavo';
import getChoosen from '../../store/cart/act/actGetChosen';
import { useAppDispatch } from '../../store/categories/hooks';
const LoginForm = () => {
     const [isboldEmail, setIsBoldEmail] = useState(false)
  const [isboldPassword, setIsBoldPassword] = useState(false)
  const [visable, setVisable] = useState(false)
  const [error, setErorr] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const navigate=useNavigate()
  const context=useContext(api)
  const dispatch=useAppDispatch()
//    for submit
  const login = async(t) => {
    t.preventDefault()
    if(!email.length){
      setErorr('enter your email')
    }else if(!password.length){
      setErorr('enter your password')
    }else{
       axios.post('http://localhost:3000/login',{passWord:password,email})
    .then(res=>{
      setErorr('')
      localStorage.setItem('email',res.data.user.email)
            localStorage.setItem('userName',res.data.user.userName)
            dispatch(getAllFavo(res.data.user.email))
            dispatch(getChoosen(''))
             
     
      setTimeout(() => {
        navigate('/')
      }, 1000);
      context?.setAlert(prev=>({...prev,isOpen:true,func:'success',textAlert:res.data.message}))
     
    })
    .catch(error=>{
      setErorr(error.response.data.message)
    })
    }
   
}
  return (
  <form onSubmit={login} className='flex flex-col  items-center gap-[40px]'>
        <div className='flex justify-center items-center text-white w-full relative'>
          <MdOutlineMailOutline className='text-white absolute text-2xl ms-2 start-[8%]' style={{ color: isboldEmail ? 'rgba(255, 255, 255, 1)' : 'rgba(90, 90, 90, 1)' }} />
          <input onChange={(i) => setEmail(i.currentTarget.value)} onFocus={() => { setIsBoldEmail(true) }} onBlur={() => { setIsBoldEmail(false) }} type='text' className='w-[85%] h-[45px] bg-zinc-800 hover:bg-zinc-700 ps-[40px] duration-[0.5s] focus:bg-zinc-900 rounded-md border-2 border-zinc-100/50 outline-none focus:border-zinc-100' placeholder='Email' />

        </div>
        <div className='flex justify-center items-center text-white w-full relative'>
          <FaLock className='text-white absolute text-[20px] ms-2 start-[8%]' style={{ color: isboldPassword ? 'rgba(255, 255, 255, 1)' : 'rgba(90, 90, 90, 1)' }} />
          <input onChange={(i) => setPassword(i.currentTarget.value)} onFocus={() => { setIsBoldPassword(true) }} onBlur={() => { setIsBoldPassword(false) }} type={visable ? 'text' : 'password'} className='w-[85%] h-[45px] bg-zinc-800 hover:bg-zinc-700 ps-[40px] duration-[0.5s] focus:bg-zinc-900 rounded-md border-2 border-zinc-100/50 outline-none focus:border-zinc-100' placeholder='Password' />
          <div className='absolute end-[10%]'>
            <GoEyeClosed className='text-2xl cursor-pointer' onClick={() => setVisable(true)} style={{ display: visable ? 'none' : 'block', color: isboldPassword ? 'rgba(255, 255, 255, 1)' : 'rgba(90, 90, 90, 1)' }} />
            <FaRegEye className='text-2xl cursor-pointer' onClick={() => setVisable(false)} style={{ display: visable ? 'block' : 'none', color: isboldPassword ? 'rgba(255, 255, 255, 1)' : 'rgba(90, 90, 90, 1)' }} />
          </div>


        </div>
        {error ?
          <div className='w-full rounded-lg border-2 border-zinc-700/50 text-white  bg-red-800/50 h-[45px] flex items-center justify-center'>
            {error}
          </div> : null
        }

        <button  className='w-[60%] h-[45px] border-2 border-zinc-100/50 hover:border-zinc-100 duration-[0.5s] font-bold text-zinc-100/50 hover:text-zinc-100  hover:rounded-[30px]'>login</button>
     </form>
  )
}

export default LoginForm