// @flow
import * as React from 'react';
// import { useState } from 'react';
// // import Moment from 'react-moment';
import { useSelector } from 'react-redux';

import CharacterTableItem from '../CharacterTableItem';
import Loading from '../Loading';

const ListCharacters = () => {
  const { characters, loading } = useSelector(state => state.characters);

  return (
    <>
      {console.log('refresh 3')}
      {characters &&
        characters.map(character => (
          <CharacterTableItem key={character.id} character={character} />
        ))}
      {loading && <Loading />}
    </>
  );
};

export default ListCharacters;
