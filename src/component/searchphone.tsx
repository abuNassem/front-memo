import { IconButton } from '@mui/material'
import  { useContext } from 'react'
import { FaSearch } from 'react-icons/fa'
import { MdClose } from 'react-icons/md'
import { api } from '../template/layout'
import { useAppDispatch, useAppSelector } from '../store/categories/hooks'
import { useLocation, useNavigate } from 'react-router-dom'
import { finding } from '../store/search&filter/search'
const SearchPhone = () => {
    const context=useContext(api)
    const location=useLocation()
  const dispatch=useAppDispatch()
  const navigate=useNavigate()
  const record=useAppSelector(state=>state.product.record)
      const searching = (value: string) => {
        if (record) {
          const input = value.trim().toLowerCase();

          if (input != "") {
         const filtered = record.filter((ele) =>
            ele.title.toLowerCase().includes(input)
          );
                    dispatch(finding(filtered));
          
          }else{
             dispatch(finding(null));
          }
    
         
    
          navigate("/resultsearch");
        }
      };
  return (
    <div className='w-[90%] mx-auto h-full flex items-center py-1'>
      <div className='w-[80%] h-[85%] flex items-center gap-3'><FaSearch className='text-sm'/>
      <input 
      type='text'
        onChange={(e) => searching(e.target.value)}
       className='outline-none border-0 h-[45px]  border-b-1 border-zinc-100'/>
       </div>
      <IconButton onClick={()=>{
        context?.setIsSearch(false)
        if(location.pathname=='/resultsearch'){
            navigate('/')
        }
      }
      }>
        <MdClose className='text-zinc-100 text-sm' />
      </IconButton>
    </div>
  )
}

export default SearchPhone
