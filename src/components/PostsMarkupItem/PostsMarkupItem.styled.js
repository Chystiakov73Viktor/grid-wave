import styled from 'styled-components';

export const LiWrapper = styled.li`
  @media (min-width: 768px) {
    &:first-child {
      grid-column: 1 / 2;
      grid-row: 1 / 3;
    }
  }

  .post-image {
    border-radius: 16px;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .post-link {
    position: relative;
    display: block;
    color: #fff;
    height: 100%;
  }

  .overlay {
    border-radius: 0px 0px 16px 16px;
    background-color: rgba(18, 18, 22, 0.5);
    padding: 12px 20px;
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
  }

  @media (min-width: 1440px) {
    .overlay {
      padding: 24px 48px;
    }
  }

  .post-title {
    color: #fff;
    font-family: Montserrat, Helvetica, sans-serif;
  }
`;
