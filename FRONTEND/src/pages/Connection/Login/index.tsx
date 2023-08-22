import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../../constants/routes";
import Button from "@mui/material/Button";
import { useSession } from "../../../context/session.context";
import ConnectionLayout from "../../../components/ConnectionLayout";
import { ROLES } from "../../../utils/roles";
import { useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { useSnackbar } from "../../../context/snackbar.context";
import { UserType } from "../../../utils/types";

const Login = () => {
  const navigate = useNavigate();
  const { setUser } = useSession();
  const [isLoading, setIsLoading] = useState(false);
  const { handleSetSnackbar } = useSnackbar();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    setIsLoading(true);
    const fakeUser: UserType = {
      id: 1,
      isActive: true,
      role: ROLES.ADMIN,
      userName: "admin",
    };
    setUser(fakeUser);
    localStorage.setItem("token", "wawa");
    navigate(ROUTES.ROOT);
    handleSetSnackbar({
      isOpen: true,
      message: "Welcome back!",
      variant: "success",
    });
    setIsLoading(false);
  };

  return (
    <ConnectionLayout title="Connexion" desc="Log in to manage the stock">
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="subtitle2">Enter your username</Typography>
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="username"
              placeholder="Username *"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
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
            >
              {isLoading ? (
                <CircularProgress sx={{ color: "white" }} />
              ) : (
                <>Connexion</>
              )}
            </Button>
          </Grid>
        </Grid>
      </form>
    </ConnectionLayout>
  );
};

export default Login;
