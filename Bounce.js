import styled, { keyframes } from 'styled-components';
import BaseAnimation from './BaseAnimation';

const bounceAnimation = keyframes`
  from, 20%, 53%, 80%, to {
   animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
   transform: translate3d(0,0,0);
  }

  40%, 43% {
   animation-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);
   transform: translate3d(0, -30px, 0);
  }

  70% {
   animation-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);
   transform: translate3d(0, -15px, 0);
  }

  90% {
   transform: translate3d(0,-4px,0);
  }
`;

const Bounce = styled(BaseAnimation)`
  animation-name: ${bounceAnimation};
`;

export default Bounce;
