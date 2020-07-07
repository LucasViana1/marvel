// @flow
import * as React from 'react';
import { useEffect } from 'react';

import Spinner from 'react-spinners/BounceLoader';
import { Container } from './styles';

const Pagination = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <Container>
      <Spinner size={100} color="rgb(0,100,255)" />
    </Container>
  );
};

export default Pagination;
