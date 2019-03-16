import styled from 'styled-components';

interface MyProps {
  width: number;
}

const Bar = styled.div<MyProps>`
  width: ${props => props.width}%;
  background-color: white;
  height: 0.4rem;
`;

export default Bar;
