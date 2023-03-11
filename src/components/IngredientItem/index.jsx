import { FiPlus, FiX } from 'react-icons/fi'; 

import { Container } from './sytles';

export function IngredientItem({ isNew = false, value, onClick, ...rest}) {
  return (
    <Container isNew={isNew}>
    <input 
    type="text" 
    value={value}
    readOnly={!isNew}
    placeholder="Adicionar"
    {...rest}
    />

    <button
    type="button"
    onClick={onClick}
    >
      {isNew ? <FiPlus /> : <FiX />}
    </button>

  </Container>
  )
}