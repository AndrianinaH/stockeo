import styled from "@emotion/styled";
import Paper from "@mui/material/Paper";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";

export const MyTableHead = styled(TableHead)`
  background-color: #061a2a;
`;

export const MyTableCell = styled(TableCell)`
  background: none;
  color: #fff;
  font-weight: bold;
`;

export const MyTableTitle = styled.h1`
  color: #53de62;
  font-size: 25px;
`;

export const MyTableFilterContainer = styled(Paper)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 0px;
  padding: 10px;
`;

export const MyFilterContainerInModal = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px 0px;
  padding: 10px;
`;
