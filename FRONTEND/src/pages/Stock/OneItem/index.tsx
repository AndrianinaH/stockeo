import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { FC } from "react";
import { theme } from "../../../utils/theme";
import { formatNumber } from "../../../utils/utils";

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
          sx={{ marginBottom: "15px" }}
        >
          quantity:{" "}
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
        <Typography component="p" color={theme.white}>
          price:{" "}
          <strong
            style={{
              fontSize: 20,
              backgroundColor: theme.white,
              color: theme.blackPearl,
              padding: "3px",
              borderRadius: "5px",
            }}
          >
            {formatNumber(price)} Ar
          </strong>
        </Typography>
      </Box>
    </Box>
  );
};

export default OneItem;
