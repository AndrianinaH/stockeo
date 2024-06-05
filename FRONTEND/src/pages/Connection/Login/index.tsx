import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../../constants/routes";
import Button from "@mui/material/Button";
import { useSession } from "../../../context/session.context";
import ConnectionLayout from "../../../components/ConnectionLayout";
import { useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { useSnackbar } from "../../../context/snackbar.context";
import { AuthService } from "../../../services/auth.service";
import { setToken } from "../../../utils/utils";

const Login = () => {
  const navigate = useNavigate();
  const { setUser } = useSession();
  const [isLoading, setIsLoading] = useState(false);
  const { handleSetSnackbar } = useSnackbar();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    setIsLoading(true);
    AuthService.login({ email, password })
      .then((result) => {
        setUser(result?.data?.user);
        setToken(result?.data?.accessToken);
        localStorage.setItem("token", result?.data?.accessToken);
        navigate(ROUTES.ROOT);
        setIsLoading(false);
        handleSetSnackbar({
          isOpen: true,
          message: "Welcome back!",
          variant: "success",
        });
        return;
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
        handleSetSnackbar({
          isOpen: true,
          message: error?.response?.data || "An error encountered",
          variant: "error",
        });
      });
  };

  return (
    <ConnectionLayout title="Connexion" desc="Log in to manage the stock">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="subtitle2">Enter your email</Typography>
        </Grid>
        <Grid item xs={12}>
          <TextField
            name="email"
            placeholder="Email *"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="subtitle2">Enter your password</Typography>
        </Grid>
        <Grid item xs={12}>
          <TextField
            name="password"
            placeholder="Mot de passe *"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            variant="contained"
            type={!isLoading ? "submit" : "button"}
            sx={{ width: "100%", fontWeight: "600 !important" }}
            onClick={handleSubmit}
          >
            {isLoading ? (
              <CircularProgress sx={{ color: "white" }} />
            ) : (
              <>Connexion</>
            )}
          </Button>
        </Grid>
      </Grid>
    </ConnectionLayout>
  );
};

export default Login;
