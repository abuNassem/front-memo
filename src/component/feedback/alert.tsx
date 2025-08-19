
import {Alert, IconButton} from '@mui/material'
import { useContext } from 'react'
import { MdClose } from 'react-icons/md'
import { api } from '../../template/layout'


const MyAlert = () => {
    const context=useContext(api)
  return (
    <>
    {context?.alert.isOpen?
         <div className='fixed z-[100] top-0 w-full h-[300]' style={{backgroundColor:'green'}}>
        <Alert severity={context.alert.func} sx={{fontWeight:'bold',fontSize:'18px'}}>{context.alert.textAlert} </Alert>
        <IconButton onClick={()=>context.setAlert(prev=>({...prev,isOpen:false}))} sx={{position:'absolute',top:5,right:3}}><MdClose/></IconButton>
    </div>:null
    }
    </>
    
   
  )
}

export default MyAlert