import { BoxCounter, ButtonBack, ButtonMoreLess, Container, Content, Counter, Description, Informations, Ingredients, Price } from "./styles";
import { Back } from "../../assets/icons/back"
import Ravanello from "../../assets/images/ravanello.png"
import Alface from "../../assets/images/alface.png"
import { Minus } from "../../assets/icons/minus";
import { Plus } from "../../assets/icons/plus";
import { useState } from "react";
import { Button } from "../../components/Button";
import { Receipt } from "../../assets/icons/receipt"
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";

export function Plate(){
  const [counter, setCounter] = useState(1)
 
  function incrementCounter(){
    setCounter(counter + 1)
  }

  function decrementCounter(){
    if (counter > 1) {
      setCounter(counter - 1)
    }
  }
  
  
  return (
    <Container>
      <Header />
      <ButtonBack>
        <Back />
        <h2>voltar</h2>
      </ButtonBack>
      <Content>
        <img src={Ravanello} alt="" />
        <Informations>
          <Description>
          <h1>Salada Ravanello</h1>
          <span>Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.</span>
          </Description>
          <Ingredients>
            <img src={Alface} alt="" />
            <img src={Alface} alt="" />
            <img src={Alface} alt="" />
            <img src={Alface} alt="" />
          </Ingredients>
          <Price>
            <h1>R$ 25,97</h1>
            <BoxCounter>
              <Counter>
                <ButtonMoreLess onClick={decrementCounter}>
                  <Minus />
                </ButtonMoreLess>
                <span>
                  {counter}
                </span>
                <ButtonMoreLess onClick={incrementCounter}>
                  <Plus />
                </ButtonMoreLess>
              </Counter>
              <Button 
                icon={<Receipt />}
                title="incluir"
              />
            </BoxCounter>
          </Price>
        </Informations>
      </Content>
      <Footer />
    </Container>
  )
}