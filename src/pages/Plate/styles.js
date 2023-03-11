import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  font-family: 'Poppins', serif;

  display: flex;
  flex-direction: column;

`;

export const ButtonBack = styled.div`
  display: flex;
  font-weight: 500px;

  align-items: center;
`;


export const Content = styled.div`
 display: flex;

  h1 {
   font-size: 40px
  }
`;

export const Informations = styled.div`
`;

export const Description = styled.div`
  h1 {
    font-weight: 500; 
  }
`;

export const Ingredients = styled.div`
  img {
    width: 55px;
  }
`;

export const Price = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    font-family: 'Roboto', serif;
    color: ${({ theme }) => theme.COLORS.BLUE};
    font-size: 2rem;
    font-weight: 400;
  }

`;

export const ButtonMoreLess = styled.button`
  background: none;
  border: none;

`;

export const Counter = styled.div`
  display: flex;
  align-items: center;

  margin-right: 0.5rem;

  span {
    font-family: 'Roboto', serif;
    font-size: 20px;

    padding: 0 0.5rem;
  }
`;

export const BoxCounter = styled.div`
  width: 100%;

  padding: 0 2rem;

  display: flex;
  flex: 1;

  align-items: center;
`;