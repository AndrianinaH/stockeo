import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { FC } from "react";
import { theme } from "../../../utils/theme";
import { formatNumber } from "../../../utils/utils";
import Button from "@mui/material/Button";
import CancelIcon from "@mui/icons-material/RemoveShoppingCartOutlined";
import { SaleItem } from "../../../utils/atoms";
import { useAtom } from "jotai";
import { cartAtom } from "../../../utils/atoms";

interface OneItemProps {
  item: SaleItem; // Use SaleItem instead of title, quantity, price
}

const ToConfirmItem: FC<OneItemProps> = ({ item }) => {
  const [cart, setCart] = useAtom(cartAtom); // Get cart and setCart

  const handleCancel = () => {
    // Remove the item from the cart
    const updatedCart = cart.filter(
      (cartItem) => cartItem.product.id !== item.product.id,
    );
    setCart(updatedCart);
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
        {item.product.name} {/* Use item.product.name */}
      </Typography>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Typography
          component="p"
          color={theme.blackPearl}
          sx={{ marginBottom: "15px" }}
        >
          quantity to confirm:{" "}
          <strong
            style={{
              fontSize: 20,
              backgroundColor: theme.red,
              color: theme.white,
              padding: "3px",
              borderRadius: "5px",
            }}
          >
            {item.quantity} {/* Use item.quantity */}
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
            {formatNumber(item.product.prix)} Ar {/* Use item.product.prix */}
          </strong>
        </Typography>
      </Box>
      <Box display="flex" alignItems="center">
        <Button
          onClick={handleCancel} // Use handleCancel
          sx={{ fontWeight: "bold !important" }}
          variant="contained"
          size="large"
          color="error"
          startIcon={<CancelIcon fontSize="large" />}
        >
          CANCEL
        </Button>
      </Box>
    </Box>
  );
};

export default ToConfirmItem;
