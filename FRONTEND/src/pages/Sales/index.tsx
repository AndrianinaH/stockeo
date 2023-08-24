import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/SearchOutlined";
import OneItem from "./OneItem";
import MyModal from "../../components/Modal";
import { useState } from "react";
import Button from "@mui/material/Button";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import Typography from "@mui/material/Typography";
import { theme } from "../../utils/theme";
import { formatNumber } from "../../utils/utils";
import IncrementNumber from "../../components/IncrementNumber";

const SalesPage = () => {
  const [openSell, setOpenSell] = useState(false);
  const [sellQuantity, setSellQuantity] = useState(0);
  console.log(
    "🚀 ~ file: index.tsx:20 ~ SalesPage ~ sellQuantity:",
    sellQuantity,
  );
  const handleCloseSellModal = () => {
    setOpenSell(false);
    setSellQuantity(0);
  };
  const handleOpenSellModal = () => {
    setOpenSell(true);
    setSellQuantity(1);
  };
  return (
    <Box>
      <Paper elevation={0}>
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
        <OneItem
          title="Samsung A14 4/128GB"
          price={760000}
          quantity={10}
          onClick={handleOpenSellModal}
        />
      </Box>
      {/* sell modal */}
      <MyModal
        open={openSell}
        onClose={handleCloseSellModal}
        fullscreen
        title="Sell this phone"
      >
        <DialogContent sx={{ textAlign: "center" }}>
          <Typography
            component="p"
            variant="subtitle1"
            color={theme.blackPearl}
          >
            <strong>Samsung Galaxy A14 4/128GB</strong>
          </Typography>
          <br />
          <Typography component="p" variant="body1" color={theme.blackPearl}>
            prix d'origine : <strong>{formatNumber(760000)} Ar</strong>
          </Typography>
          <Box display="flex" alignItems="center" justifyContent="center">
            <Typography
              component="span"
              variant="body1"
              color={theme.blackPearl}
              sx={{
                marginRight: "5px",
              }}
            >
              quantité :
            </Typography>
            <IncrementNumber handleChangeNumber={setSellQuantity} />
          </Box>
          <Box marginX={5}>
            <TextField
              autoFocus
              margin="dense"
              label="Selling price"
              type="number"
              fullWidth
              value={760000}
            />
            <TextField
              margin="dense"
              label="Comment"
              type="text"
              fullWidth
              multiline
              rows={4}
            />
          </Box>
        </DialogContent>
        <DialogActions sx={{ padding: "20px" }}>
          <Button
            variant="contained"
            color="success"
            onClick={handleCloseSellModal}
          >
            Confirm
          </Button>
          <Button variant="text" color="inherit" onClick={handleCloseSellModal}>
            Cancel
          </Button>
        </DialogActions>
      </MyModal>
    </Box>
  );
};

export default SalesPage;
