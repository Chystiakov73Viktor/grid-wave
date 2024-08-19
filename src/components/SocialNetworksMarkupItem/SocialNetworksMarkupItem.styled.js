import styled from 'styled-components';

export const LiWrapper = styled.li`
  .social-link {
    border-radius: 16px;
    padding: 8px;
    background: ${(props) => props.backgroundColor || '#d8def8'};
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.5px;
    display: grid;
    grid-template-columns: 32px 1fr;
    align-items: center;
    justify-items: center;
  }
`;
