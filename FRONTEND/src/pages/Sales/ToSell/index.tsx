import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/SearchOutlined";
import { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import { theme } from "../../../utils/theme";
import ToSellItem from "../ToSellItem";
import { ProductService } from "../../../services/product.service";
import { Product } from "../../../utils/types";
import SentimentDissatisfied from "@mui/icons-material/SentimentDissatisfied";

const ToSell = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

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
              product={product} // Pass the product object
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
    </Box>
  );
};

export default ToSell;
