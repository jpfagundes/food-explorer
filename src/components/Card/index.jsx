import { AiFillHeart, AiOutlineHeart} from 'react-icons/ai'
import { Button } from "../Button";
import { BoxCounter, ButtonMoreLess, Container, Counter } from "./styles";
import { Minus } from "../../assets/icons/minus";
import { Plus } from "../../assets/icons/plus";
import { useState } from "react";
import { ButtonTransparent } from "../ButtonTransparent";

export function Card({ title, description, price, image}) {
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

      <ButtonTransparent 
      Icon={AiOutlineHeart}
      className='icon'
      iconSize={30}
      />
      <div>
        { image ? (<img src={image} />) : null }
        <h1>{title}</h1>
        <span>{description}</span>
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