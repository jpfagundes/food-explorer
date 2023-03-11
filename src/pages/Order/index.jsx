import { Container, Content, Methods, MyOrder, Paybox, Payment } from "./styles";
import Ravanello from "../../assets/images/ravanello.png"
import { Pix } from "../../assets/icons/pix"
import { Credit } from "../../assets/icons/credit"
import { Clock } from "../../assets/icons/clock"
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";

export function Order(){
  return(
    <Container>
      <Header />
      <MyOrder>
      <h1>Meu Pedido</h1>
      <div>
        <img src={Ravanello} alt="" />
        <h1>1 x Salada Radish</h1>
        <h2> R$ 25,97</h2>
        <span>Excluir</span>
      </div>
      <h1>Total: R$ 103,88</h1>
      </MyOrder>

      <Payment>
        <h1>Pagamento</h1>
        <Paybox>
          <Methods>
            <button>
              <Pix />
              <p>PIX</p>
            </button>
            <button>
              <Credit />
              <p>Crédito</p>
            </button>
          </Methods>
          <Content>
            <Clock />
            <span>Aguardando pagamento no caixa</span>
          </Content>
        </Paybox>
      </Payment>

      <Footer />
    </Container>
  )
}