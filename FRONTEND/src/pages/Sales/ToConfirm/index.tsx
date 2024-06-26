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
import ToConfirmItem from "../ToConfirmItem";
import CancelIcon from "@mui/icons-material/RemoveShoppingCartOutlined";
import SaveIcon from "@mui/icons-material/CheckOutlined";

const ToConfirm = () => {
  const [openCancelModal, setOpenCancelModal] = useState(false);

  const handleCloseCancelModal = () => {
    setOpenCancelModal(false);
  };
  const handleOpenCancelModal = () => {
    setOpenCancelModal(true);
  };

  const [openConfirmModal, setOpenConfirmModal] = useState(false);

  const handleCloseConfirmModal = () => {
    setOpenConfirmModal(false);
  };
  const handleOpenConfirmModal = () => {
    setOpenConfirmModal(true);
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
        <ToConfirmItem
          title="Samsung A14 4/128GB"
          price={760000}
          quantity={10}
          onConfirm={handleOpenConfirmModal}
          onCancel={handleOpenCancelModal}
        />
      </Box>
      {/* confirm sell modal */}
      <MyModal
        open={openConfirmModal}
        onClose={handleCloseConfirmModal}
        fullscreen
        title="Confirm this sale ?"
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
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            marginY={2}
          >
            <Typography
              component="span"
              variant="body1"
              color={theme.blackPearl}
              sx={{
                marginRight: "5px",
              }}
            >
              quantity to confirm: <strong>4</strong>
            </Typography>
          </Box>
          <Box marginX={5}>
            <TextField
              autoFocus
              margin="dense"
              label="Selling price"
              type="number"
              fullWidth
              value={760000}
              disabled
            />
            <TextField
              autoFocus
              margin="dense"
              label="Total price"
              type="number"
              fullWidth
              value={760000 * 4}
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
            onClick={handleCloseConfirmModal}
            startIcon={<SaveIcon />}
          >
            Confirm
          </Button>
          <Button
            size="large"
            variant="text"
            color="inherit"
            onClick={handleCloseConfirmModal}
          >
            Back
          </Button>
        </DialogActions>
      </MyModal>
      {/* cancel sell modal */}
      <MyModal
        open={openCancelModal}
        onClose={handleCloseCancelModal}
        fullscreen
        title="Are you sure you want to cancel this sale ?"
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
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            marginY={2}
          >
            <Typography
              component="span"
              variant="body1"
              color={theme.blackPearl}
              sx={{
                marginRight: "5px",
              }}
            >
              quantity to confirm: <strong>4</strong>
            </Typography>
          </Box>
          <Box marginX={5}>
            <TextField
              autoFocus
              margin="dense"
              label="Selling price"
              type="number"
              fullWidth
              value={760000}
              disabled
            />
            <TextField
              autoFocus
              margin="dense"
              label="Total price"
              type="number"
              fullWidth
              value={760000 * 4}
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
            color="error"
            onClick={handleCloseCancelModal}
            startIcon={<CancelIcon />}
          >
            Cancel the sell
          </Button>
          <Button
            size="large"
            variant="text"
            color="inherit"
            onClick={handleCloseCancelModal}
          >
            Back
          </Button>
        </DialogActions>
      </MyModal>
    </Box>
  );
};

export default ToConfirm;
