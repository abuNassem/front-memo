import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { useAppDispatch, useAppSelector} from '../../store/categories/hooks';
import actGetPtoducts from '../../store/products/act/actGetproducts';
import Loader from '../../component/feedback/loading';

export default function MyImageList() {
  const dispatch = useAppDispatch()
  const product=useAppSelector(state=>state.product.record)
  const imgs=product.map(item=>item.img).slice(0,3)
  React.useEffect(() => {
    dispatch(actGetPtoducts(''))
  }, [])


  return (
    <Box sx={{ width: '90%', height: 'auto',mt:5 }}>
      <ImageList variant="masonry" cols={3} gap={8}>
        {imgs.length?
          imgs.map((item, index) => (
            <ImageListItem key={index}>
              <img
                srcSet={`/api/${item}?w=248&fit=crop&auto=format&dpr=2 2x`}
                src={`/api/${item}?w=248&fit=crop&auto=format`}
                loading="lazy"
              />
            </ImageListItem>
          ))
          :
          <div className='w-[90%] '> <Loader/></div>
        }
      </ImageList>
    </Box>
  );
}


