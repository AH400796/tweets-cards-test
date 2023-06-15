import { StyledLink, Wrapper } from './Navigation.styled';

export default function Navigation() {
  return (
    <Wrapper>
      <StyledLink to="/" end>
        Home
      </StyledLink>
      <StyledLink to="/tweets" end>
        Tweets
      </StyledLink>
    </Wrapper>
  );
}
