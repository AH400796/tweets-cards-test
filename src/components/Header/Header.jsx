import { StyledHeader, Title, Wrapper, UpperTitle } from './Header.styled';
import { NavLink } from 'react-router-dom';
import Navigation from 'components/Navigation/Navigation';
import Container from 'components/Container/Container';
import Logo from 'components/Logo/Logo';

export default function HeaderSection() {
  return (
    <StyledHeader>
      <Container>
        <Wrapper>
          <NavLink to="/">
            <Logo />
          </NavLink>
          <Title>
            Famousts <UpperTitle>tweeters</UpperTitle>
          </Title>
          <Navigation />
        </Wrapper>
      </Container>
    </StyledHeader>
  );
}
