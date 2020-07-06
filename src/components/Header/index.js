// @flow
import React from 'react';

import { Link, useHistory } from 'react-router-dom';
import { Container, Navigation } from './styles';
// import logo from '../../assets/logo.png';

type Props = {
  pathBack: string,
};

const Header = ({ pathBack }: Props) => {
  const history = useHistory();

  function handleNavigateTo() {
    history.push(`${pathBack}`);
  }
  return (
    <Container className="header">
      <Navigation className="header__nav">
        <Link to="/home">
          <img src="https://i.ibb.co/gRkfBPj/logo.png" alt="Marvel Logo" />
        </Link>
        <button type="button" onClick={() => handleNavigateTo()}>
          Voltar
        </button>
      </Navigation>
    </Container>
  );
};

export default Header;
