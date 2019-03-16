import styled from 'styled-components';

const ProfileStyles = styled.div`
  padding: 3vw 8vw;

  h4 {
    font-size: 2.5rem;
    font-weight: bold;
    margin-bottom: 1rem;
    margin-top: 3rem;
  }
  .title {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    margin-bottom: 4rem;

    h3 {
      color: #fff;
      font-size: 4rem;
    }
    img {
      width: 15rem;
      border: 2px solid #fff;
    }
  }

  .skills {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(13rem, 1fr));
    grid-column-gap: 2rem;
    grid-row-gap: 1rem;

    .bar {
      background-color: #2f2f2f;
      height: 0.4rem;
      border-radius: 1px;
    }

    h4 {
      grid-column: 1 / -1;
    }
  }

  .jobs {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(35rem, 1fr));
    grid-column-gap: 2rem;

    h4 {
      grid-column: 1 / -1;
    }

    .grid-two {
      display: grid;
      grid-template-columns: 1fr 2fr;
    }
  }

  .studies {
    display: grid;
    grid-column-gap: 2rem;
    grid-template-columns: repeat(auto-fit, minmax(29rem, 1fr));

    p,
    h4 {
      color: ${props => props.theme.white};
    }
  }

  .interests {
    h4,
    p {
      color: ${props => props.theme.white};
    }
  }
`;

export default ProfileStyles;
