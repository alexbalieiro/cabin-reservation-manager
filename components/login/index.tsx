import style from "./index.module.css";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import VpnKeyOutlinedIcon from "@mui/icons-material/VpnKeyOutlined";
import { ReactElement } from "react";
import Paper from "@mui/material/Paper";

const Login = (): ReactElement => {
  return (
    <section className={style.container}>
      <h1 className={style.title}>LOGIN</h1>
      <form className={style.formContainer}>
        <div className={style.inputContainer}>
          <AccountCircleOutlinedIcon />
          <Paper elevation={3} sx={{ width: "100%" }}>
            <TextField
              id="outlined-text-input"
              label="Usuario"
              size="small"
              type="text"
              fullWidth
              autoComplete="current-text"
            />{" "}
          </Paper>
        </div>
        <div className={style.inputContainer}>
          <VpnKeyOutlinedIcon />
          <Paper elevation={3} sx={{ width: "100%" }}>
            <TextField
              id="outlined-password-input"
              label="Contraseña"
              size="small"
              type="password"
              fullWidth
              autoComplete="current-password"
            />
          </Paper>
        </div>
        <div className={style.buttonContainer}>
          <Paper elevation={3}>
            <Button variant="contained" size="large">
              INGRESAR
            </Button>
          </Paper>
        </div>
      </form>
    </section>
  );
};

export default Login;
