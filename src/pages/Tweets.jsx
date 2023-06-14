import { Wrapper } from './pages.styled';
import TweetsList from 'components/TweetsList/TweetsList';
import Container from 'components/Container/Container';
import Section from 'components/Section/Section';

export default function Tweets() {
  return (
    <Wrapper>
      <Section>
        <Container>
          <TweetsList />
        </Container>
      </Section>
    </Wrapper>
  );
}
