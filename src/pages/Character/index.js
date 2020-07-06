// @flow
import * as React from 'react';
import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { useParams } from 'react-router-dom';
import { loadCharacterById } from '../../store/modules/characters/actions';

import ComicItem from '../../components/ComicItem';

const Character = () => {
  const { characterId } = useParams();

  const dispatch = useDispatch();

  console.log('id');

  console.log(characterId);

  console.log('data character screen');
  console.log(useSelector(state => state.characters));

  const { comics } = useSelector(state => state.characters);

  useEffect(() => {
    // DISPATCH CHARACTER BY ID AND COMICS
    dispatch(loadCharacterById(Number(characterId)));
  }, [characterId, dispatch]);

  return (
    <section>
      <h2>Character</h2>
      <div>{comics && comics.map(comic => <ComicItem key={comic.id} />)}</div>
    </section>
  );
};

export default Character;
