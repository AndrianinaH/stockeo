import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/SearchOutlined";
import MyModal from "../../../components/Modal";
import { useState, useEffect } from "react";
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
import { ProductService } from "../../../services/product.service";
import { Product } from "../../../utils/types";
import SentimentDissatisfied from "@mui/icons-material/SentimentDissatisfied";

const ToSell = () => {
  const [openSell, setOpenSell] = useState(false);
  const [sellQuantity, setSellQuantity] = useState(0);
  const [products, setProducts] = useState<Product[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  // Ajout de l'état pour les produits sélectionnés
  const [selectedProducts, setSelectedProducts] = useState<
    { title: string; price: number; quantity: number; sellQuantity: number }[]
  >([]);

  const handleCloseSellModal = () => {
    setOpenSell(false);
    setSellQuantity(0);
  };
  const handleOpenSellModal = () => {
    setOpenSell(true);
    setSellQuantity(1);
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productList = await ProductService.getProducts();
        setProducts(productList);
      } catch (error) {
        console.error("Failed to fetch products:", error);
        // Handle error appropriately (e.g., display an error message)
      }
    };

    fetchProducts();
  }, []);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const filteredProducts = products.filter((product) => {
    const searchTerm = searchQuery.toLowerCase();
    return (
      product.name.toLowerCase().includes(searchTerm) ||
      product.category.toLowerCase().includes(searchTerm) ||
      String(product.prix).includes(searchTerm)
    );
  });

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
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </Paper>
      <Box
        sx={{
          marginTop: "25px",
        }}
      >
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ToSellItem
              key={product.id}
              title={product.name}
              price={product.prix}
              quantity={10} // Replace with actual quantity if available
              onClick={handleOpenSellModal}
            />
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
              Oups no products found
            </Typography>
          </Box>
        )}
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
