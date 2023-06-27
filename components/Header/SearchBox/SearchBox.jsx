import { borderColor, textFieldBg } from "@/Custom/CustomColor";
import { Box, TextField } from "@mui/material";

const SearchBox = () => {
  return (
    <Box>
      <TextField
        name="searchPizza"
        variant="outlined"
        size="small"
        placeholder="Hot Pizza.."
        sx={{
          "& input": {
            color: "grey",
            fontSize: ".8rem",

            "&::placeholder": {
              color: "red",
              fontSize: ".85rem",
              fontWeight: "bold",
            },
          },

          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderWidth: 0,
              backgroundColor: textFieldBg,
              borderRadius: "10px",
            },

            "&:hover fieldset": {
              borderColor: borderColor,
              borderWidth: 2,
              backgroundColor: textFieldBg,
            },

            "&.Mui-focused fieldset": {
              borderColor: borderColor,
              borderWidth: 2,
              backgroundColor: "initial",
            },
          },
        }}
      />
    </Box>
  );
};
export default SearchBox;
