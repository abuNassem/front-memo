import React, { useEffect } from 'react'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import { useAppDispatch, useAppSelector } from '../store/categories/hooks';
import { FaHeart } from 'react-icons/fa6';
import actDeleteFavority from '../store/favority/act/actdeletefavority';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import getAllFavo from '../store/favority/act/actgetallfavo';

const Favority = () => {
    const favority=useAppSelector(state=>state.favority.favorities)
    const dispatch=useAppDispatch()
    const location=useLocation()
    const navigate=useNavigate()
    useEffect(()=>{
      if(!favority.length && location.pathname=='/favority'){
        navigate('/')
      }
    },[favority])

  return (
    <div className='flex justify-center'>
     <ImageList sx={{ width:'80%', height:'90vh', }}>
      <ImageListItem key="Subheader" cols={2}>
        <ListSubheader component="div">Favorities</ListSubheader>
      </ImageListItem>
      <div className='h-[80vh]'>
{favority.map((item) => (
        <ImageListItem key={item.img}>
          <Link to={`/product#${item._id}`}>
          
          
          <img
            srcSet={`/api/${item.img}`}
            src={`/api/${item.img}`}
            alt={item.title}
            loading="lazy"
          />
          </Link>
          <ImageListItemBar
            title={item.title}
            subtitle={item.title}
            actionIcon={
              <IconButton
                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                aria-label={`info about ${item.title}`}
              >
               <div>
                          <FaHeart
                            className="text-red-500 cursor-pointer"
                            onClick={async () => {
                              
                              await dispatch(actDeleteFavority(item.owner));
                              await dispatch(getAllFavo());
                              
                            }}
                          />
                        
                       
                      </div>
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
      </div>
      
    </ImageList>
    </div>
  )
}

export default Favority
