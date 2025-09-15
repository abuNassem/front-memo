import * as React from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Logout from "@mui/icons-material/Logout";
import { FaBagShopping, FaCartShopping, FaHeart } from "react-icons/fa6";
import { Link } from "react-router-dom";
import {  useAppSelector } from "../store/categories/hooks";
import { api } from "../template/layout";

import { Typography } from "@mui/material";
import axios from "axios";

export default function Profile() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const name = localStorage.getItem("userName");
  const context = React.useContext(api);
  // my chosen
  const value = useAppSelector((state) => state.cart.productfullinfo);
  // to open menue
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const itemData = useAppSelector(state=>state.favority.favorities)
  const  orders=useAppSelector(state=>state.orders.orders)
  // to close menue
  const handleClose = async () => {
   
    setAnchorEl(null);
  };
  const logout = async() => {
    handleClose();
    try{
 await axios.get('/api/logout',{headers:{Authorization:`Bearer ${localStorage.getItem('token')}`}})
            localStorage.clear();
  context?.setAlert((prev) => ({
      ...prev,
      isOpen: true,
      func: "info",
      textAlert: "you have loged out ",
    }));
            
              window.location.href='/login'
  
    }
    catch(error){
      console.log(error)
    }
   

  };
  return (
    <div>
      <Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            <Avatar sx={{ width: 32, height: 32 }}>
              {name ? name[0] : ""}
            </Avatar>
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        slotProps={{
          paper: {
            elevation: 0,
            sx: {
              width: "250px",
              overflow: "visible",
              filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
              mt: 1.5,
              "& .MuiAvatar-root": {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              "&::before": {
                content: '""',
                display: "block",
                position: "absolute",
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: "background.paper",
                transform: "translateY(-50%) rotate(45deg)",
                zIndex: 0,
              },
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem className="flex gap-2">
          <Avatar>{name ? name[0] : ""}</Avatar>
          <div className="mt-3">
            <h1 className="text-lg ">{localStorage.getItem("userName")}</h1>
            <p className="text-zinc-600 text-[12px]">
              {localStorage.getItem("email")}
            </p>
          </div>
        </MenuItem>

        <Divider />
        {itemData.length? (
          <MenuItem onClick={handleClose} component={Link} to="/favority">
            <ListItemIcon>
              <FaHeart className="text-red-500" />
            </ListItemIcon>
            <Typography sx={{ fontSize: "15px" }}> MyFavority</Typography>
          </MenuItem>
        ) : (
          <MenuItem disabled>
            <ListItemIcon>
              <FaHeart className="text-red-500" />
            </ListItemIcon>
            <Typography sx={{ fontSize: "15px" }}> Favority(empty)</Typography>
          </MenuItem>
        )}
        {value?.length ? (
          <MenuItem onClick={handleClose} component={Link} to="/chosen">
            <ListItemIcon>
              <FaCartShopping />
            </ListItemIcon>
            <Typography sx={{ fontSize: "15px" }}> Chosen</Typography>
          </MenuItem>
        ) : (
          <MenuItem disabled>
            <ListItemIcon>
              <FaCartShopping />
            </ListItemIcon>
            <Typography sx={{ fontSize: "15px" }}>Chosen (empty)</Typography>
          </MenuItem>
        )}
{orders?.length? <Link to={'/purchases'}>
<MenuItem  onClick={handleClose}>
          <ListItemIcon>
            <FaBagShopping />
          </ListItemIcon>
          <Typography sx={{ fontSize: "15px" }}> Your Purchases</Typography>
        </MenuItem>
</Link>:<MenuItem  disabled onClick={handleClose}>
          <ListItemIcon>
            <FaBagShopping />
          </ListItemIcon>
          <Typography sx={{ fontSize: "15px" }}> Your Purchases</Typography>
        </MenuItem>}
       
          <MenuItem onClick={logout}>
            <ListItemIcon>
              <Logout fontSize="small" />
            </ListItemIcon>
            <Typography sx={{ fontSize: "15px" }}> Logout</Typography>
          </MenuItem>
      </Menu>
    </div>
  );
}
