import styled from 'styled-components';

export const DivWrapper = styled.div`
  .card-list {
    display: grid;
    grid-template-columns: 1fr;
  }

  .title {
    font-size: 28px;
    font-weight: 700;
    line-height: 36px;
    letter-spacing: 0.5px;
    color: #2c2c2c;
    margin-bottom: 24px;
  }

  .posts-gap {
    gap: 12px;
  }

  .blog-gap {
    margin-bottom: 84px;
    gap: 48px;
  }

  .social-gap {
    margin-bottom: 96px;
    grid-template-columns: repeat(2, 1fr);
    gap: 24px 8px;
  }

  @media (min-width: 768px) {
    .posts-gap {
      grid-template-columns: repeat(2, 1fr);
    }

    .blog-gap {
      margin-bottom: 0;
    }

    .social-gap {
      margin-bottom: 0;
      gap: 24px;
    }
  }

`;
