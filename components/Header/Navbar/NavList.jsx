import { borderColor, spicyColor } from "@/Custom/CustomColor";
import { Box } from "@mui/material";
import { useState } from "react";

const NavList = () => {
  const [selected, setSelected] = useState();

  const Nav = {
    list: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      userSelect: "none",
      width: "100%",

      "& a": {
        color: "grey",
        padding: ".3em 0",
        "&:hover": {
          color: `${borderColor}`,
        },
      },

      "> a:nth-of-type(-n+5)": {
        display: { xs: "none", sm: "none", md: "block" },
      },

      "> a:nth-of-type(n+7)": {
        display: { xs: "none", sm: "none", md: "block" },
      },
    },
  };

  const anchor = [
    { menu: "Home", path: "#" },
    { menu: "About", path: "#" },
    { menu: "Menu", path: "#" },
    { menu: "Offers", path: "#" },
    { menu: "Store", path: "#" },
    { menu: "PizzaPoint" },
    { menu: "Desserts", path: "#" },
    { menu: "Drink", path: "#" },
  ];

  return (
    <>
      <Box sx={Nav.list}>
        {anchor.map((a, i) => (
          <a
            style={{
              pointerEvents: i === 5 ? "none" : "auto",
              fontSize: i === 5 ? "1.2rem" : ".85rem",
              lineHeight: i === 5 ? 0.8 : "initial",
              transform: selected === i ? "scale(1.1)" : "initial",
              color: selected === i ? `${borderColor}` : null,
              borderBottom: selected === i ? `2px solid ${borderColor}` : 0,
            }}
            key={i}
            href={a?.path}
            onClick={() => setSelected(i)}
          >
            <div style={{ padding: "0 .5em" }}>
              {i < 5 && a?.menu}

              <strong style={{ color: "black" }}>
                {i === 5 && a?.menu.slice(0, 5)}
              </strong>
              <span style={{ color: spicyColor }}>
                {i === 5 && a?.menu.slice(5, 10)}
              </span>

              {i > 5 && a?.menu}
            </div>
          </a>
        ))}

        {/* <SearchBox /> */}
      </Box>
    </>
  );
};

export default NavList;
