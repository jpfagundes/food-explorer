import { Container } from "./styles";

import { api } from "../../services/api";
import { ButtonTransparent } from "../ButtonTransparent";
import { TbTrash } from "react-icons/tb"
import { useNavigate } from "react-router-dom";

export function AdminCard({title, image, id, description, price , ...rest}) {

  const navigate = useNavigate()

  function handleDetails() {
    navigate(`/edit/${id}`)
  }

  async function handleDelete() {
    try{
      await api.delete(`/dishes/${id}`)

      alert("Prato deletado.")
      
      return navigate("/")

    } catch {
      return alert("Erro, favor tentar novamente.")
    }

  }

  return (
    <Container>
      <ButtonTransparent
        Icon={TbTrash}
        className='icon'
        iconSize={20}
        iconColor='red'
        onClick={handleDelete}
      />

      <img src={`${api.defaults.baseURL}/dishes/${image}`} alt="dish image" />
      
      <ButtonTransparent
        className='name'
        title={title}
        onClick={handleDetails}

      />
      <p>{description}</p>

      <h4>R$ {price}</h4>
    </Container>
  )
}