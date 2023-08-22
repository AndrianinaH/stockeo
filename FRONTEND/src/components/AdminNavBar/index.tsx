import {
  AdminCustomAppBar,
  AdminCustomToolbar,
  AdminDrawerHeader,
} from "./styles";
import logo from "../../assets/react.svg";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import DashboardIcon from "@mui/icons-material/Dashboard";

import { ListItemText } from "@mui/material";
import { ROUTES } from "../../constants/routes";
import { useSession } from "../../context/session.context";
import { useNavigate } from "react-router-dom";

const AdminNavBar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const handleToggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);
  const navigate = useNavigate();
  const { setUser } = useSession();

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("token");

    navigate(ROUTES.LOGIN);
  };

  return (
    <AdminCustomAppBar position="sticky">
      <Box width="100%" pl="40px" pr="40px">
        <AdminCustomToolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={() => setIsDrawerOpen(true)}
          >
            <MenuIcon />
          </IconButton>
          <Box flexGrow={1} marginLeft={5}>
            <img
              style={{ cursor: "pointer" }}
              src={logo}
              alt="JurisBot"
              width={200}
              height={42}
              onClick={() => navigate(ROUTES.ROOT)}
            />
          </Box>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            sx={{ fontWeight: "600 !important" }}
            onClick={handleLogout}
          >
            Se déconnecter
          </Button>

          <Drawer
            sx={{
              flexShrink: 0,
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                minWidth: 300,
              },
            }}
            variant="persistent"
            anchor="left"
            open={isDrawerOpen}
          >
            <AdminDrawerHeader>
              <IconButton onClick={handleToggleDrawer}>
                {isDrawerOpen ? <ChevronLeftIcon /> : <ChevronRightIcon />}
              </IconButton>
            </AdminDrawerHeader>
            <Divider />
            <List>
              <ListItem disablePadding>
                <ListItemButton href={ROUTES.DASHBOARD}>
                  <ListItemIcon>
                    <DashboardIcon />
                  </ListItemIcon>
                  <ListItemText primary="Dashboard" />
                </ListItemButton>
              </ListItem>
            </List>
          </Drawer>
        </AdminCustomToolbar>
      </Box>
    </AdminCustomAppBar>
  );
};

export default AdminNavBar;
