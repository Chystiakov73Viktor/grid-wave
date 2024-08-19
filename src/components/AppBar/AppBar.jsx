import cat from '../../images/cat.svg';
import { Wrapper } from './AppBar.styled';

const AppBar = () => {
  return (
    <Wrapper>
      <img src={cat} alt="Cat" width="24" height="24" />
      <p className="cat-title">Котодім</p>
    </Wrapper>
  );
};

export default AppBar;
