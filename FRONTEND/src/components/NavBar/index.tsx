import { CustomAppBar, CustomToolbar } from "./styles";
import logo from "../../assets/logo.png";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../constants/routes";
import { useSession } from "../../context/session.context";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import MetricsIcon from "@mui/icons-material/BarChartOutlined";
import StockIcon from "@mui/icons-material/StoreMallDirectoryOutlined";
import SaleIcon from "@mui/icons-material/ShoppingBagOutlined";

const NavBar = () => {
  const navigate = useNavigate();
  const { user, setUser } = useSession();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>();

  const [selectedTab, setSelectedTab] = useState(0);
  const handleChangeTab = (_event: React.SyntheticEvent, newValue: number) => {
    setSelectedTab(newValue);
    navigate(
      newValue === 0
        ? ROUTES.ROOT
        : newValue === 1
        ? ROUTES.SALES
        : ROUTES.ROOT,
    );
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("token");
    handleClose();
    navigate(ROUTES.LOGIN);
  };

  return (
    <>
      <CustomAppBar position="sticky">
        <Box width="100%" pl="40px" pr="40px">
          <CustomToolbar>
            <Box flexGrow={1}>
              <img
                style={{ cursor: "pointer" }}
                src={logo}
                alt="Stockeo"
                width={200}
                height={80}
                onClick={() => navigate(ROUTES.ROOT)}
              />
            </Box>
            {user ? (
              <Box
                sx={{ cursor: "pointer" }}
                onClick={(e) => {
                  setAnchorEl(e.currentTarget);
                }}
              >
                <Avatar />
              </Box>
            ) : (
              <Button
                onClick={() => {
                  navigate(ROUTES.LOGIN);
                }}
                variant="contained"
                color="secondary"
                size="large"
              >
                Se connecter
              </Button>
            )}
          </CustomToolbar>
        </Box>
      </CustomAppBar>
      {Boolean(anchorEl) && (
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem onClick={handleLogout}>Se déconnecter</MenuItem>
        </Menu>
      )}
      <Tabs value={selectedTab} onChange={handleChangeTab} variant="fullWidth">
        <Tab icon={<StockIcon />} label="Stock" />
        <Tab icon={<SaleIcon />} label="Sales" />
        <Tab icon={<MetricsIcon />} label="Metrics" />
      </Tabs>
    </>
  );
};

export default NavBar;
