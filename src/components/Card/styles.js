 import styled from "styled-components";

export const Container = styled.div`
  width: 300px;
  height: 512px;

  display: flex;
  text-align: center;
  flex-direction: column;
  align-items: center;

  gap: 16px;
  margin: 0.5rem 1rem ;
  
  background: rgba(0, 0, 0, 0.32);
  border: 1px solid rgba(0, 0, 0, 0.65);
  
  border-radius: 8px;

  svg {
    align-self: flex-end;
  }

  h1 {
    font-family: 'Poppins', serif;
    font-weight: 700;
    font-size: 24px;
    color: ${({ theme }) => theme.COLORS.WHITE}
  }

  span, h2 {
    font-family: 'Roboto', serif;
    font-weight: 400;
  }

  h2 {
    font-size: 32px;
    color: ${({ theme }) => theme.COLORS.BLUE}
  }

  div {
    img {
      width: 176px;
      height: 176px;

      margin-bottom: 16px;
    }
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