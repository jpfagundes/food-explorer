import styled from "styled-components";

export const Container = styled.div`
  max-width: 300px;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5rem;
  gap: 16px;

  background: rgba(0, 0, 0, 0.32);
  border: 1px solid rgba(0, 0, 0, 0.65);
  border-radius: 8px;

  .icon {
    align-self: flex-end;
    margin-right: 15px;
  }
  img {
    width: 200px;
  }

  .name {
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    font-size: 24px;
  }

  p {
    font-family: 'Roboto', sans-serif;
    text-align: center;
    font-size: 14px;
    color: ${({ theme }) => theme.COLORS.GRAY};
  }

  h4 {
    font-family: 'Roboto', sans-serif;
    color: #82f3ff;
    font-size: 2rem;
    line-height: 50px;
    font-weight: 400;
  }

  .quantity {
    display: flex;
    gap: 20px;
    padding: 0rem 5rem;
    > div {
      display: flex;
      font-size: 3rem;
      justify-content: center;
      align-items: center;
      gap: 10px;
      font-weight: 700;

      > button {
        background: none;
        border: none;
        color: ${({ theme }) => theme.COLORS.WHITE};
      }
    }
  }
`;