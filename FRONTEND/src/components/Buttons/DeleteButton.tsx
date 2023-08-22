import { FC } from "react";
import DeleteIcon from "../Icons/DeleteIcon";
import { MyIconButton } from "./styles";

type DeleteButtonProps = {
  onClick(): void;
  disabled?: boolean;
};
const DeleteButton: FC<DeleteButtonProps> = ({ onClick, disabled }) => {
  return (
    <MyIconButton aria-label="delete" onClick={onClick} disabled={disabled}>
      <DeleteIcon />
    </MyIconButton>
  );
};

export default DeleteButton;
