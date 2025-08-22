import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { useAppDispatch} from '../../store/categories/hooks';
import actGetPtoducts from '../../store/products/act/actGetproducts';

export default function MyImageList() {
  const dispatch = useAppDispatch()
  const imgs=['/premium_photo-1747861973878-e89458a6e421.avif','/premium_photo-1747861974672-8ec5d1f690d3.avif','/premium_photo-1747861981617-1512bc2c06e8.avif']
  React.useEffect(() => {
    dispatch(actGetPtoducts(''))
  }, [])


  return (
    <Box sx={{ width: '90%', height: 'auto',mt:5 }}>
      <ImageList variant="masonry" cols={3} gap={8}>
        {
          imgs.map((item, index) => (
            <ImageListItem key={index}>
              <img
                srcSet={`https://back-last.onrender.com/${item}?w=248&fit=crop&auto=format&dpr=2 2x`}
                src={`https://back-last.onrender.com/${item}?w=248&fit=crop&auto=format`}
                loading="lazy"
              />
            </ImageListItem>
          ))
        }
      </ImageList>
    </Box>
  );
}


