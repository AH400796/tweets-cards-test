import { useState, useEffect } from 'react';
import { getTweeters } from 'services/api';

import { Wrapper } from './TweetersList.styled';
import TweeterCard from 'components/TweeterCard/TweeterCard';

export default function TweetsList() {
  const [tweeters, setTweeters] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await getTweeters();
      setTweeters(response.data);
    })();
  }, []);

  return (
    <Wrapper>
      {tweeters.map(tweeter => {
        const { id, user, tweets, followers, avatar } = tweeter;
        return (
          <TweeterCard
            key={id}
            user={user}
            tweets={tweets}
            followers={followers}
            avatar={avatar}
          />
        );
      })}
    </Wrapper>
  );
}
