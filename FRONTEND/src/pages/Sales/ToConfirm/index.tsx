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
import SaveIcon from "@mui/icons-material/CheckOutlined";
import { useAtom } from "jotai";
import { cartAtom, SaleItem } from "../../../utils/atoms";
import SentimentDissatisfied from "@mui/icons-material/SentimentDissatisfied";
import ConfirmIcon from "@mui/icons-material/CheckOutlined";
import { Fab } from "@mui/material";
import IncrementNumber from "../../../components/IncrementNumber";

const ToConfirm = () => {
  const [cart, setCart] = useAtom(cartAtom);
  const [openConfirmModal, setOpenConfirmModal] = useState(false);
  const [comment, setComment] = useState("");

  const handleCloseConfirmModal = () => {
    setOpenConfirmModal(false);
  };
  const handleOpenConfirmModal = () => {
    setOpenConfirmModal(true);
  };

  const handleConfirmSale = () => {
    const vente = {
      produit: cart.map((item) => ({
        id: item.product.id,
        quantite: item.quantity,
        prixVente: item.sellingPrice || item.product.prix,
      })),
      commentaire: comment,
    };
    console.log("Vente object:", vente); // Log the vente object
    setOpenConfirmModal(false);
    setCart([]);
    setComment("");
  };

  const getTotalPrice = (item: SaleItem): number => {
    const sellingPrice = item.sellingPrice || item.product.prix;
    return sellingPrice * item.quantity;
  };

  const handleQuantityChange = (productId: number, newQuantity: number) => {
    const updatedCart = cart.map((item) =>
      item.product.id === productId ? { ...item, quantity: newQuantity } : item,
    );
    setCart(updatedCart);
  };

  const handleSellingPriceChange = (productId: number, newPrice: number) => {
    const updatedCart = cart.map((item) =>
      item.product.id === productId
        ? { ...item, sellingPrice: newPrice }
        : item,
    );
    setCart(updatedCart);
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
        {cart.length > 0 ? (
          cart.map((item) => (
            <ToConfirmItem key={item.product.id} item={item} />
          ))
        ) : (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginTop: "20px",
            }}
          >
            <SentimentDissatisfied
              sx={{ fontSize: 60, color: theme.disabledColor }}
            />
            <Typography variant="subtitle1" color={theme.disabledColor}>
              Empty cart, please buy something
            </Typography>
          </Box>
        )}
      </Box>
      {/* confirm sell modal */}
      <MyModal
        open={openConfirmModal}
        onClose={handleCloseConfirmModal}
        fullscreen
        title="Confirm this sale ?"
      >
        <DialogContent sx={{ textAlign: "center" }}>
          {cart.map((item) => (
            <Box
              key={item.product.id}
              sx={{
                marginBottom: 2,
                padding: 2,
                border: `1px solid ${theme.mainBorderColor}`,
                borderRadius: "4px",
              }}
            >
              <Typography
                component="p"
                variant="subtitle1"
                color={theme.blackPearl}
              >
                <strong>{item.product.name}</strong>
              </Typography>
              <Typography
                component="p"
                variant="body1"
                color={theme.blackPearl}
              >
                Original Price:{" "}
                <strong>{formatNumber(item.product.prix)} Ar</strong>
              </Typography>
              <TextField
                margin="dense"
                label="Selling Price"
                type="number"
                fullWidth
                value={item.sellingPrice || item.product.prix}
                onChange={(e) =>
                  handleSellingPriceChange(
                    item.product.id,
                    Number(e.target.value),
                  )
                }
              />
              <Box
                display={"flex"}
                flexDirection={"column"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <Typography
                  component="p"
                  variant="body1"
                  color={theme.blackPearl}
                >
                  Quantity: <strong>{item.quantity}</strong>
                </Typography>
                {/* Add IncrementNumber component */}
                <IncrementNumber
                  initialValue={item.quantity}
                  handleChangeNumber={(newQuantity) =>
                    handleQuantityChange(item.product.id, newQuantity)
                  }
                />
              </Box>
              <Typography
                component="p"
                variant="body1"
                color={theme.blackPearl}
              >
                Total Price:{" "}
                <strong>{formatNumber(getTotalPrice(item))} Ar</strong>
              </Typography>
            </Box>
          ))}
          <TextField
            margin="dense"
            label="Comment"
            type="text"
            fullWidth
            multiline
            rows={4}
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
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
            onClick={handleConfirmSale}
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
      <Fab
        variant="extended"
        color="primary"
        onClick={handleOpenConfirmModal}
        style={{ position: "fixed", bottom: 16, right: 16 }}
      >
        <ConfirmIcon sx={{ mr: 1 }} />
        <strong>Confirm the sale</strong>
      </Fab>
    </Box>
  );
};

export default ToConfirm;
