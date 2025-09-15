import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { FaFilter, FaSearch } from "react-icons/fa";
import { Container, IconButton } from "@mui/material";
import CartIcon from "../buttons/cartIcon";
import { Link, useNavigate, NavLink } from "react-router-dom";
import Side from "./side";
import { api } from "../../template/layout";
import { useAppDispatch, useAppSelector } from "../../store/categories/hooks";
import { finding } from "../../store/search&filter/search";
import SearchPhone from "../searchphone";
import Profile from "../profile";

// ✅ تعريف type خاص بالـ NavLink
type NavState = {
  isActive: boolean;
  isPending: boolean;
  isTransitioning: boolean;
};

// ✅ دالة style للـ NavLink
const style = ({ isActive, isTransitioning }: NavState) => ({
  color: isActive ? "rgb(255, 255, 255)" : "rgb(226, 226, 226)",
  borderBottom: isActive ? "2px solid rgb(255, 255, 255)" : "",
  viewTransitionName: isTransitioning ? "slide" : "",
});

const Header: React.FC = () => {
  const { product } = useAppSelector((state) => state);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const record = product?.record ?? []; // ✅ حماية من undefined
  const context = React.useContext(api);

  const searching = (value: string) => {
    const input = value.trim().toLowerCase();

    if (!input) {
      navigate("/");
      return;
    }

    const filtered = record.filter((ele) =>
      ele.title.toLowerCase().includes(input)
    );

    dispatch(finding(filtered));
    navigate("/resultsearch");
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
              {/* Logo */}
              <div
                id="logo"
                className="absolute lg:static start-[-6%] top-[-10%]"
              >
                <button
                  className="bg-zinc-800 px-1 text-white"
                  style={{ borderRadius: "5px" }}
                >
                  <Typography sx={{ fontSize: { xs: "18px", md: "20px" } }}>
                    memo
                  </Typography>
                </button>
                <sub className="text-zinc-100 ms-1 text-[15px]">shop</sub>
              </div>

              {/* NavLinks */}
              <div id="navlink" className="flex gap-4 hidden lg:flex">
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

              {/* Side menu for mobile */}
              <div className="block lg:hidden">
                <Side />
              </div>

              {/* Search */}
              <div className="flex items-center relative">
                <IconButton onClick={() => context?.setIsSearch(true)}>
                  <FaSearch className="text-sm text-zinc-100" />
                </IconButton>
                <FaSearch className="text-white text-sm absolute start-2 hidden lg:block" />

                <input
                  type="text"
                  onChange={(e) => searching(e.target.value)}
                  className="w-[85%] h-[45px] bg-sky-800 hover:bg-zinc-700 ps-[30px] duration-500 focus:bg-zinc-900 rounded-md border-2 border-zinc-100/50 outline-none focus:border-zinc-100 hidden sm:block"
                />
              </div>

              {/* Filter */}
              <IconButton onClick={() => context?.setFilterMode?.((prev: boolean) => !prev)}>
                <FaFilter size={15} className="text-zinc-100" />
              </IconButton>

              {/* Login / Profile */}
              {localStorage.getItem("userName") ? (
                <Profile/>
              ) : (
                <div id="login" className="flex gap-5 mx-3">
                  <Link to="/login">Login</Link>
                </div>
              )}

              {/* Cart */}
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
