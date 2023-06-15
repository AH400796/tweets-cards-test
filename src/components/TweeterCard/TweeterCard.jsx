import logo from 'images/goit-logo.png';
import {
  Wrapper,
  Border,
  CircleBorder,
  InnerCircleBorder,
  Decor,
  LogoGOIT,
  InteractiveContentWrapper,
  TweetersName,
  TweetsQuantity,
  FollowersQuantity,
  FollowBtn,
  StyledImg,
} from './TweeterCard.styled';

export default function TweeterCard({
  id,
  user,
  tweets,
  followers,
  avatar,
  setFollowing,
  isFollowing,
}) {
  const nextFollowersQuantity = (isFollowing ? 1 : 0) + followers;
  const tweetsQuantity = tweets.toLocaleString('en-EN');
  const followersQuantity = nextFollowersQuantity.toLocaleString('en-EN');

  return (
    <Wrapper>
      <Border />
      <CircleBorder>
        <InnerCircleBorder>
          <StyledImg src={avatar} width="62" height="62" alt="user" />
        </InnerCircleBorder>
      </CircleBorder>
      <LogoGOIT>
        <img src={logo} width="76" height="22" alt="logo" />
      </LogoGOIT>
      <Decor />
      <InteractiveContentWrapper>
        <TweetersName>
          <strong>{user}</strong>
        </TweetersName>
        <TweetsQuantity>{tweetsQuantity} Tweets</TweetsQuantity>
        <FollowersQuantity>{followersQuantity} Followers</FollowersQuantity>
        <FollowBtn
          type="button"
          onClick={() => setFollowing(id)}
          data-following={isFollowing}
        >
          {isFollowing ? 'Following' : 'Follow'}
        </FollowBtn>
      </InteractiveContentWrapper>
    </Wrapper>
  );
}
