import { useContext, useState } from 'react'
import { FaLock, FaRegEye } from 'react-icons/fa6'
import { MdOutlineMailOutline } from "react-icons/md"
import { GoEyeClosed } from "react-icons/go"
import { api } from '../../template/layout'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import getAllFavo from '../../store/favority/act/getallfavo'
import getChoosen from '../../store/cart/act/actGetChosen'
import { useAppDispatch } from '../../store/categories/hooks'

const LoginForm = () => {
  const [isBoldEmail, setIsBoldEmail] = useState(false)
  const [isBoldPassword, setIsBoldPassword] = useState(false)
  const [visible, setVisible] = useState(false)
  const [error, setError] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')

  const navigate = useNavigate()
  const context = useContext(api)
  const dispatch = useAppDispatch()

  // Login Handler
  const login = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!email.trim()) {
      return setError('Enter your email')
    }
    if (!password.trim()) {
      return setError('Enter your password')
    }

    try {
      const res = await axios.post('https://back-last.onrender.com/login', {
        email,
        passWord: password
      })

      setError('')
      localStorage.setItem('email', res.data.user.email)
      localStorage.setItem('userName', res.data.user.userName)

      dispatch(getAllFavo(res.data.user.email))
      dispatch(getChoosen(''))

      context?.setAlert(prev => ({
        ...prev,
        isOpen: true,
        func: 'success',
        textAlert: res.data.message
      }))

      setTimeout(() => navigate('/'), 1000)

    } catch (err) {
      setError(err?.response?.data?.message || 'Login failed')
    }
  }

  return (
    <form onSubmit={login} className='flex flex-col items-center gap-[40px]'>

      {/* Email Field */}
      <div className='flex justify-center items-center text-white w-full relative'>
        <MdOutlineMailOutline
          className='absolute text-2xl ms-2 start-[8%]'
          style={{ color: isBoldEmail ? '#fff' : 'rgba(90, 90, 90, 1)' }}
        />
        <input
          type='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onFocus={() => setIsBoldEmail(true)}
          onBlur={() => setIsBoldEmail(false)}
          className='w-[85%] h-[45px] bg-zinc-800 hover:bg-zinc-700 ps-[40px] duration-500 
            focus:bg-zinc-900 rounded-md border-2 border-zinc-100/50 outline-none focus:border-zinc-100'
          placeholder='Email'
        />
      </div>

      {/* Password Field */}
      <div className='flex justify-center items-center text-white w-full relative'>
        <FaLock
          className='absolute text-[20px] ms-2 start-[8%]'
          style={{ color: isBoldPassword ? '#fff' : 'rgba(90, 90, 90, 1)' }}
        />
        <input
          type={visible ? 'text' : 'password'}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onFocus={() => setIsBoldPassword(true)}
          onBlur={() => setIsBoldPassword(false)}
          className='w-[85%] h-[45px] bg-zinc-800 hover:bg-zinc-700 ps-[40px] duration-500 
            focus:bg-zinc-900 rounded-md border-2 border-zinc-100/50 outline-none focus:border-zinc-100'
          placeholder='Password'
        />
        <div className='absolute end-[10%] cursor-pointer'>
          {visible ? (
            <FaRegEye
              className='text-2xl'
              onClick={() => setVisible(false)}
              style={{ color: isBoldPassword ? '#fff' : 'rgba(90, 90, 90, 1)' }}
            />
          ) : (
            <GoEyeClosed
              className='text-2xl'
              onClick={() => setVisible(true)}
              style={{ color: isBoldPassword ? '#fff' : 'rgba(90, 90, 90, 1)' }}
            />
          )}
        </div>
      </div>

      {/* Error Message */}
      {error && (
        <div className='w-full rounded-lg border-2 border-zinc-700/50 text-white 
          bg-red-800/50 h-[45px] flex items-center justify-center'>
          {error}
        </div>
      )}

      {/* Submit Button */}
      <button
        type='submit'
        className='w-[60%] h-[45px] border-2 border-zinc-100/50 hover:border-zinc-100 
          duration-500 font-bold text-zinc-100/50 hover:text-zinc-100 hover:rounded-[30px]'
      >
        Login
      </button>
    </form>
  )
}

export default LoginForm
