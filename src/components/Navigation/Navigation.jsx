import { StyledLink, Wrapper } from './Navigation.styled';

export default function Navigation() {
  return (
    <Wrapper>
      <StyledLink to="/">Home</StyledLink>
      <StyledLink to="/tweets">Tweets</StyledLink>
    </Wrapper>
  );
}
