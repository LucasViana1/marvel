// @flow
import * as React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { charactersLoadRequest } from '../../store/modules/characters/actions';

const Access = () => {
  const [privateKey, setPrivateKey] = useState('');
  const [publicKey, setPublicKey] = useState('');

  const dispatch = useDispatch();
  const history = useHistory();

  const { characters } = useSelector(state => state.characters);

  useEffect(() => {
    console.log('characters');
    console.log(characters);
    if (characters.length !== 0) {
      history.push('/home');
    }
  }, [characters, history]);

  function handleSubmit(event) {
    if (!privateKey || !publicKey) {
      window.alert('All fields are mandatory!');
      event.preventDefault();
      return;
    }

    dispatch(charactersLoadRequest(privateKey, publicKey));

    event.preventDefault();
  }

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="private_key"
          onChange={event => setPrivateKey(event.target.value)}
        />
        <input
          type="text"
          placeholder="public_key"
          onChange={event => setPublicKey(event.target.value)}
        />
        <button type="submit">Access</button>
      </form>
    </section>
  );
};

export default Access;
