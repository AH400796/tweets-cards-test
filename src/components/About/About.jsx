import { Link } from 'react-router-dom';
import { Wrapper } from './About.styled';

export default function About() {
  return (
    <Wrapper>
      <p>
        Hi! Now all the people of the world are confused on social networks,
        they are almost everywhere: on mobile phones, tablets, computers,
        televisions and other gadgets such as electronic watches, bracelets,
        auto-navigators. In a word, social networks have become an integral part
        of a person. From them we can learn almost everything important and
        unimportant: weather, news, people's mood, emotions, dreams, plans,
        secrets...
      </p>
      <p>
        One of the largest and most popular social networks is Twitter. And do
        you know some of the most popular tweeters? No? Then come{' '}
        <Link to="/tweets">
          <strong>here</strong>
        </Link>{' '}
        and and find out which of the world's celebrities are fans of Twitter!
      </p>
    </Wrapper>
  );
}
