import { FC } from "react";
import UndoIcon from "@mui/icons-material/Close";
import { MyIconButton } from "./styles";

type UndoButtonProps = {
  onClick(): void;
  disabled?: boolean;
};
const UndoButton: FC<UndoButtonProps> = ({ onClick, disabled }) => {
  return (
    <MyIconButton
      aria-label="undo-button"
      onClick={onClick}
      disabled={disabled}
    >
      <UndoIcon />
    </MyIconButton>
  );
};

export default UndoButton;
