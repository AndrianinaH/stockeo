import styled from "@emotion/styled";
import AppBar from "@mui/material/AppBar";
import { theme } from "../../utils/theme";
import Toolbar from "@mui/material/Toolbar";

export const AdminCustomAppBar = styled(AppBar)`
  background-color: ${theme.blackPearl} !important;
  color: ${theme.white} !important;
  height: 75px;
  display: flex;
  flex-direction: row;
  align-items: center;
  z-index: 1001 !important;
  .burger {
    font-size: 38px;
  }
  box-shadow: none;
`;

export const AdminCustomToolbar = styled(Toolbar)`
  padding-left: 10px !important;
  padding-right: 10px !important;

  @media (max-width: 576px) {
    padding-left: 10px !important;
  }
`;

export const AdminDrawerHeader = styled("div")`
  display: flex;
  align-items: center;
  padding: 20px;
  justify-content: flex-end;
`;
