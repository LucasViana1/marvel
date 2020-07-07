// @flow
import * as React from 'react';

import { useSelector } from 'react-redux';

import Loading from '../Loading';
import ComicItem from '../ComicItem';

const ListComics = () => {
  const { comics, loading } = useSelector(state => state.characters);

  return (
    <>
      {comics &&
        comics.map(comic => <ComicItem key={comic.id} comic={comic} />)}
      {loading && <Loading />}
    </>
  );
};

export default ListComics;
