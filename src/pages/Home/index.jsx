
import { useState } from "react";
import Fruits from "../../assets/images/fruits.png";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { HeaderAdmin } from "../../components/HeaderAdmin";
import { Section } from "../../components/Section";
import { useAuth } from "../../hooks/auth";
import { Container, Content } from "./styles";

export function Home(){
  const { user } = useAuth

  return (
    <Container>
      <Header />
        <Content>
      <div className="rectangle">
        <img src={Fruits} alt="" />
          <h1>Sabores inigualáveis</h1>
          <span>Sinta o cuidado do preparo com ingredientes selecionados </span>
      </div>

 
        </Content>
      <Footer />
    </Container>
  )
}