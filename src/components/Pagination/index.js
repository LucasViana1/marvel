// @flow
import * as React from 'react';
import { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import {
  charactersLoadUpdated,
  charactersComicsLoadUpdated,
} from '../../store/modules/characters/actions';

import { Container, Form } from './styles';

type Props = {
  comicCharacterSearchById: number,
};

const Pagination = ({ comicCharacterSearchById }: Props) => {
  const [searchPage, setSearchPage] = useState(0);

  const { actualPage } = useSelector(state => state.characters);

  const dispatch = useDispatch();

  const quantityPerPage = 14;

  const handlePage = (sum = false) => {
    let total = actualPage * quantityPerPage;
    total += sum ? quantityPerPage : -quantityPerPage;

    if (comicCharacterSearchById) {
      dispatch(charactersComicsLoadUpdated(comicCharacterSearchById, total));
    } else {
      dispatch(charactersLoadUpdated(total));
    }
    setSearchPage(total / quantityPerPage);
  };

  const handleSearchPage = event => {
    const total = searchPage * quantityPerPage;
    if (comicCharacterSearchById) {
      dispatch(charactersComicsLoadUpdated(1009268, total));
    } else {
      dispatch(charactersLoadUpdated(total));
    }

    event.preventDefault();
  };

  return (
    <Container>
      <button type="button" onClick={() => handlePage()}>
        Anterior
      </button>
      <Form onSubmit={handleSearchPage}>
        <input
          type="number"
          name="page"
          id="page"
          value={searchPage}
          onChange={event => setSearchPage(event.target.value)}
        />
        <button type="submit">{`>`}</button>
      </Form>
      <button type="button" onClick={() => handlePage(true)}>
        Próximo
      </button>
    </Container>
  );
};

export default Pagination;
