import { styled } from 'styled-components';

export const SectionWrapper = styled.section`

&.hero {
  margin-bottom: 108px;

  @media (min-width: 768px) {
    margin-bottom: 96px;
  }
}

 &.first {
  @media (min-width: 768px) {
    display: grid;
    gap: 96px;
  }

  @media (min-width: 768px) and (max-width: 1439px) {
    grid-template-columns: 1fr; 
    grid-template-areas: 
      "b"  
      "s"  
      "v"; 
  }

  @media (min-width: 1440px) {
   grid-template-areas:
      "b b s"
      "b b s"
      "b b v"
      "b b .";
    gap: 60px 24px;;
  }

  & > :nth-child(1) {
    grid-area: b; 
  }

  & > :nth-child(2) {
    grid-area: s; 
  }

  & > :nth-child(3) {
    grid-area: v; 
  }
}
`;
