// @flow
import * as React from 'react';

import { useSelector } from 'react-redux';

import CharacterTableItem from '../CharacterTableItem';
import Loading from '../Loading';

const ListCharacters = () => {
  const { characters, loading } = useSelector(state => state.characters);

  return (
    <>
      {characters &&
        characters.map(character => (
          <CharacterTableItem key={character.id} character={character} />
        ))}
      {loading && <Loading />}
    </>
  );
};

export default ListCharacters;
