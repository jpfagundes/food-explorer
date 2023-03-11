import { Button } from "../../components/Button"
import { ButtonText } from "../../components/ButtonText"
import { Card } from "../../components/Card"
import { Footer } from "../../components/Footer"
import { Header } from "../../components/Header"
import { Input } from "../../components/Input"
import { Home } from "../Home"
import { Order } from "../Order"
import { Plate } from "../Plate"
import { SignIn } from "../SignIn"
import { SignUp } from "../SingUp"
import { Container } from "./styles"

export function Details(){
  return(
    <Container>
      <Header />
      <SignUp />
      <Footer />
    </Container>
  )
}