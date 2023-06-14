import { StyledFooter, FooterText } from './Footer.styled';
import Container from 'components/Container/Container';

export default function Footer() {
  return (
    <StyledFooter>
      <Container>
        <FooterText>
          © 2023 <b>All rights reserved</b>
        </FooterText>
      </Container>
    </StyledFooter>
  );
}
