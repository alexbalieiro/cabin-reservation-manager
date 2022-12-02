import style from "./index.module.css";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import VpnKeyOutlinedIcon from "@mui/icons-material/VpnKeyOutlined";
import { ReactElement } from "react";

const Login = (): ReactElement => {
  return (
    <div className={style.container}>
      <h1 className={style.title}>LOGIN</h1>
      <form className={style.formContainer}>
        <div className={style.inputContainer}>
          <AccountCircleOutlinedIcon />
          <TextField
            id="outlined-text-input"
            label="Usuario"
            size="small"
            type="text"
            fullWidth
            autoComplete="current-text"
            style={{ backgroundColor: "white" }}
          />
        </div>
        <div className={style.inputContainer}>
          <VpnKeyOutlinedIcon />
          <TextField
            id="outlined-password-input"
            label="Contraseña"
            size="small"
            type="password"
            fullWidth
            autoComplete="current-password"
            style={{ backgroundColor: "white" }}
          />
        </div>
        <div className={style.buttonContainer}>
          <Button variant="contained" size="large">
            INGRESAR
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Login;
