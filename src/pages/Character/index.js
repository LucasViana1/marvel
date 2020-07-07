// @flow
import * as React from 'react';
// import { useEffect } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
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
  // const [imageURL, setImageURL] = useState('');

  const { characterId } = useParams();

  const dispatch = useDispatch();

  const { characterDetails } = useSelector(state => state.characters);

  // console.log('useSelector(state => state.characters)');
  // console.log(characterDetails);
  // console.log(characterDetails.thumbnail);
  // console.log(characterDetails.thumbnail.path);

  useEffect(() => {
    // DISPATCH CHARACTER BY ID AND COMICS
    dispatch(loadCharacterById(Number(characterId)));
  }, [characterId]);

  return (
    <>
      <Header pathBack="/home" />
      {console.log('RENDER COMICS 1')}
      <Container>
        <h1>Detalhes do personagem</h1>
        {console.log('RENDER COMICS 2')}
        <ContainerDetails>
          {console.log('RENDER COMICS 3')}
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
            {console.log('RENDER COMICS 4')}
            <h3>{`Nome: ${characterDetails.name}`}</h3>
            <p>
              {`Descrição: ${
                characterDetails.description || 'No description found!'
              }`}
            </p>
          </Details>
        </ContainerDetails>
        <Hr />
        <ContainerComics>
          {console.log('RENDER COMICS 5')}
          <h2>Fascículos</h2>

          <ListComics />
        </ContainerComics>
        <Pagination comicCharacterSearchById={Number(characterId)} />
      </Container>
    </>
  );
};

export default Character;
