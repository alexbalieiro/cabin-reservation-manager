import style from "../login/index.module.css";
import Login from "../../components/login/index";

const LoginPage = () => {
  return (
    <div className={style.container}>
      <Login />
    </div>
  );
};

export default LoginPage;
