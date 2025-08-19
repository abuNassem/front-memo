import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { FaFilter } from "react-icons/fa";

import { Container, IconButton } from "@mui/material";
import CartIcon from "../buttons/cartIcon";
import { Link, useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Side from "./side";
import Profile from "../../util/proflio";
import { api } from "../../template/layout";
import { useAppDispatch, useAppSelector } from "../../store/categories/hooks";
import { finding } from "../../store/search&filter/search";
import { FaSearch } from "react-icons/fa";
import SearchPhone from "../searchphone";




type NavState = {
  isActive: boolean;
  isPending: boolean;
  isTransitioning: boolean;
};

const style = ({ isActive,  isTransitioning }: NavState) => {
  return {
    color: isActive ? "rgb(255, 255, 255)" : "rgb(226, 226, 226)",
    borderBottom: isActive ? "2px solid rgb(255, 255, 255)" : "",
    viewTransitionName: isTransitioning ? "slide" : "",
  };
};

const Header = () => {
  const { product } = useAppSelector((state) => state);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const record = product.record;
  const context = React.useContext(api);
  const searching = (value: string) => {
    if (record) {
      const input = value.trim().toLowerCase();

      if (input === "") {
        
        navigate("/"); // أو "/home" حسب ما يناسبك
        return;
      }

      const filtered = record.filter((ele) =>
        ele.title.toLowerCase().includes(input)
      );

      dispatch(finding(filtered));
      navigate("/resultsearch");
    }
  };

  return (
    <Box sx={{ mt: 3, width: "90%", mx: "auto" }}>
      <Container fixed>
        <AppBar position="static" sx={{ borderRadius: "30px" }}>
          {context?.isSearch ? (
            <SearchPhone />
          ) : (
            <Toolbar
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: { xs: "end", lg: "center" },
                gap: "5",
                position: "relative",
                padding: "10px 5px",
              }}
            >
              <div
                id="logo"
                className="absolute lg:static start-[-6%] top-[-10%]"
              >
                <button
                  className="bg-zinc-800 px-1 text-white  "
                  style={{ borderRadius: "5px" }}
                >
                  <Typography sx={{ fontSize: { sx: "20px", md: "20px" } }}>
                    memo
                  </Typography>
                </button>
                <sub className="text-zinc-100 ms-1 text-[15px]">shop</sub>
              </div>
              {/* logo */}
              <div id="navlink" className="flex gap-4 hidden lg:flex">
                <button>
                  {" "}
                  <NavLink to="/" style={style}>
                    Home
                  </NavLink>
                </button>
                <button>
                  <NavLink to="/category" style={style}>
                    category
                  </NavLink>
                </button>
                <button>
                  <NavLink to="/product" style={style}>
                    product
                  </NavLink>
                </button>
                <button>
                  <NavLink to="/about_us" style={style}>
                    about us
                  </NavLink>
                </button>
              </div>
              <div className="block lg:hidden ">
                <Side />
              </div>
              {/* navlink */}
              <div className="flex items-center relative">
                <IconButton onClick={()=>context?.setIsSearch(true)}>
                  <FaSearch className="text-sm text-zinc-100" />
                </IconButton>
                <FaSearch className="text-white text-sm absolute start-2 hidden lg:block " />

                <input
                  type="text"
                  onChange={(e) => searching(e.target.value)}
                  className="w-[85%] h-[45px] bg-sky-800 hover:bg-zinc-700 ps-[30px] duration-[0.5s] focus:bg-zinc-900 rounded-md border-2 border-zinc-100/50 outline-none focus:border-zinc-100 hidden sm:block "
                />
              </div>
              <IconButton
                onClick={() => context?.setFilterMode((prev) => !prev)}
              >
                <FaFilter size={15} className="text-zinc-100" />
              </IconButton>

              {localStorage.getItem("userName") ? (
                <Profile />
              ) : (
                <div id="login" className="flex gap-5 mx-3">
                  <button>
                    <Link to="/login">login</Link>
                  </button>
                </div>
              )}

              {/* login */}
              <div className="absolute end-[-2%] sm:end-0 top-[-18%] sm:top-[-15%]">
                <CartIcon />
              </div>
            </Toolbar>
          )}
        </AppBar>
      </Container>
    </Box>
  );
};
export default Header;
