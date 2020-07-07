// @flow
// import * as React from 'react';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { charactersLoadRequest } from '../../store/modules/characters/actions';

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
  // const [actualPage, setActualPage] = useState(0);
  // const [totalPage, setTotalPage] = useState(0);
  // const [searchPage, setSearchPage] = useState(0);

  const dispatch = useDispatch();

  // USADO APENAS PARA TESTES!!!
  useEffect(() => {
    dispatch(
      charactersLoadRequest(
        'b286c0cd5ce1c9aaca4414ee601aee3019f5e744',
        'e3d2fee5996812a43cde053cb755b88b',
      ),
    );
  }, [dispatch]);

  return (
    <>
      {console.log('refresh 1')}
      <Header pathBack="/" />
      <Container>
        <h1>Lista de personagens</h1>
        {console.log('refresh 2')}
        <CharacterTable>
          <thead>
            <tr>
              <HeadText>Nome</HeadText>
              <HeadTextDescription>Descrição</HeadTextDescription>
              <HeadText>Última atualização</HeadText>
            </tr>
          </thead>
          <tbody>
            {console.log('refresh 3.1')}
            <ListCharacters />
          </tbody>
        </CharacterTable>
        <Pagination comicCharacterSearchById={0} />
      </Container>
    </>
  );
};

export default Home;
