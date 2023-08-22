import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./styles/theme.ts";
import { SessionProvider } from "./context/session.context.tsx";
import { SnackbarProvider } from "./context/snackbar.context.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <ThemeProvider theme={theme}>
    <SnackbarProvider>
      <SessionProvider>
        <App />
      </SessionProvider>
    </SnackbarProvider>
  </ThemeProvider>,
);
