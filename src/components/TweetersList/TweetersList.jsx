import { useState, useEffect } from 'react';
import { useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getTweeters } from 'services/api';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { notify } from 'helpers/notification';

import {
  CardsWrapper,
  Wrapper,
  ButtonsWrapper,
  Title,
  BackButtons,
  LoadMoreButtons,
  StyledLabel,
} from './TweetersList.styled';
import TweeterCard from 'components/TweeterCard/TweeterCard';

export default function TweetsList() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [tweeters, setTweeters] = useState([]);
  const [limit, setLimit] = useState(3);
  const loadMoreButtonRef = useRef(null);

  useEffect(() => {
    setSearchParams({ page: 1, limit });
  }, [searchParams, setSearchParams, limit]);

  useEffect(() => {
    (async () => {
      try {
        const response = await getTweeters(searchParams);
        setTweeters(response.data);
      } catch (error) {
        notify('error', 'Sorry, something goes wrong...');
      }
    })();
  }, [searchParams]);

  const handleLoadMore = () => {
    setLimit(prevState => prevState + 3);
    loadMoreButtonRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const handleChange = () => {};

  return (
    <Wrapper>
      <Title>Famousts tweeters</Title>

      <CardsWrapper>
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
      </CardsWrapper>
      <ButtonsWrapper>
        <BackButtons to="/">
          <AiOutlineArrowLeft size={25} color="inherit" />
          Back
        </BackButtons>
        <StyledLabel>
          Filter tweeters?
          <select name="tweeters" onChange={handleChange}>
            <option value="show all">show all</option>
            <option value="follow,">follow</option>
            <option value="followings">followings</option>
          </select>
        </StyledLabel>
        <LoadMoreButtons
          type="buttons"
          ref={loadMoreButtonRef}
          onClick={handleLoadMore}
        >
          Load more...
        </LoadMoreButtons>
      </ButtonsWrapper>
    </Wrapper>
  );
}
