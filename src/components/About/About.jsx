import { Link } from 'react-router-dom';
import { Wrapper, Title } from './About.styled';

export default function About() {
  return (
    <Wrapper>
      <Title>Social networks around us</Title>
      <p>
        Hi! Now all the people of the world are confused on social networks,
        they are almost everywhere: on mobile phones, tablets, computers,
        televisions and other gadgets such as electronic watches, bracelets,
        auto-navigators and other. Social networks have become an integral part
        of a each person. From them we can learn almost everything important and
        unimportant: weather, news, people's mood, emotions, dreams, plans,
        secrets...
      </p>
      <p>
        Famous people are also no exception - all of them undeniably use social
        networks, winning thousands of fans and followers with their posts, to
        whom the veil of their personal lives is opened through their posts. Do
        you know some of the most popular tweeters? No? Then come{' '}
        <Link to="/tweets">
          <strong>here</strong>
        </Link>{' '}
        and find out who of the world's celebrities are biggest social networks
        users!
      </p>
    </Wrapper>
  );
}
