import { Container } from "./styles";
import Carousel from "react-elastic-carousel";

export function Section({ title, children}) {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 910, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];

  return(
  <Container>
      <h1>{title}</h1>

      <Carousel
        breakPoints={breakPoints}
        pagination={false}
      >
        {children}
      </Carousel>
      
    </Container>

  )
}