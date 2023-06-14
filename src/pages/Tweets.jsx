import { Wrapper } from './pages.styled';
import TweetersList from 'components/TweetersList/TweetersList';
import Container from 'components/Container/Container';
import Section from 'components/Section/Section';

export default function Tweets() {
  return (
    <Wrapper>
      <Section>
        <Container>
          <TweetersList />
        </Container>
      </Section>
    </Wrapper>
  );
}
