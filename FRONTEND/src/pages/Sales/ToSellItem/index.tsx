import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { FC } from "react";
import { theme } from "../../../utils/theme";
import { formatNumber } from "../../../utils/utils";
import Button from "@mui/material/Button";
import SellIcon from "@mui/icons-material/AddShoppingCartOutlined";

interface OneItemProps {
  title: string;
  quantity: number;
  price: number;
  onClick(): void;
}
const ToSellItem: FC<OneItemProps> = ({ title, quantity, price, onClick }) => {
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
        {title}
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
            {quantity}
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
            {formatNumber(price)} Ar
          </strong>
        </Typography>
      </Box>
      <Button
        onClick={onClick}
        sx={{ fontWeight: "bold !important" }}
        variant="contained"
        size="large"
        startIcon={<SellIcon fontSize="large" />}
      >
        SELL
      </Button>
    </Box>
  );
};

export default ToSellItem;
