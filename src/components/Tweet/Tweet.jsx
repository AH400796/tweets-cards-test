import user from 'images/user.png';
import logo from 'images/goit-logo.png';
import {
  Wrapper,
  Border,
  CircleBorder,
  InnerCircleBorder,
  Decor,
  LogoGOIT,
  InteractiveContentWrapper,
  TweetsQuantity,
  FollowersQuantity,
  FollowBtn,
} from './Tweet.styled';

export default function Tweet() {
  return (
    <Wrapper>
      <Border />
      <CircleBorder>
        <InnerCircleBorder>
          <img src={user} width="62" height="62" alt="user" />
        </InnerCircleBorder>
      </CircleBorder>
      <LogoGOIT>
        <img src={logo} width="76" height="22" alt="logo" />
      </LogoGOIT>
      <Decor />
      <InteractiveContentWrapper>
        <TweetsQuantity> Tweets</TweetsQuantity>
        <FollowersQuantity>Followers</FollowersQuantity>
        <FollowBtn type="button">Follow</FollowBtn>
      </InteractiveContentWrapper>
    </Wrapper>
  );
}
