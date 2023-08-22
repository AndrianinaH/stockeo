import { FC } from "react";
import FavorisIcon from "../Icons/FavoriteIcon";
import StarOutlinedIcon from "@mui/icons-material/StarOutlineOutlined";
import { MyIconButton } from "./styles";

type FavorisButtonProps = {
  onClick(): void;
  isChecked?: boolean;
  disabled?: boolean;
};
const FavorisButton: FC<FavorisButtonProps> = ({
  onClick,
  disabled,
  isChecked,
}) => {
  return (
    <MyIconButton
      aria-label="favoris-button"
      onClick={onClick}
      disabled={disabled}
    >
      {isChecked ? <FavorisIcon /> : <StarOutlinedIcon />}
    </MyIconButton>
  );
};

export default FavorisButton;
