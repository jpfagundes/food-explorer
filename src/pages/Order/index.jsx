import { Container } from "./styles";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import Ravanello from "../../assets/images/ravanello.png"

export function Order(){
  return(
    <Container>
      <Header />
      <div style={{
            display: 'flex',
            justifyContent: 'space-evenly',
        }}>
        <div>
          <h1>Meu pedido</h1>

          <div style={{
            display: 'flex'
          }}>
            <img src={Ravanello} alt="" />
            <h2>1 x Salada Raddish</h2>
            <p>R$ 25,97</p>
            <span>Excluir</span>
          </div>

          <h2>Total: R$ 103,88</h2>
        </div>

        <div>
          <h1>Pagamento</h1>
        </div>

      </div>




      <Footer />
    </Container>
  )
}