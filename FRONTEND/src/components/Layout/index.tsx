import React, { FC } from "react";
import Box from "@mui/material/Box";
import NavBar from "../NavBar";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <Box>
      <NavBar />
      <Box pt="30px" pl="40px" pr="40px">
        {children}
      </Box>
    </Box>
  );
};

export default Layout;
