import { Carousel, Container } from "./styles";
import { Card } from "../../components/Card";
import Parma from "../../assets/images/parma.png";
import Ravanello from "../../assets/images/ravanello.png";
import Gambe from "../../assets/images/gambe.png";
import Molla from "../../assets/images/molla.png";
import Prugna from "../../assets/images/prugna.png";

export function Section({ title, ...rest}) {
  return(
  <Container>
    <h1>{title}</h1>
    <Carousel>
      <Card 
        image={Ravanello}
        title="Salada Ravanello >"
        span="Rabanetes, folhas verdes e molho agridoce salpicados com gergelim."
        price="R$ 49,97" 
        />
      <Card 
        image={Parma}
        title="Torradas de parma >"
        span="Presunto de parma e rúcula em um pão com fermentação natural."
        price="R$ 25,97"
      />
      <Card 
        image={Gambe}
        title="Spaguetti Gambe >"
        span="Massa fresca com camarões e pesto."
        price="R$ 79,97"
      />
        <Card 
          image={Molla}
          title="Salada Molla  >"
          span="Tomates, coentro, pepino, cebola roxa. Frescos e temperados."
          price="R$ 19,97"
        />     
      <Card 
        image={Prugna}
        title="Prugna Pie >"
        span="Torta de ameixa com massa amanteigada, polvilho em açúcar."
        price="R$ 49,97"
      />

    </Carousel>
  </Container>

  )
}