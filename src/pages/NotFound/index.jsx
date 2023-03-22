import { Container } from "./styles";
import { useNavigate } from "react-router-dom";
import Image404 from "../../assets/images/404.png";


export function NotFound() {

  const navigate = useNavigate();

  function handleHome() {
    navigate("/")
  }

  function handlePayment() {
    navigate("/payment")
  }


  return(
    <Container >

      <div className="image">
        <img src={Image404} alt="" />

      </div>

      <div className="text">
      <h1>Oops!</h1>
      <h2>Não encontramos a página.</h2>

      <p>Talvez você possa encontrar o que precisa aqui:</p>
        <div className="buttons">
          <button onClick={handleHome}>
            Home
          </button>
          <button onClick={handlePayment}>
            Meu pedido
          </button>
        </div>
      </div>

    </Container>
  )
}