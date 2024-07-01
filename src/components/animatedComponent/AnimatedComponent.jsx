
import React from 'react';
import { useInView } from 'react-intersection-observer';
import styled from 'styled-components';

const StyledDiv = styled.div`
  opacity: 0;
  transform: translateY(50px);
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;

  &.animate {
    opacity: 1;
    transform: translateY(0);
  }
`;

const AnimatedComponent = ({ children }) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
  });

  return (
    <StyledDiv
      ref={ref}
      className={inView ? 'animate' : ''}
    >
      {children}
    </StyledDiv>
  );
};

export default AnimatedComponent;
