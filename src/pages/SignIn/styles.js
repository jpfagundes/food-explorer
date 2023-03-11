import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-around;
  
  `;

export const Logo = styled.div`
  display: flex;
  align-items: center;

  font-family: 'Roboto', serif;
  font-weight: 700;

  h1 {
    font-size: 25.11px;
    height: 29px;
  }

  svg {
    margin-right: 12px;
  }

`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  align-items: center;
  text-align: center;

  gap: 32px;
  padding: 64px;

  width: 476px;
  height: 544px;

  border-radius: 16px;

  background: ${({ theme }) => theme.COLORS.BACKGROUND_FORM};
    
  h1 {
    font-family: 'Poppins', serif;
    font-weight: 500;
    font-size: 32px;
  }

  span {
    margin-bottom: 8px;
  }
  
  input {
    font-family: 'Roboto', serif;
    font-weight: 400;
    font-size: 16px;
  }

  > div span {
    font-family: 'Roboto', serif;
    display: flex;
  }

  a {
    color: #fff;
    font-family: 'Poppins', serif;
    font-weight: 500;
    font-size: 14px;
  }
`;
