import { Wrapper } from './pages.styled';
import About from 'components/About/About';
import Container from 'components/Container/Container';
import Section from 'components/Section/Section';

export default function Footer() {
  return (
    <Wrapper>
      <Section>
        <Container>
          <About />
        </Container>
      </Section>
    </Wrapper>
  );
}
