import { useState } from "react";
import styles from "../styles/Home.module.css";
import HomePage from "./homepage";
import LoginPage from "./login";

export default function Home() {
  const [ifLogin, setIfLogin] = useState(false);
  return ifLogin ? <HomePage /> : <LoginPage />;
}
