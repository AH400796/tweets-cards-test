import { RotatingLines } from 'react-loader-spinner';
import { Wrapper } from './Loader.styled';

export default function Loader() {
  return (
    <Wrapper>
      <RotatingLines
        strokeColor="#5736a3"
        strokeWidth="5"
        animationDuration="0.75"
        width="250"
        visible={true}
      />
    </Wrapper>
  );
}
