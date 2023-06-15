import { useState, useEffect } from 'react';
import { useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getTweeters } from 'services/api';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { notify } from 'helpers/notification';

import {
  CardsWrapper,
  CardsList,
  Wrapper,
  ButtonsWrapper,
  Title,
  BackButtons,
  LoadMoreButtons,
  StyledLabel,
  NoFilterText,
  StyledSelect,
} from './TweetersList.styled';
import TweeterCard from 'components/TweeterCard/TweeterCard';

export default function TweetsList() {
  const [noFilterResult, setNoFilterResult] = useState(false);
  const [tweeters, setTweeters] = useState([]);
  const [params, setParams] = useState({ page: 1, limit: 3 });
  const [searchParams, setSearchParams] = useSearchParams();
  const loadMoreButtonRef = useRef(null);
  const [filter, setFilter] = useState('show all');
  const [following, setFollowing] = useState(() => {
    const localStorFollowing = JSON.parse(localStorage.getItem(`following`));
    return localStorFollowing ? localStorFollowing : {};
  });

  useEffect(() => {
    setSearchParams({ page: 1, limit: params.limit });
    (async () => {
      try {
        const response = await getTweeters(params);
        setTweeters([...response.data]);
      } catch (error) {
        notify('error', 'Sorry, something goes wrong...');
      }
    })();
  }, [searchParams, setSearchParams, params]);

  useEffect(() => {
    loadMoreButtonRef.current.scrollIntoView({ behavior: 'smooth' });
  }, [tweeters]);

  useEffect(() => {
    if (!noFilterResult) {
      setTimeout(() => setNoFilterResult(true), 3000);
    }
  }, [noFilterResult]);

  const handleLoadMore = () => {
    setParams(prevState =>
      prevState.limit < 10
        ? { ...prevState, limit: prevState.limit + 3 }
        : prevState
    );
  };

  const handleChange = e => {
    setFilter(e.target.value);
  };

  const handleFollowing = id => {
    setFollowing(prevState => ({
      ...prevState,
      [id]: prevState[id] ? !prevState[id] : true,
    }));
  };

  const getFilteredTweeters = () => {
    switch (filter) {
      case 'follow':
        return tweeters.filter(tweeter => following[tweeter.id] !== true);
      case 'followings':
        return tweeters.filter(tweeter => following[tweeter.id] === true);
      default:
        return tweeters;
    }
  };
  const filteredTweeters = getFilteredTweeters();

  localStorage.setItem(`following`, JSON.stringify(following));
  console.log(noFilterResult);

  return (
    <Wrapper>
      <Title>Famousts tweeters</Title>

      {filteredTweeters.length === 0 && noFilterResult ? (
        <NoFilterText>
          There are no tweeters with such filter settings...
        </NoFilterText>
      ) : (
        <CardsWrapper>
          <CardsList>
            {filteredTweeters.map(tweeter => {
              const { id, user, tweets, followers, avatar } = tweeter;
              const isFollowing = following[id] ? following[id] : false;
              return (
                <TweeterCard
                  key={id}
                  id={id}
                  user={user}
                  tweets={tweets}
                  followers={followers}
                  avatar={avatar}
                  setFollowing={handleFollowing}
                  isFollowing={isFollowing}
                />
              );
            })}
          </CardsList>
        </CardsWrapper>
      )}

      <ButtonsWrapper>
        <BackButtons to="/">
          <AiOutlineArrowLeft size={25} color="inherit" />
          Back
        </BackButtons>
        <StyledLabel>
          Filter tweeters?
          <StyledSelect name="tweeters" onChange={handleChange}>
            <option value="show all">show all</option>
            <option value="follow">follow</option>
            <option value="followings">followings</option>
          </StyledSelect>
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
