import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

const Contact = () => {
    useEffect(()=>{
   const hash=window.location.hash.substring(1)
   console.log(hash)
   const ele=document.getElementById(hash)
   if(ele){
    ele.scrollIntoView({behavior:'smooth'})
   }
    },[])
  return (
    <div id='contact' className='bg-zinc-900 rounded-lg p-3 flex flex-col items-center gap-5 h-[400px] mx-auto'>
        <h1 className='text-white text-xl'>Contact us</h1>
      <div className='w-[95%] sm:w-[85%] flex flex-col items-center gap-3'>
        <form className='flex flex-col items-start w-full gap-3'>
            <input type='email' className='outline-none border-2  border-zinc-300 rounded-lg w-[80%] sm:w-[60%] h-[40px] ps-2 text-white' placeholder='your email'/>
            <textarea placeholder='your massage'  className='outline-none border-2 border-zinc-100 rounded-lg w-[50%] sm:w-[30%] ps-2 text-white'></textarea>
       <button className='w-[50%] sm:w-[30%] h-[40px]  mx-auto rounded-xl border-2 border-zinc-500  hover:border-zinc-100  text-zinc-500 hover:text-zinc-100 duration-[0.5s] cursor-pointer '>Send massage</button>
        </form>
      </div>
      
      <div  className='flex gap-4'>
        <Link to={'https://www.linkedin.com/in/qutaibah-mohamed-188162357/'}>
                       <button className=' h-[40px] px-2  mx-auto rounded-xl border-2 border-zinc-500  hover:border-zinc-100  text-zinc-500 hover:text-zinc-100 duration-[0.5s] cursor-pointer '>
                        Linked In
                        </button>

        </Link>
                              <Link to={'https://web.facebook.com/qutaibh.mohamd'}>
                              <button className=' h-[40px] px-2  mx-auto rounded-xl border-2 border-zinc-500  hover:border-zinc-100  text-zinc-500 hover:text-zinc-100 duration-[0.5s] cursor-pointer '>faceboock</button>
                              </Link>


      </div>
    </div>
  )
}

export default Contact
