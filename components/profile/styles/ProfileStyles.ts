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
    margin-bottom: 2rem;

    h3 {
      color: #fff;
      font-size: 4rem;
      line-height: 4.5rem;
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
      color: ${props => props.theme.white};
    }
  }

  .background {
    p {
      margin-bottom: 1.5rem;
      line-height: 2.5rem;
    }
    summary {
      font-style: italic;
      outline: none;
      cursor: pointer;
    }
  }

  .jobs {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(35rem, 1fr));
    grid-column-gap: 2rem;

    h4 {
      grid-column: 1 / -1;
      color: ${props => props.theme.white};
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

    span {
      margin-right: 0.5rem;
    }

    p,
    h4 {
      color: ${props => props.theme.white};
    }
  }

  .interests,
  .background {
    h4,
    p {
      color: ${props => props.theme.white};
    }
  }

  /* SEPARATORS */
  .skills,
  .jobs,
  .background,
  .studies {
    padding-bottom: 3rem;
    border-bottom: 1px solid #353535;
  }
`;

export default ProfileStyles;
