import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/SearchOutlined";
import MyModal from "../../../components/Modal";
import { useState } from "react";
import Button from "@mui/material/Button";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import Typography from "@mui/material/Typography";
import { theme } from "../../../utils/theme";
import { formatNumber } from "../../../utils/utils";
import IncrementNumber from "../../../components/IncrementNumber";
import ToSellItem from "../ToSellItem";
import SaveIcon from "@mui/icons-material/CheckOutlined";
import DeliveryIcon from "@mui/icons-material/DeliveryDiningOutlined";

const ToSell = () => {
  const [openSell, setOpenSell] = useState(false);
  const [sellQuantity, setSellQuantity] = useState(0);
  const handleCloseSellModal = () => {
    setOpenSell(false);
    setSellQuantity(0);
  };
  const handleOpenSellModal = () => {
    setOpenSell(true);
    setSellQuantity(1);
  };
  return (
    <Box marginY={5}>
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
        <ToSellItem
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
            original price : <strong>{formatNumber(760000)} Ar</strong>
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
              quantity to sell:
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
              autoFocus
              margin="dense"
              label="Total price"
              type="number"
              fullWidth
              value={760000 * sellQuantity}
              disabled
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
        <DialogActions
          sx={{
            padding: "20px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Button
            size="large"
            variant="contained"
            color="success"
            onClick={handleCloseSellModal}
            startIcon={<SaveIcon />}
          >
            Confirm the sell
          </Button>
          <Button
            size="large"
            variant="contained"
            color="warning"
            onClick={handleCloseSellModal}
            startIcon={<DeliveryIcon />}
          >
            To be delivered
          </Button>
          <Button
            size="large"
            variant="text"
            color="inherit"
            onClick={handleCloseSellModal}
          >
            Cancel
          </Button>
        </DialogActions>
      </MyModal>
    </Box>
  );
};

export default ToSell;
