import { useState } from "react";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Container, Form, Logo } from "./styles";
import { useAuth } from "../../hooks/auth";

export function SignIn(){
  const [email, setEmail ] = useState("");
  const [password, setPassword ] = useState("");

  const { signIn } = useAuth();

  function handleSignIn(){
    signIn({ email, password });
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
        <h1>Faça login</h1>
        <div>
          <span>Email</span>
          <Input 
          placeholder="Exemplo: exemplo@exemplo.com.br"
          type="text" 
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
          title="Entrar"
          onClick={handleSignIn}
        />

        <a href="/register"> Criar uma conta</a>
      </Form>
    </Container>
  );
}