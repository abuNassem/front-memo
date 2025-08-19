import React, { useEffect } from 'react'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import { useAppDispatch, useAppSelector } from '../store/categories/hooks';
import { FaHeart } from 'react-icons/fa6';
import actDeleteFavority from '../store/favority/act/actdeletefavority';
import actGetPtoducts from '../store/products/act/actGetproducts';
import { Link, useLocation, useNavigate } from 'react-router-dom';

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
      {favority.map((item) => (
        <ImageListItem key={item.img}>
          <Link to={`/product#${item.id}`}>
          
          
          <img
            srcSet={`https://back-last.onrender.com/${item.img}`}
            src={`https://back-last.onrender.com/${item.img}`}
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
                              
                              await dispatch(actDeleteFavority(item.id));
                              await dispatch(actGetPtoducts(""));
                              
                            }}
                          />
                        
                       
                      </div>
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
    </div>
  )
}

export default Favority
