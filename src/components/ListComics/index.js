// @flow
import * as React from 'react';
// import { useState } from 'react';
// // import Moment from 'react-moment';
import { useSelector } from 'react-redux';

// import { charactersLoadUpdated } from '../../store/modules/characters/actions';

// import { useHistory } from 'react-router-dom';
// import { Container } from './styles';

import Loading from '../Loading';
import ComicItem from '../ComicItem';

const ListComics = () => {
  const { comics, loading } = useSelector(state => state.characters);

  return (
    <>
      {console.log('REDNER NORMAL')}
      {comics &&
        comics.map(comic => <ComicItem key={comic.id} comic={comic} />)}
      {loading && <Loading />}
    </>
  );
};

export default ListComics;
