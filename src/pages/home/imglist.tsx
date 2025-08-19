import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { Link, useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../store/categories/hooks';
import actGetPtoducts from '../../store/products/act/actGetproducts';

export default function MyImageList() {
  const dispatch = useAppDispatch()
  const {  record } = useAppSelector(state => state.product)
  React.useEffect(() => {
    dispatch(actGetPtoducts(''))
  }, [])


  return (
    <Box sx={{ width: '90%', height: 'auto',mt:5 }}>
      <ImageList variant="masonry" cols={3} gap={8}>
        {
          record.slice(0, 3).map((item, index) => (
            <ImageListItem key={index}>
              <img
                srcSet={`https://back-last.onrender.com/${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                src={`https://back-last.onrender.com/${item.img}?w=248&fit=crop&auto=format`}
                loading="lazy"
              />
              <ImageListItemBar position="below" title={item.title} />
            </ImageListItem>
          ))
        }
      </ImageList>
    </Box>
  );
}


