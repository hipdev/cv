import styled from 'styled-components';

const LayoutStyles = styled.div`
  display: grid;
  grid-template-columns: 1.8fr 1fr;
  height: 100vh;

  .content {
    background: ${props => props.theme.black};
    color: ${props => props.theme.white};
    box-shadow: ${props => props.theme.shadowDark};
    z-index: 1;

    .copy {
      color: ${props => props.theme.white};
      font-size: 1.2rem;
      padding-left: 1rem;
      padding-top: 1rem;

      a {
        color: #fff;

        :hover {
          color: #ddd;
        }
      }
    }
    footer {
      font-size: 4rem;
      font-weight: bold;
      text-align: center;
    }
  }
  aside {
    position: relative;
    .fixed {
      position: fixed;
      top: 50%;
      left: 84%;
      transform: translate(-50%, -50%);
      min-width: 29rem;
    }
    p strong {
      min-width: 8rem;
      display: inline-block;
    }

    h1 {
      font-size: 7rem;
      margin-bottom: 5rem;
    }
    h2 {
      font-size: 5rem;
      margin-top: 4rem;
    }
    h1,
    h2 {
      font-weight: bold;
    }
  }
`;

export default LayoutStyles;
