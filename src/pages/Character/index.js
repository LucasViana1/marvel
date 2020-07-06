// @flow
import * as React from 'react';
// import { useEffect } from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { loadCharacterById } from '../../store/modules/characters/actions';
import ComicItem from '../../components/ComicItem';

import {
  Container,
  ContainerDetails,
  Details,
  ContainerComics,
} from './styles';

const Character = () => {
  const [imageURL, setImageURL] = useState('');

  const { characterId } = useParams();

  const dispatch = useDispatch();

  const { comics, characterDetails } = useSelector(state => state.characters);

  console.log('useSelector(state => state.characters)');
  console.log(characterDetails);
  // console.log(characterDetails.thumbnail);
  // console.log(characterDetails.thumbnail.path);

  useEffect(() => {
    // DISPATCH CHARACTER BY ID AND COMICS
    dispatch(loadCharacterById(Number(characterId)));
  }, [characterId, dispatch]);

  useEffect(() => {
    if (characterDetails.thumbnail !== undefined) {
      const { path, extension } = characterDetails.thumbnail;
      setImageURL(`${path}.${extension}`);
    }
  }, [characterDetails]);

  return (
    <Container>
      <ContainerDetails>
        {characterDetails && <img src={imageURL} alt={characterDetails.name} />}
        <Details>
          <span>{`Nome: ${characterDetails.name}`}</span>
          <p>{`Descrição: ${characterDetails.description}`}</p>
        </Details>
      </ContainerDetails>
      <hr />
      <ContainerComics>
        {comics &&
          comics.map(comic => <ComicItem key={comic.id} comic={comic} />)}
      </ContainerComics>
    </Container>
  );
};

export default Character;
