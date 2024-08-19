import styled from 'styled-components';

export const LiWrapper = styled.li`
  .blog-link {
    color: #fff;
    display: grid;
    gap: 36px;
  }



  @media (min-width: 768px) {
  .blog-link {
    gap: 24px;
    grid-template-columns: 264px 1fr;
  }
}

  .blog-image {
    width: 100%;
    height: auto;
    object-fit: cover;
    margin-bottom: 20px;
  }

  .blog-title {
    font-family: 'Montserrat', sans-serif;
    font-size: 20px;
    line-height: 1.4;
    letter-spacing: 0.03em;
    color: #2c2c2c;
    margin-bottom: 12px;
  }

  .blog-content {
    font-family: 'Montserrat', sans-serif;
    font-size: 16px;
    line-height: 1.5;
    letter-spacing: 0.03em;
    color: #2c2c2c;
  }
`;
