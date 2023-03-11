import { useState } from "react";
import { FiUpload } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

import { useAuth } from "../../hooks/auth";
import { Input } from "../../components/Input";
import { Back } from "../../assets/icons/back";
import { Footer } from "../../components/Footer";
import { TextArea } from "../../components/TextArea";
import { IngredientItem } from "../../components/IngredientItem";
import { Container, HeaderAdmin, Logo, Logout, ButtonBack, AddPlate } from "./styles";

import { api } from "../../services/api";

export function New(){
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  const [ingredients, setIngredients] = useState([]);
  const [newIngredient, setNewIngredient] = useState("");

  const navigate = useNavigate();

  function handleAddIngredient() {
    setIngredients(prevState => [...prevState, newIngredient]);
    setNewIngredient("");
  }

  function handleRemoveIngredient(deleted) {
    setIngredients(prevState => prevState.filter(ingredient => ingredient !== deleted));
  }

  async function handleNewPlate() {
    if(!name || !description || !price){
      return alert("Preencha todos os campos!");
    }

    await api.post("/plates", {
      name, 
      ingredients,
      price,
      description
    }).then(() => {
      alert("Prato criado com sucesso!");
      navigate("/");
    })
    .catch(error => {
      alert("Não foi possível cadastrar.");
    });
  }

  const { signOut } = useAuth();

  return (
    <Container>
      <HeaderAdmin>
        <div>
          <Logo>
            <svg width="26" height="30" viewBox="0 0 26 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13.0635 0.306641L25.7096 7.60782V22.2102L13.0635 29.5114L0.417527 22.2102V7.60782L13.0635 0.306641Z" fill="#065E7C"/>
            </svg>
            <h1>food explorer</h1>
          </Logo>
        </div>
        
        <div style={{
          display: 'flex',
        }}>
        <p>Administrador</p>

        <Logout onClick={signOut}>
        <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M18.2112 6.75L23.4612 12M23.4612 12L18.2112 17.25M23.4612 12H9.46118M9.46118 23H2.46118C2.19597 23 1.94161 22.8946 1.75408 22.7071C1.56654 22.5196 1.46118 22.2652 1.46118 22V2C1.46118 1.73478 1.56654 1.48043 1.75408 1.29289C1.94161 1.10536 2.19597 1 2.46118 1H9.46118" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        </Logout>
        </div>
      </HeaderAdmin>

      <main>
        <ButtonBack>
          <Back />
          <h2>voltar</h2>
        </ButtonBack>

        <h2>Editar Prato</h2>

          <div class="addImage">
            <span>Imagem do prato</span>
            <Input icon={<FiUpload />}
            type="file"
            placeholder="Selecione a imagem"
            />
          </div>

          <div>
            <span>Nome</span>
            <Input 
            placeholder="Ex.: Salada Ceasar"
            onChange={e => setName(e.target.value)} 
            />
          </div>
          
          {
            ingredients.map((ingredient, index) => (
              <IngredientItem 
                key={String(index)}
                value={ingredient}
                onClick={() => handleRemoveIngredient(ingredient)}
              />
            ))
          }

          <IngredientItem  
          isNew
          value={newIngredient}
          onChange= { e => setNewIngredient(e.target.value)}
          onClick={handleAddIngredient}
          />

          <div>
            <span>Preço</span>
            <Input 
            placeholder="R$ 00,00"
            onChange={e => setPrice(e.target.value)}
            />
          </div>

          <div>
            <span>Descrição</span>
            <TextArea 
            placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
            onChange={e => setDescription(e.target.value)}
            />
          </div>

        <AddPlate onClick={handleNewPlate}>
          Adicionar pedido
        </AddPlate>
      </main>

      <Footer />
    </Container>
  )
}