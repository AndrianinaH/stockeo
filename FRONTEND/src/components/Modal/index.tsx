import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { FC, ReactNode } from "react";
import Dialog from "@mui/material/Dialog";

type DialogTitleProps = {
  id: string;
  children?: ReactNode;
  onClose: () => void;
};

export const MyDialogTitle: FC<DialogTitleProps> = ({
  children,
  onClose,
  ...other
}) => {
  return (
    <DialogTitle sx={{ m: 0, p: 3, textAlign: "center" }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

type MyModalProps = {
  open: boolean;
  onClose(): void;
  children: ReactNode;
  title?: string;
  fullwidth?: boolean;
  fullscreen?: boolean;
  maxWidth?: "xs" | "sm" | "md" | "lg" | "xl";
};

const MyModal: FC<MyModalProps> = ({
  onClose,
  open,
  children,
  title,
  fullwidth,
  fullscreen,
  maxWidth,
}) => {
  return (
    <Dialog
      open={open}
      fullWidth={fullwidth}
      fullScreen={fullscreen}
      maxWidth={maxWidth}
      onClose={onClose}
    >
      <MyDialogTitle id="dialog-id" onClose={onClose}>
        {title}
      </MyDialogTitle>
      {children}
    </Dialog>
  );
};

export default MyModal;
