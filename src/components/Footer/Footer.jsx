import cat from '../../../images/cat.svg';
import { Wrapper } from './Footer.styled';

const Footer = () => {
  return (
    <Wrapper>
      <a className='cat-link' href="">
        <img src={cat} alt="Cat" width="24" height="24" />
        <p className="cat-title">Котодім</p>
      </a>
    </Wrapper>
  );
};

export default Footer;
