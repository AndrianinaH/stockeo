import { FC } from "react";
import { MyIconButton } from "./styles";
import SaveIcon from "../Icons/SaveIcon";

type SaveButtonProps = {
  onClick(): void;
  disabled?: boolean;
};
const SaveButton: FC<SaveButtonProps> = ({ onClick, disabled }) => {
  return (
    <MyIconButton
      aria-label="save-button"
      onClick={onClick}
      disabled={disabled}
    >
      <SaveIcon />
    </MyIconButton>
  );
};

export default SaveButton;
