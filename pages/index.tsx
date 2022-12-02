import { useState } from "react";
import HomePage from "./homepage";
import LoginPage from "./login";

export default function Home() {
  const [ifLogin, setIfLogin] = useState(false);
  return ifLogin ? <HomePage /> : <LoginPage />;
}
