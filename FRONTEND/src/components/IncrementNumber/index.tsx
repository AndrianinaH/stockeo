import AddIcon from "@mui/icons-material/AddRounded";
import MoinsIcon from "@mui/icons-material/HorizontalRuleRounded";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { FC, useState } from "react";

interface IncrementNumberProps {
  handleChangeNumber(value: number): void;
  initialValue?: number;
}
const IncrementNumber: FC<IncrementNumberProps> = ({
  handleChangeNumber,
  initialValue,
}) => {
  const [number, setNumber] = useState<number>(initialValue || 0);
  return (
    <Box display="flex" alignItems="center" alignContent="center">
      <IconButton
        size="large"
        onClick={() => {
          if (number > 0) {
            setNumber(number - 1);
            handleChangeNumber(number - 1);
          }
        }}
      >
        <MoinsIcon color="error" fontSize="inherit" />
      </IconButton>
      <Typography>{number}</Typography>
      <IconButton
        size="large"
        onClick={() => {
          setNumber(number + 1);
          handleChangeNumber(number + 1);
        }}
      >
        <AddIcon color="success" fontSize="inherit" />
      </IconButton>
    </Box>
  );
};

export default IncrementNumber;
