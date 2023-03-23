import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  color: white;
  font-size: 40px;

  h1 {
    font-family: ${({ theme }) => theme.COLORS.WHITE};
    font-size: 2rem;
    font-weight: 500;
    margin: 20px 0;
  }
  .rec-arrow {
    color: #fff !important;
    background-color: transparent !important;
    box-shadow: none !important;
  }
  .rec-arrow:hover {
    color: ${({ theme }) => theme.COLORS.BLUE} !important;
  }
`