import { useState } from "react";
import ToSell from "./ToSell";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import ToConfirm from "./ToConfirm";
import { theme } from "../../utils/theme";
import { useAtom } from "jotai";
import { cartAtom } from "../../utils/atoms";
import { Box } from "@mui/material";

const SalesPage = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [cart] = useAtom(cartAtom); // Get the cart from Jotai

  const handleChangeTab = (_event: React.SyntheticEvent, newValue: number) => {
    setSelectedTab(newValue);
  };

  return (
    <>
      <Tabs value={selectedTab} onChange={handleChangeTab} variant="fullWidth">
        <Tab label="To Sell" />
        <Tab
          label={
            <Box>
              <span>To Confirm </span>
              {cart.length > 0 && (
                <strong
                  style={{
                    fontSize: 14,
                    backgroundColor: theme.red,
                    color: theme.white,
                    padding: "8px 10px",
                    borderRadius: "8px",
                  }}
                >
                  {cart.length}
                </strong>
              )}
            </Box>
          }
        />
      </Tabs>

      {selectedTab === 0 && <ToSell />}
      {selectedTab === 1 && <ToConfirm />}
    </>
  );
};

export default SalesPage;
