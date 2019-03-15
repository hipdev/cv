import * as React from 'react';
import { NextFunctionComponent } from 'next';
import LoadingStyles from './styles/LoadingStyles';

const Loading: NextFunctionComponent = () => {
  return (
    <LoadingStyles>
      <img
        src="https://media2.giphy.com/media/OiC5BKaPVLl60/giphy.gif?cid=3640f6095c818c2a6e53653945f5052e"
        alt="Loading"
      />
    </LoadingStyles>
  );
};

export default Loading;
