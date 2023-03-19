import styled from "styled-components";

export const Container = styled.div`

  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 100px auto 80px;

  grid-template-areas: 
    "header"
    "content"
    "footer";
  
  main {
    font-family: 'Roboto', serif;
    margin: 0 10px;
    display: flex;
    flex-direction: column;
  }

   button input {
    background: rgba(255, 255, 255, 0.1);
    opacity: 0.8;
    border: 1px solid #FFFFFF;
    border-radius: 5px;
  }

  span, p {
    margin-bottom: 8px;
  }

  h2 {
    margin: 10px 0;
  }

  .wrapper {
    display: flex;
    gap: 30px;
    width: 100%;
  }

  .files {
    display: flex;
    flex-direction: column;

    input[type='file']{
      display: none;
    }

    label {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 5px;
      padding: 10px;

      border: 1px solid ${({ theme }) => theme.COLORS.WHITE};
      border-radius: 5px;

      font-size: 12px;
      font-weight: 500;
      line-height: 24px;  

      cursor: pointer;
    }
  }

  .select {
    width: fit-content;
    display: flex;
    flex-direction: column;

    line-height: 16px;

    select {
      background: none;
      height: 51px;
      border: 1px solid ${({ theme }) => theme.COLORS.WHITE};
      border-radius: 5px;
      color: ${({ theme }) => theme.COLORS.WHITE};
      padding: 10px 10px;
    }

    option {
      background-color: #192227;
    }

    }

    .ingredients {
    width: 100%;

    display: flex;
    flex-direction: column;

    line-height: 16px;
  }

  .tags {
    display: flex;
    min-height: 48px;
    flex-wrap: wrap;
    gap: 10px;
    background: transparent;
    padding: 5px;

    border: 1px solid ${({ theme }) => theme.COLORS.WHITE};
    border-radius: 5px;
  }

  .addDish {
  font-family: 'Poppins', serif ;
  font-weight: 500;

  width: 30%;
  align-self: flex-end;

  background: rgba(255, 255, 255, 0.1);
  opacity: 0.8;
  border: 1px solid #FFFFFF;
  border-radius: 5px;

  margin-bottom: 8px;

  color: #FFF;

  padding: 0.75rem 2rem;
  }

`;