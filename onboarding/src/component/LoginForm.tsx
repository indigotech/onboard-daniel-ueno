import React, { useState } from "react";


export const LoginForm: React.FC = () => {

  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLogin(event.target.value);
  };

  const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
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
          type={"email"}
          name={"email"}
          value={login}
          onChange={handleLogin}
          placeholder="E-mail"
          required
          pattern="([a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$)"
          title={"O e-mail deve ser do tipo texto@texto.texto"}
        />
        <input
          type={"password"}
          name={"password"}
          value={password}
          onChange={handlePassword}
          placeholder="password"
          required
          pattern="(^(?=.*\d)(?=.*[a-zA-Z]).{8,}$)"
          title={"Sua senha deve ter no mínimo 8 caracteres, 1 letra e 1 dígito"}
        />
        <button>Entrar</button>
      </form>
    </div>
  );
};


