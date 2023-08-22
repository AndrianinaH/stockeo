import styled from "@emotion/styled";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";

export const Container = styled(Box)`
  background-color: #071b29;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 30px;
  padding-bottom: 30px;
`;

export const CustomCard = styled(Card)`
  padding: 40px;

  .MuiCardContent-root {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px !important;
  }
`;
