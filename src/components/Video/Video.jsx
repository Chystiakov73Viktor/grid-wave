import imageUrlMobile from '../../images/videoimg/video.jpg';
import imageUrlTablet from '../../images/videoimg/tablet-video.jpg';
import { PlayIcon, Wrapper } from './Video.styled';

const Video = () => {
  return (
    <Wrapper>
      <h2 className="video-title">Відео з пухнастиком</h2>
      <div className="video-container">
        <picture>
          <source media="(min-width: 768px)" srcSet={imageUrlTablet} />
          <img className="video-image" src={imageUrlMobile} alt="" />
        </picture>
        <PlayIcon />
      </div>
    </Wrapper>
  );
};

export default Video;
