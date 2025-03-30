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
import { AuthService } from "../../../services/auth.service";
import { setToken } from "../../../utils/utils";
import { ROLES } from "../../../utils/roles";
import { useApiError } from "../../../utils/api"; // Import the hook
import { useSnackbar } from "../../../context/snackbar.context";

const Login = () => {
  const navigate = useNavigate();
  const { setUser } = useSession();
  const [isLoading, setIsLoading] = useState(false);
  const { handleSetSnackbar } = useSnackbar();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { handleApiError } = useApiError();

  const handleSubmit = () => {
    setIsLoading(true);
    AuthService.login({ username: email, password })
      .then((result) => {
        const data = result?.data;
        if (data.user) {
          setUser({
            email: data.user,
            role: ROLES.USER,
          });
          setToken(data.token);
          localStorage.setItem("token", data.token);
          navigate(ROUTES.ROOT);
          setIsLoading(false);
          handleSetSnackbar({
            isOpen: true,
            message: "Welcome back!",
            variant: "success",
          });
          return;
        }
      })
      .catch((error) => {
        setIsLoading(false);
        handleApiError(error);
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
