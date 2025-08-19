import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { LuMenu } from "react-icons/lu";
import { NavLink } from 'react-router-dom';

export default function Side() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };
  type NavState = {
  isActive: boolean;
  isPending: boolean;
  isTransitioning: boolean;
};


  const style=({ isActive, isPending, isTransitioning }:NavState) => {
    return {
      color: isActive ? "rgba(0, 0, 0, 1)" : "rgba(48, 47, 47, 1)",
      fontWeight:isActive?'bold':'500',
      viewTransitionName: isTransitioning ? "slide" : "",
    };
  }
  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        <div id='navlink' className='flex flex-col gap-4 p-3'>
                                 <NavLink to='/' style={style}>Home</NavLink>
                            <NavLink to='/category'style={style}>category</NavLink>
                            <NavLink to='/product'style={style}>product</NavLink>
                            <NavLink to='/about_us'style={style}>about us</NavLink>

                        </div>
      </List>
      
    </Box>
  );

  return (
    <div>
      <Button onClick={toggleDrawer(true)} ><LuMenu className='text-white text-lg'/></Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
