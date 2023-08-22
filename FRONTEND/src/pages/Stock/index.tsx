import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/SearchOutlined";
import OneItem from "./OneItem";

const StockPage = () => {
  return (
    <Box>
      <Paper>
        <TextField
          id="search-phone"
          label="Search"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          variant="outlined"
          fullWidth
        />
      </Paper>
      <Box sx={{ marginTop: "25px" }}>
        <OneItem title="Samsung A14 4/128GB" price={760000} quantity={10} />
        <OneItem title="Samsung A14 4/128GB" price={760000} quantity={10} />
        <OneItem title="Samsung A14 4/128GB" price={760000} quantity={10} />
        <OneItem title="Samsung A14 4/128GB" price={760000} quantity={10} />
        <OneItem title="Samsung A14 4/128GB" price={760000} quantity={10} />
        <OneItem title="Samsung A14 4/128GB" price={760000} quantity={10} />
        <OneItem title="Samsung A14 4/128GB" price={760000} quantity={10} />
        <OneItem title="Samsung A14 4/128GB" price={760000} quantity={10} />
        <OneItem title="Samsung A14 4/128GB" price={760000} quantity={10} />
      </Box>
    </Box>
  );
};

export default StockPage;
