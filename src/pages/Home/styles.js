import styled from "styled-components";

export const Container = styled.div`
  font-family: 'Poppins', serif;

  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 100px auto 80px;
  grid-template-areas:
    'header'
    'content'
    'footer';
  

  h1 {
    font-weight: 500;
  }


`;



export const Content = styled.div`
  grid-area: content;

  display: flex;
  flex-direction: column;

  justify-content: center;


.rectangle {
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

}



`;