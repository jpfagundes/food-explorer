import styled from "styled-components";

export const Container = styled.div`

  width: 100%;
  height: 100vh;
  
  main {
    font-family: 'Roboto', serif;
  }

   button input {
    background: rgba(255, 255, 255, 0.1);
    opacity: 0.8;
    border: 1px solid #FFFFFF;
    border-radius: 5px;
  }


`;

export const HeaderAdmin = styled.div`
  font-family: 'Roboto',serif;
  font-weight: 700;

  display: flex;

  justify-content: space-between;
  align-items: center;

  margin-bottom: 2rem;
  padding: 0 1rem;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_HEADER};


  p {
    font-weight: 400;
    margin: 0 1rem;
  }

`;

export const Logo = styled.div`
  display: flex;

  h1 {
    font-size: 1.5694rem;
    height: 1.8125rem;
  }

  > svg {
    font-size: 1rem;
    margin-right: 0.75rem;
  }

  @media (max-width: 26rem) {
    > h1 {
      display: none;
    }
  }
`;

export const Logout = styled.button`
  border: none;
  background: none;

  margin-left: 2rem;

`;

export const ButtonBack = styled.div`
  display: flex;

  align-items: center;
`;

export const AddPlate = styled.button`
  font-family: 'Poppins', serif ;
  font-weight: 500;

  background: rgba(255, 255, 255, 0.1);
  opacity: 0.8;
  border: 1px solid #FFFFFF;
  border-radius: 5px;

  color: #FFF;

  padding: 0.75rem 2rem;
`;