import { Card, Typography } from '@mui/material'
import React, { useContext } from 'react'
import { api } from '../../template/layout'

const Sure = () => {
  const context = useContext(api)
  const running=()=>{
    if(context?.target?.func){
    context.target.func()
    }
  }
  return (
    <div onClick={() => { context?.setIsSure(false) }}
      className='fixed w-full h-full bg-zinc-800/50 top-0 z-[40] ' style={{ display: context?.isSure ? 'block' : 'none' }}>
      <Card sx={{ backgroundColor: 'rgba(248, 248, 248, 1)', width: '350px', height: '200px', mx: 'auto', mt: '200px', padding: '10px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <Typography variant='h6'>{context?.target?.name}</Typography>
        <div className='flex gap-2 justify-end'>
          <button className='bg-zinc-800 hover:bg-zinc-600 text-sm font-bold text-white px-3  rounded-md h-[30px]'
            onClick={() => { context?.setIsSure(false) }}
          >concel</button>
          <button className='bg-zinc-800 hover:bg-zinc-600 text-sm font-bold text-white px-3 h-[30px] rounded-md'
            onClick={() =>running()}
          >continue</button>

        </div>
      </Card>
    </div>
  )
}

export default Sure