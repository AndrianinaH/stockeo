import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/SearchOutlined";
import OneItem from "./OneItem";
import { useState, useEffect } from "react";
import { ProductService } from "../../services/product.service";
import { Product } from "../../utils/types";

const StockPage = () => {
  const [products, setProducts] = useState<Product[]>([]);

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
        {products.map((product) => (
          <OneItem
            key={product.id}
            title={product.name}
            price={product.prix}
            quantity={10} // Replace with actual quantity if available
          />
        ))}
      </Box>
    </Box>
  );
};

export default StockPage;
