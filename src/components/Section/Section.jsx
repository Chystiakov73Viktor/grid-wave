import { SectionWrapper } from './Section.styled';

export const Section = ({ children, className }) => {
  return (
    <SectionWrapper className={className}>
        {children}
    </SectionWrapper>
  );
};