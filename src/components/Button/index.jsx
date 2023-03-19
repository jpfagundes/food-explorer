import { Container } from "./styles";
import { useAuth } from "../../hooks/auth"

export function Button({title, icon, ...rest }){
  const {loading} = useAuth()
  return (
    <Container 
      type="button"
      disabled={loading === true ? true : false}
      loading={loading === true ? true : false}
      {...rest}
      >
        { icon ? icon : null }
        {loading === true ? "Carregando" : title}
    </Container>
  );
}