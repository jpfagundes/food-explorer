import { Heart } from "../../assets/icons/heart";
import { Button } from "../Button";
import { BoxCounter, ButtonMoreLess, Container, Counter } from "./styles";
import { Minus } from "../../assets/icons/minus";
import { Plus } from "../../assets/icons/plus";
import { useCallback, useEffect, useState } from "react";

export function Card({ title, span, price, image}) {
  const [counter, setCounter] = useState(1)
 
  function incrementCounter(){
    setCounter(counter + 1)
  }

  function decrementCounter(){
    if (counter > 1) {
      setCounter(counter - 1)
    }
  }
  
  return(
    <Container>
      <Heart />
      <div>
        { image ? (<img src={image} />) : null }
        <h1>{title}</h1>
        <span>{span}</span>
        <h2>{price}</h2>
      </div>
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
        title="incluir"
        />
      </BoxCounter>
    </Container>
  )
}