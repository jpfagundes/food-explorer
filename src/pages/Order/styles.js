import styled from "styled-components";

export const Container = styled.div`
font-family: 'Poppins', serif;

justify-content: space-evenly;


h1 {
font-weight: 500;
}

h2, span {
  font-weight: 400;
}

div span {
  color: ${({ theme }) => theme.COLORS.PINK};
}

`;

export const MyOrder = styled.div`

  h1 {
    margin-bottom: 2rem;
  }

  h2 {
    font-family: 'Roboto', serif;
    font-size: 1.2rem;
    color: ${({ theme }) => theme.COLORS.GRAY_CARD};

  }

  img {
    width: 72px;
  }

  div {
    display: flex;

    h1 {
      margin: 0 0.5rem
    }
  }

`;

export const Payment = styled.div`

`;

export const Methods = styled.div`
 display: flex;
`;

export const Paybox = styled.div`


  button {
    width: 265px; 
    height: 81px;

    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);

    color: ${({ theme }) => theme.COLORS.WHITE};

    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 8px 8px 0 0;

    p {
      margin-left: 0.5rem;
    }

    &:disabled{
      background: #000C12;
    }

  }

  border: 1px solid rgba(255, 255, 255, 0.1);
  width: 530px; 
  height: 445px;

  border-radius: 8px 8px 0;

  span {
    color: ${({ theme }) => theme.COLORS.GRAY_CARD};
    font-size: 24px;
  }

`;

export const Content = styled.div`
  min-height: 300px;
  max-height: 368px;

  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: space-evenly;

`;