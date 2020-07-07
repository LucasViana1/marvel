// @flow
import * as React from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { useHistory } from 'react-router-dom';
import {
  Container,
  CharacterTable,
  HeadText,
  HeadTextDescription,
} from './styles';

import Header from '../../components/Header';

import Pagination from '../../components/Pagination';
import ListCharacters from '../../components/ListCharacters';

const Home = () => {
  const history = useHistory();

  const { characters, loading } = useSelector(state => state.characters);

  useEffect(() => {
    if (characters.length === 0 && !loading) {
      history.push('/');
    }
  }, [loading]);

  return (
    <>
      <Header pathBack="/" />
      <Container>
        <h1>Lista de personagens</h1>

        <CharacterTable>
          <thead>
            <tr>
              <HeadText>Nome</HeadText>
              <HeadTextDescription>Descrição</HeadTextDescription>
              <HeadText>Última atualização</HeadText>
            </tr>
          </thead>
          <tbody>
            <ListCharacters />
          </tbody>
        </CharacterTable>
        <Pagination comicCharacterSearchById={0} />
      </Container>
    </>
  );
};

export default Home;
