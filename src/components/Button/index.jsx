import { Container } from "./styles";

export function Button({title, icon, loading = false, ...rest }){
  return (
    <Container 
      type="button"
      disabled={loading}
      {...rest}
      >
        { icon ? icon : null}
        { loading ? "Carregando..." : title}
    </Container>
  );
}