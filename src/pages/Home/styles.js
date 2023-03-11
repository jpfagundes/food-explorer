import styled from "styled-components";

export const Container = styled.div`
  grid-area: content;
  font-family: 'Poppins', serif;

  h1 {
    font-weight: 500;
  }


`;

export const Rectangle = styled.div`
  display: flex;
  flex: 1;

  max-width: 70rem;
  
  margin: 0 auto;
  
  border-radius: 8px;
  
  background: linear-gradient(180deg, #091E26 0%, #00131C 100%);

  div img {
    width: 150%;
    height: 50%;


    overflow: visible;
  }
  
  
  `;

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;



`;