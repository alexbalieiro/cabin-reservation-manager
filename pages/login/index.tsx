import style from "../login/index.module.css";
import Login from "../../components/login/index";

const LoginPage = () => {
  return (
    <main className={style.container}>
      <Login />
    </main>
  );
};

export default LoginPage;
