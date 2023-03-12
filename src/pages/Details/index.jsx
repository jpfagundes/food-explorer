import { Footer } from "../../components/Footer"
import { Header } from "../../components/Header"
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