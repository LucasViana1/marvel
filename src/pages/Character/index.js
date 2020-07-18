// @flow
import * as React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import { loadCharacterById } from '../../store/modules/characters/actions';

import Pagination from '../../components/Pagination';

import {
  Container,
  ContainerDetails,
  Details,
  ContainerComics,
  ContainerImage,
  Hr,
} from './styles';

import Header from '../../components/Header';
import ListComics from '../../components/ListComics';

import formatImageURL from '../../util/formatImageURL';

const Character = () => {
  const { characterId } = useParams();

  const dispatch = useDispatch();
  const history = useHistory();

  const { characterDetails, characters, loading } = useSelector(
    state => state.characters,
  );

  useEffect(() => {
    dispatch(loadCharacterById(Number(characterId)));
  }, [characterId, dispatch]);

  useEffect(() => {
    if (characters.length === 0 && !loading) {
      history.push('/');
    }
  }, [loading, history, characters.length]);

  return (
    <>
      <Header pathBack="/home" />

      <Container>
        <h1>Detalhes do personagem</h1>

        <ContainerDetails>
          <ContainerImage>
            {characterDetails.thumbnail !== undefined && (
              <img
                src={formatImageURL(characterDetails.thumbnail)}
                alt={characterDetails.name}
              />
              // <img src={imageURL} alt={characterDetails.name} />
            )}
          </ContainerImage>

          <Details>
            <h3>{`Nome: ${characterDetails.name || 'Loading...'}`}</h3>
            <p>
              {`Descrição: ${
                characterDetails.description || 'No description found!'
              }`}
            </p>
          </Details>
        </ContainerDetails>
        <Hr />
        <ContainerComics>
          <h2>Fascículos</h2>

          <ListComics />
        </ContainerComics>
        <Pagination comicCharacterSearchById={Number(characterId)} />
      </Container>
    </>
  );
};

export default Character;
