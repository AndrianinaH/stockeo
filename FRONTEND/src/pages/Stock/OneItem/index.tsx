import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { FC } from "react";
import { theme } from "../../../utils/theme";

interface OneItemProps {
  title: string;
  quantity: number;
  price: number;
}
const OneItem: FC<OneItemProps> = ({ title, quantity, price }) => {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      sx={{
        borderRadius: "20px",
        backgroundColor: theme.blackPearl,
        paddingX: "20px",
        paddingY: "10px",
        marginY: "20px",
      }}
    >
      <Typography component="h1" variant="h6" color={theme.pastelGreen}>
        {title}
      </Typography>
      <Box display="flex" flexDirection="column" alignItems="end">
        <Typography
          component="p"
          color={theme.white}
          sx={{ marginBottom: "5px" }}
        >
          quantity: <strong style={{ fontSize: 20 }}>{quantity}</strong>
        </Typography>
        <Typography component="p" color={theme.white}>
          price: <strong style={{ fontSize: 20 }}>{price} Ar</strong>
        </Typography>
      </Box>
    </Box>
  );
};

export default OneItem;
