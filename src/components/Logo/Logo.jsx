import { LogoWrapper, LogoImage } from './Logo.styled';
import logo from 'images/logo.png';

export default function Logo() {
  return (
    <LogoWrapper>
      <LogoImage src={logo} width="120" height="96" alt="Logo" />
    </LogoWrapper>
  );
}
