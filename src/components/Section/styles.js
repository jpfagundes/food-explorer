import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  color: white;
  font-size: 40px;

  h1 {
    margin: 40px 0;
    line-height: 44px;
    font-size: 14px;
    font-weight: 500;
    font-family: ${({ theme }) => theme.COLORS.WHITE};
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