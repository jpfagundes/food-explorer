import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { api } from "../../services/api";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Container, Form, Logo } from "./styles";
import { ButtonText } from "../../components/ButtonText";

export function SignUp(){
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  function handleSignUp(){
    if(!name || !email || !password){
      return alert("Preencha todos os campos!");
    }

    api.post("/users", { name, email, password })
    .then(() => {
      alert("Usuário cadastrado com sucesso!");
      navigate("/");
    })
    .catch(error => {
      if(error.response){
        alert(error.response.data.message);
      }else {
        alert("Não foi possível cadastrar.");
      }
    });
  }

  return (
    <Container>
      <Logo>
        <svg width="44" height="48" viewBox="0 0 44 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M22.0318 0.216492L43.4349 12.0918V35.8425L22.0318 47.7179L0.628698 35.8425V12.0918L22.0318 0.216492Z" fill="#065E7C"/>
        </svg>

          <h1>food explorer</h1>
      </Logo>
      <Form>
        <h1>Crie sua conta</h1>
        <div>
          <span>Seu nome</span>
          <Input 
          placeholder="Exemplo: Maria da Silva"
          type="text" 
          onChange={e => setName(e.target.value)}
          />
        </div>

        <div>
          <span>Email</span>
          <Input 
          placeholder="Exemplo: exemplo@exemplo.com.br"
          type="email"
          onChange={e => setEmail(e.target.value)}
          />
        </div>
        
        <div>
          <span>Senha</span>
          <Input 
          placeholder="No mínimo 6 caracteres"
          type="password"
          onChange={e => setPassword(e.target.value)}
          />
        </div>
        
        <Button 
        title="Criar conta"
        onClick={handleSignUp}
        />

        <Link to="/">
        Já tenho uma conta
        </Link>
      </Form>

    </Container>
  );
}