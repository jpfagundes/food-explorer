import styled from 'styled-components'

export const Container = styled.button`
  background: transparent;
  border: none;

  display: flex;
  gap: 5px;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-family: 'Poppins', serif;
  font-weight: 700;
  font-size: 24px;
  color: ${({ theme }) => theme.COLORS.WHITE};
`
