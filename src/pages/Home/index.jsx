
import Fruits from "../../assets/images/fruits.png";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Section } from "../../components/Section/main";
import { Container, Content, Rectangle } from "./styles";

export function Home(){
  return (
    <Container>
      <Header />
      <Rectangle>
        <img src={Fruits} alt="" />
        <Content>
          <h1>Sabores inigualáveis</h1>
          <span>Sinta o cuidado do preparo com ingredientes selecionados </span>
        </Content>
      </Rectangle>
      <Section 
      title="Pratos Principais"
      />
      <Section 
      title="Sobremesas"
      />
      <Section 
      title="Bebidas"
      />
 
      <Footer />
    </Container>
  )
}