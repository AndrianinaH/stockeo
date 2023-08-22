import React, { FC } from "react";
import { Container, CustomCard } from "./style";
import CardContent from "@mui/material/CardContent";
import logo from "../../assets/logo.png";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

type ConnectionLayoutProps = {
  title: string;
  desc?: string;
  width?: string;
  children: React.ReactNode;
};

const ConnectionLayout: FC<ConnectionLayoutProps> = ({
  title,
  desc,
  width,
  children,
}) => {
  return (
    <Container>
      <CustomCard sx={{ width: width || "400px" }}>
        <CardContent>
          <img src={logo} alt="Stockeo" width={260} />
          <Box mb={6} mt={2}>
            <Typography textAlign="center" variant="h4" fontWeight={700}>
              {title}
            </Typography>
            {desc && (
              <Typography textAlign="center" color="text.secondary">
                {desc}
              </Typography>
            )}
          </Box>
          {children}
        </CardContent>
      </CustomCard>
    </Container>
  );
};

export default ConnectionLayout;
