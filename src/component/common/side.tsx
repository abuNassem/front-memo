import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import { LuMenu } from "react-icons/lu";
import { NavLink } from "react-router-dom";

// ✅ تعريف type خاص بالـ NavLink
type NavState = {
  isActive: boolean;
  isPending: boolean;
  isTransitioning: boolean;
};

export default function Side() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer =
    (newOpen: boolean) => (event?: React.KeyboardEvent | React.MouseEvent) => {
      // ✅ منع إغلاق القائمة بالـ Tab / Shift + Tab
      if (
        event &&
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }
      setOpen(newOpen);
    };

  // ✅ ستايل مخصص للـ NavLink
  const style = ({ isActive, isTransitioning }: NavState) => ({
    color: isActive ? "rgba(0, 0, 0, 1)" : "rgba(48, 47, 47, 1)",
    fontWeight: isActive ? "bold" : "500",
    viewTransitionName: isTransitioning ? "slide" : "",
    textDecoration: "none", // عشان يشيل underline
  });

  const DrawerList = (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        <div id="navlink" className="flex flex-col gap-4 p-3">
          <NavLink to="/" style={style}>
            Home
          </NavLink>
          <NavLink to="/category" style={style}>
            Category
          </NavLink>
          <NavLink to="/product" style={style}>
            Product
          </NavLink>
          <NavLink to="/about_us" style={style}>
            About Us
          </NavLink>
        </div>
      </List>
    </Box>
  );

  return (
    <div>
      <Button onClick={toggleDrawer(true)}>
        <LuMenu className="text-white text-lg" />
      </Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
