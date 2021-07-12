import React, { useState } from "react";


export const LoginForm: React.FC = () => {

  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setLogin(event.target.value);
  };

  const handlePassword = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setPassword(event.target.value);
  }; 

  const signIn = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    console.log("login:", login, "\npassword:", password);
    //fazer as coisas depois
    //cleanFields()
  };

  return (
    <div>
      <form onSubmit={signIn}>
        <input
          name={"email"}
          value={login}
          onChange={handleLogin}
          placeholder="E-mail"
          required
          title={"O e-mail deve ser do tipo texto@texto.texto"}
        />
        <input
          name={"password"}
          value={password}
          onChange={handlePassword}
          placeholder="password"
          required
        />
        <button>Entrar</button>
      </form>
    </div>
  );
};


