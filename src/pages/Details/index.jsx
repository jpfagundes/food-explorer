import { Container, Content } from "./styles";
import { useState, useEffect } from "react";
import { Button } from "../../components/Button";
import { ButtonTransparent } from "../../components/ButtonTransparent";
import { Header } from "../../components/Header";
import { HeaderAdmin } from "../../components/HeaderAdmin";
import { Footer } from "../../components/Footer";
import { useAuth } from "../../hooks/auth";
import { MdOutlineArrowBackIos } from "react-icons/md";
import { api } from "../../services/api";
import { useNavigate, useParams } from "react-router-dom";
import { Receipt } from "../../assets/icons/receipt";

export function Details(){
  const { user } = useAuth()
  const params = useParams()


  const [order, setOrder] = useState()

  const [ allQuantity, setAllQuantity ] = useState(0)

  const [ allOrders, setAllOrders ] = useState(() =>{
    const localData = localStorage.getItem("@dishes")
    return localData ? JSON.parse(localData) : []
  })
  const [quantity, setQuantity] = useState(1) 

  function handleAddQuantity(){
    setQuantity(prevState => prevState + 1)
  }

  function handleRemoveQuantity() {
    if(quantity <= 1){  
      setQuantity(1)
      return alert('Quantidade mínima é 1')
    }
    setQuantity(prevState => prevState - 1)
  }

  const navigate = useNavigate()


  const handleAllQuantity = () => {
    const order = {
      quantity: quantity,
      id: '01',
      name: 'Salada Ravanello',
      image: imageDish,
      description:'Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.',
      ingredients:[
        {
          id: '01',
          name:'alface',
          image:imageIngredients,
        },
        {
          id: '02',
          name:'alface',
          image:imageIngredients,
        },
        {
          id: '03',
          name:'alface',
          image:imageIngredients,
        },
        {
          id: '04',
          name:'alface',
          image:imageIngredients,
        },
      ],
      price: 'R$ 25,97'
    
    }

    const savedDishes = JSON.parse(localStorage.getItem("@dishes"))
    
    if(!savedDishes){
      setAllOrders(order)
    }
    
    const filteredSavedDishes = savedDishes.filter(p => p.id !== order.id)

    setAllOrders(filteredSavedDishes)

    setAllOrders(prevState =>[...prevState, order])

  }

  function handleBack(){
    navigate(-1)
  }

  const handleQuantity = () => {
    let sum = 0
    allOrders.forEach(dish => {
      sum += Number(dish.quantity)
    });
    setAllQuantity(sum)
  }

  useEffect(() => {
    const dish = JSON.parse(localStorage.getItem("@dishes"))

    if(dish){
      setAllOrders(dish)
      handleQuantity()
    }
  },[])

  useEffect(() => {
    localStorage.setItem("@dishes",JSON.stringify(allOrders))
    handleQuantity()

  },[allOrders])

  useEffect(()=> {
    const fetchOrder = async () => {
      const response = await api.get(`/dishes/${params.id}`)

      setOrder(response.data)
    }

    fetchOrder()
  },[])

  
  
  return (
    <Container>

      {user.admin ? <HeaderAdmin/> : <Header allQuantity={allQuantity}/>}

      <Content>

          <ButtonTransparent 
            Icon={MdOutlineArrowBackIos}
            iconSize={30}
            title='voltar'
            onClick={handleBack}
          />


        {order && 
        <div className="info-dish">
          <img src={`${api.defaults.baseURL}/dishes/${order.image}`}  alt="image dish" />

          <div className="infos">
            <h2>{order.name}</h2>
            <p>{order.description}</p>

            <li>
              {order.ingredients.map(ingredient => (
                <ul key={ingredient.id}>
                  <img src={`${api.defaults.baseURL}/${ingredient.image}`}  alt="ingredients" className="ingredients"/>
                  <h5>{ingredient.name}</h5>
                </ul>
              ))}

            </li>

            <div className="valueAndQuantity">
              <h4>R$ {order.price}</h4>

              <div className="quantity">
                <div>
                  <button onClick={handleRemoveQuantity}>
                   &minus;
                  </button>
                  <span>{quantity.toString().padStart(2,0)}</span>
                  <button onClick={handleAddQuantity}>
                    &#43;
                  </button>
                </div>
                <Button
                  icon={<Receipt />}
                  title='incluir'
                  onClick={handleAllQuantity}
                />
              </div>
            </div>
          </div>

        </div>
        }


      </Content>

      <Footer/>
    </Container>
  )
}