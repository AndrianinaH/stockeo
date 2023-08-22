import { FC } from "react";
import EditIcon from "@mui/icons-material/EditOutlined";
import { MyIconButton } from "./styles";

type EditButtonProps = {
  onClick(): void;
  disabled?: boolean;
};
const EditButton: FC<EditButtonProps> = ({ onClick, disabled }) => {
  return (
    <MyIconButton
      aria-label="edit-button"
      onClick={onClick}
      disabled={disabled}
    >
      <EditIcon />
    </MyIconButton>
  );
};

export default EditButton;
