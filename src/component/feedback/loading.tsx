import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';

export default function Loader() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 'auto',width:'auto' }}>
      <CircularProgress  size={20}/>
    </div>
  );
}
