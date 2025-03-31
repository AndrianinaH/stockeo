import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { FC } from "react";
import { theme } from "../../../utils/theme";
import { formatNumber } from "../../../utils/utils";
import Button from "@mui/material/Button";
import SellIcon from "@mui/icons-material/AddShoppingCartOutlined";
import { useAtom } from "jotai";
import { cartAtom, SaleItem } from "../../../utils/atoms";
import { ProductType } from "../../../utils/types";

interface OneItemProps {
  product: ProductType; // Use product instead of title, price, quantity
}

const ToSellItem: FC<OneItemProps> = ({ product }) => {
  const [cart, setCart] = useAtom(cartAtom);

  const handleAddToCard = () => {
    // Vérifie si le produit est déjà dans le panier
    const existingItem = cart.find((item) => item.product.id === product.id);

    if (existingItem) {
      // Si le produit existe déjà, augmente la quantité
      const updatedCart = cart.map((item) =>
        item.product.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item,
      );
      setCart(updatedCart);
    } else {
      // Si le produit n'existe pas, ajoute-le au panier avec une quantité de 1
      const newSaleItem: SaleItem = { product: product, quantity: 1 };
      setCart([...cart, newSaleItem]);
    }
  };

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      flexWrap="wrap"
      sx={{
        borderRadius: "20px",
        backgroundColor: theme.white,
        paddingX: "20px",
        paddingY: "10px",
        marginY: "20px",
      }}
      boxShadow="0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)"
    >
      <Typography component="h1" variant="h6" color={theme.blackPearl}>
        {product.name}
      </Typography>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Typography
          component="p"
          color={theme.blackPearl}
          sx={{ marginBottom: "15px" }}
        >
          quantity stock:{" "}
          <strong
            style={{
              fontSize: 20,
              backgroundColor: theme.pastelGreen,
              color: theme.blackPearl,
              padding: "3px",
              borderRadius: "5px",
            }}
          >
            {10} {/* Replace with actual quantity if available */}
          </strong>
        </Typography>
        <Typography component="p" color={theme.blackPearl}>
          price:{" "}
          <strong
            style={{
              fontSize: 20,
              color: theme.blackPearl,
              padding: "3px",
              borderRadius: "5px",
            }}
          >
            {formatNumber(product.prix)} Ar
          </strong>
        </Typography>
      </Box>
      <Button
        onClick={handleAddToCard} // Use handleAddToCard
        sx={{ fontWeight: "bold !important" }}
        variant="contained"
        size="large"
        startIcon={<SellIcon fontSize="large" />}
      >
        Add to cart {/* Change the text */}
      </Button>
    </Box>
  );
};

export default ToSellItem;
