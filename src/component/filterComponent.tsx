import React, { useContext } from 'react'
import FilterForm from './forms/filterForm'
import { IconButton } from '@mui/material'
import { MdClose } from 'react-icons/md'
import { api } from '../template/layout'

const FilterComponenet = () => {
  const context=useContext(api)
  return (
    <div className='absolute  z-[100] w-[90%] start-[5%] top-0 rounded-xl h-auto lg:h-[200px] bg-zinc-700 text-white px-3 py-2'>
        <FilterForm/>
        <IconButton onClick={()=>context?.setFilterMode(false)} sx={{position:'absolute',right:0,top:0,color:'white','&:hover':{color:'rgba(0, 102, 255, 1)'}}}><MdClose/></IconButton>
    </div>

  )
}

export default FilterComponenet