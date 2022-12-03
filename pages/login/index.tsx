import style from "../login/index.module.css";
import FormUI from "../../components/formUI";

const LoginPage = () => {
  return (
    <main className={style.container}>
      <h1 style={{ textAlign: "center", fontSize: "40px" }}>Acceso</h1>
      <FormUI />
    </main>
  );
};

export default LoginPage;
