import { Container } from './styles';

export function Button({children, ...props}) {
  return (
    <Container>
      {children}
    </Container>
  );
};