import { Container, Content } from "./styles";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { ButtonTransparent } from "../../components/ButtonTransparent";
import { MdOutlineArrowBackIos } from "react-icons/md"
import { useState } from "react";
import { useEffect } from "react";
import { api } from "../../services/api";
import { PayBox } from "../../components/PayBox";
import { useNavigate } from "react-router-dom";

export function Payment(){
  const [ value, setValue ] = useState(0)
  const navigate = useNavigate()

  const [ allOrders, setAllOrders ] = useState(() =>{
    const localData = localStorage.getItem("@foodexplorer:dish")
    return localData ? JSON.parse(localData) : []
  })

  function removeDish (id) {

    const filteredAllOrders = allOrders.filter(dish => dish.id !== id)

    setAllOrders(filteredAllOrders)

    localStorage.setItem("@foodexplorer:dishes", JSON.stringify(filteredAllOrders))
  }

  function handleHome(){
    navigate("/")
  }

  useEffect(()=> {
    let sum = 0
    allOrders.forEach(dish => {
      sum += Number(dish.quantity) * Number(dish.price.replace(',', '.'))
    });
    setValue(sum)
  },[allOrders])

  return(
    <Container>
      <Header />

      <Content >
          <div className="orders"> 
          <ButtonTransparent
            onClick={handleHome}
            Icon={MdOutlineArrowBackIos}
            iconSize={20}
            title='voltar'
          />
            <h1>Meu pedido</h1>

            <div className="scroll">
            { allOrders &&
                allOrders.map(order => (
                  <div key={order.id} className='foods'>
                    <img src={`${api.defaults.baseURL}/dishes/${order.image}`} alt="food image" />
                    <div>
                      <div className="infos">
                        <span className="quantity">{order.quantity} x</span>
                        <span className="name">{order.name}</span>
                        <span className="value"> R$ {order.price}</span>
                      </div>

                      <ButtonTransparent
                        title='Excluir'
                        onClick={() => removeDish(order.id)}
                      />
                    </div>
                </div>
                ))
            }
            <div className='foods'>
                    <img src="https://avatars.githubusercontent.com/u/79283163?v=4" alt="food image" />
                    <div>
                      <div className="infos">
                        <span className="quantity">1 x</span>
                        <span className="name">Salada Raddish</span>
                        <span className="value"> R$ 25,97</span>
                      </div>

                      <ButtonTransparent
                        title='Excluir'
                      />
                    </div>
                </div>
            </div>

            <h2>Total: R$ {value}</h2>
          </div>

          <div className="payment">
            <h1>Pagamento</h1>

            <PayBox
              status= "pending"
              allOrders={allOrders}
            />
          </div>

      </Content>

      <Footer />
    </Container>
  )
}