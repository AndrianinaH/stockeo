import { useState } from "react";
import ToSell from "./ToSell";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import ToConfirm from "./ToConfirm";

const SalesPage = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const handleChangeTab = (_event: React.SyntheticEvent, newValue: number) => {
    setSelectedTab(newValue);
  };
  return (
    <>
      <Tabs value={selectedTab} onChange={handleChangeTab} variant="fullWidth">
        <Tab label="To Sell" />
        <Tab label="To Confirm" />
      </Tabs>

      {selectedTab === 0 && <ToSell />}
      {selectedTab === 1 && <ToConfirm />}
    </>
  );
};

export default SalesPage;
