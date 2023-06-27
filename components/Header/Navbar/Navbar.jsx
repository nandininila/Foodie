import { NavStyle } from "@/styles/JsStyles/NavStyle.js";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Badge, Box, IconButton } from "@mui/material";
import { useState } from "react";
import SearchBox from "../SearchBox/SearchBox";
import NavDrawer from "./NavDrawer";
import NavList from "./NavList";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <NavDrawer open={open} setOpen={setOpen} />

      <Box sx={NavStyle.container}>
        <IconButton sx={NavStyle.MenuIcon} onClick={() => setOpen(true)}>
          <MenuIcon sx={{ fontSize: "1.6rem" }} style={NavStyle.icon} />
        </IconButton>

        <NavList />
        <SearchBox />

        <IconButton>
          <Badge
            badgeContent={4}
            sx={{
              "& .MuiBadge-badge": {
                color: "#d1411e",
                backgroundColor: "white",
              },
            }}
          >
            <ShoppingCartIcon
              sx={{ fontSize: "1.6rem" }}
              style={NavStyle.icon}
            />
          </Badge>
        </IconButton>
      </Box>
    </>
  );
};

export default Navbar;

/* <Box display={"flex"} alignItems={"center"}>
          <Box sx={NavStyle.callButton}>
            <IconButton>
              <Image
                src="/img/telephone.png"
                alt="callButton"
                width="32"
                height="32"
              />
            </IconButton>
          </Box>
          <Box sx={NavStyle.texts}>
            <Typography>ORDER NOW !</Typography>
            <Box>012 345 678</Box>
          </Box>
        </Box> */
