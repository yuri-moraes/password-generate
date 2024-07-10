import "./styles/index.css";
import Button from "./components/buttons";
import { useState } from "react";
import Form from "./components/form/input";

export default function App() {
  const [password, setPassword] = useState("");
  const [copyText, setCopyText] = useState("Copiar");
  const [passwordSize, setPasswordSize] = useState(12);

  const generatePassword = () => {
    const chars =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+";
    let password = "";

    for (let i = 0; i < passwordSize; i++) {
      password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setCopyText("Copiar");
    setPassword(password);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(password);
    setCopyText("Copiado!");
  };

  return (
    <div className="container">
      <h1 className="title">Gerador de senhas</h1>
      <Form passwordSize={passwordSize} setPasswordSize={setPasswordSize} />
      <div className="buttons">
        <Button onClick={generatePassword} text={"Gerar!"} />
        <Button onClick={copyToClipboard} text={copyText} />
      </div>
      {password && <h2 className="password">{password}</h2>}
    </div>
  );
}
