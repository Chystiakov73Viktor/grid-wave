import styled from 'styled-components';
import { CiPlay1 } from 'react-icons/ci';

export const Wrapper = styled.div`
  position: relative;

  .video-title {
    font-weight: 700;
    line-height: 36px;
    letter-spacing: 0.5px;
    margin-bottom: 24px;
  }

  .video-container {
    position: relative;
  }

  .video-image {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
`;

export const PlayIcon = styled(CiPlay1)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 64px;
  color: white;
  opacity: 0.8;
  cursor: pointer;
`;
