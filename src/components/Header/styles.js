import styled from "styled-components";

export const Container = styled.header`
  grid-area: header;

  font-family: 'Roboto',serif;
  font-weight: 700;

  display: flex;
  flex: 1;

  justify-content: center;
  align-items: center;

  margin-bottom: 2rem;
  padding: 0 1rem;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_HEADER};

`;

export const Logo = styled.div`
  display: flex;

  h1 {
    font-size: 25.11px;
    height: 29px;
  }

  > svg {
    font-size: 16px;
    margin-right: 12px;
  }

  @media (max-width: 700px) {
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
