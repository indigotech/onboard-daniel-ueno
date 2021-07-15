import { ApolloError, useMutation } from "@apollo/client";
import React, { useState } from "react";
import { loginGql } from "../services/loginRequest";


export const LoginForm: React.FC = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login] = useMutation(loginGql,{
    onError: (error:ApolloError)=>{alert(error.message)},
    onCompleted: (data)=> {
      localStorage.setItem("token",data.login.token)
    }
  });

  const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };
  const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  }; 

  const signIn = async (event:React.FormEvent) => {
    event.preventDefault();
    await login({variables: {email: email, password:password}})
    if(localStorage.getItem("token")){
      setEmail("")
      setPassword("")
    }
  };

  return (
    <div>
      <form onSubmit={signIn}>
        <input
          type={"email"}
          name={"email"}
          value={email}
          onChange={handleEmail}
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


