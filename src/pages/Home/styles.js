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
`;



export const Content = styled.div`
  grid-area: content;
  margin: 30px auto;

  width: 100%;


.banner {
  display: flex;
  flex: 1;

  justify-content: flex-end;
  align-items: center;

  max-width: 70rem;
  
  margin: 0 auto;
  
  border-radius: 8px;
  
  background: linear-gradient(180deg, #091E26 0%, #00131C 100%);


  div img {
    width: 150%;
    height: 50%;
  }

}
`;