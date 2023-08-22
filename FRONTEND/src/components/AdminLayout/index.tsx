import React, { FC } from "react";
import Box from "@mui/material/Box";
import AdminNavBar from "../AdminNavBar";

type LayoutProps = {
  children: React.ReactNode;
};

const AdminLayout: FC<LayoutProps> = ({ children }) => {
  return (
    <Box>
      <AdminNavBar />
      <Box pt="30px" pl="40px" pr="40px">
        {children}
      </Box>
    </Box>
  );
};

export default AdminLayout;
