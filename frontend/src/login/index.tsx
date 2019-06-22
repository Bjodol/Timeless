import React, { useState } from "react";
import "./styles.css";
import { login } from "../api-handlers/login";
import { useAuthToken } from "../AppContext";

interface ILoginProps {}

const Login: React.FunctionComponent<ILoginProps> = props => {
  const [userName, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const { setToken } = useAuthToken();
  return (
    <form
      className="login"
      onSubmit={async e => {
        e.preventDefault();
        const payload = { username: userName, password };
        const response = await login(payload);
        if (response.error) {
          setError(response.error);
        } else {
          setToken(response.token);
        }
      }}
    >
      <h1>Hei! Velkommen!</h1>
      <h2>Vennligst logg inn!</h2>
      {error && <div>Feil brukernavn eller passord! </div>}
      <label>Brukernavn</label>
      <input
        type="text"
        required
        value={userName}
        onChange={e => setUsername(e.target.value)}
      />
      <label>Passord</label>
      <input
        type="password"
        required
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <button type="submit">Logg inn</button>
    </form>
  );
};

export default Login;
