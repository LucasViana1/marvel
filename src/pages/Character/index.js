// @flow
import * as React from 'react';
import { useEffect } from 'react';

// import md5 from 'md5';
// import api from '../../services/api';
import { useDispatch, useSelector } from 'react-redux';

import { charactersLoadComicsRequest } from '../../store/modules/characters/actions';

const Character = () => {
  const dispatch = useDispatch();

  console.log('data character screen');
  console.log(useSelector(state => state));

  useEffect(() => {
    // const timestamp = Math.floor(Date.now() / 1000);
    // const privateKey = 'b286c0cd5ce1c9aaca4414ee601aee3019f5e744';
    // const publicKey = 'e3d2fee5996812a43cde053cb755b88b';
    // const hash = md5(timestamp + privateKey + publicKey);
    // api
    //   .get(
    //     `characters/1010673/comics?ts=${timestamp}&apikey=${publicKey}&hash=${hash}&limit=10`,
    //   )
    //   .then(response => {
    //     console.log('stories personagem');
    //     console.log(response.data);
    //     // console.log(response.data.data.results);
    //   });
    dispatch(charactersLoadComicsRequest(1010673));
  }, [dispatch]);

  return (
    <section>
      <h2>Character</h2>
    </section>
  );
};

export default Character;
