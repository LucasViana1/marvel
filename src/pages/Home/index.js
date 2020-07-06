// @flow
import * as React from 'react';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  charactersLoadRequest,
  charactersLoadUpdated,
} from '../../store/modules/characters/actions';

import { Container, CharacterTable, HeadText, Pagination } from './styles';

import CharacterTableItem from '../../components/CharacterTableItem';

const Home = () => {
  const [actualPage, setActualPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);

  const { characters } = useSelector(state => state.characters);

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

  function handlePage(pageNumber) {
    // console.log('quantityPage');
    // console.log(quantityPage);
    const total = totalPage + pageNumber;
    dispatch(charactersLoadUpdated(total));
    setTotalPage(total);
    setActualPage(total / 14 + 1);

    // console.log('totalPages');
    // console.log(totalPages);
  }
  // console.log('teste');
  // console.log(useSelector(state => state.characters));

  return (
    <Container>
      <CharacterTable>
        <thead>
          <tr>
            <HeadText>Nome</HeadText>
            <HeadText>Descrição</HeadText>
            <HeadText>Última atualização</HeadText>
          </tr>
        </thead>
        <tbody>
          {characters &&
            characters.map(character => (
              <CharacterTableItem key={character.id} character={character} />
            ))}
        </tbody>
      </CharacterTable>
      <Pagination>
        <button type="button" onClick={() => handlePage(-14)}>
          Anterior
        </button>
        <span>{actualPage}</span>
        <button type="button" onClick={() => handlePage(14)}>
          Próximo
        </button>
      </Pagination>
    </Container>
  );
};

export default Home;
