// @flow
import * as React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { charactersLoadRequest } from '../../store/modules/characters/actions';

import { Container, Form, Input, Button, Title } from './styles';

const Access = () => {
  const [privateKey, setPrivateKey] = useState('');
  const [publicKey, setPublicKey] = useState('');

  const dispatch = useDispatch();
  const history = useHistory();

  // const { characters } = useSelector(state => state.characters);

  // useEffect(() => {
  //   if (characters.length !== 0) {
  //     history.push('/home');
  //   }
  // }, [characters, history]);

  function handleSubmit(event) {
    if (!privateKey || !publicKey) {
      window.alert('All fields are mandatory!');
      event.preventDefault();
      return;
    }

    dispatch(charactersLoadRequest(privateKey, publicKey));
    history.push('/home');
    event.preventDefault();
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Title>Dados de acesso</Title>
        <Input
          type="text"
          placeholder="private_key"
          onChange={event => setPrivateKey(event.target.value)}
        />
        <Input
          type="text"
          placeholder="public_key"
          onChange={event => setPublicKey(event.target.value)}
        />
        <Button type="submit">acessar</Button>
      </Form>
    </Container>
  );
};

export default Access;
