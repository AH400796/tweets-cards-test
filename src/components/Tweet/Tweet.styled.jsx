import styled from 'styled-components';
import decor from 'images/decor.png';

export const Wrapper = styled.div`
  position: relative;
  width: 380px;
  height: 460px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 28px 36px;
  border-radius: 20px;

  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
`;

export const Border = styled.div`
  position: absolute;
  top: 214px;
  left: 0;
  width: 100%;
  height: 8px;
  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;
`;

export const CircleBorder = styled.div`
  position: absolute;
  top: 178px;
  left: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;
  background: #ebd8ff;
  box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),
    inset 0px -2.19582px 4.39163px #ae7be3,
    inset 0px 4.39163px 3.29372px #fbf8ff;
  border-radius: 50%;
`;

export const InnerCircleBorder = styled.div`
  width: 62px;
  height: 62px;
  background: #5736a3;
  border-radius: 50%;
`;

export const Decor = styled.div`
  width: 308px;
  height: 168px;
  background-image: url(${decor});
`;

export const LogoGOIT = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
`;

export const InteractiveContentWrapper = styled.div`
  font-style: normal;

  color: #ebd8ff;
  font-size: 20px;
  line-height: 1.2;
  text-transform: uppercase;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TweetsQuantity = styled.span`
  margin-bottom: 16px;
`;

export const FollowersQuantity = styled.span`
  margin-bottom: 26px;
`;

export const FollowBtn = styled.button`
  width: 196px;
  height: 50px;
  font-weight: 600;
  font-size: 18px;
  line-height: 1.22;

  color: #373737;
  background-color: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border: none;
  outline: none;
  border-radius: 10px;
`;
