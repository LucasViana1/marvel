// @flow
import React from 'react';
import Moment from 'react-moment';

import { useHistory } from 'react-router-dom';
import { TableRow, BodyText } from './styles';

type Props = {
  character: {
    id: number,
    name: string,
    description: string,
    modified: string,
    thumbnail: {
      path: string,
      extension: string,
    },
  },
};

const CharacterTableItem = ({ character }: Props) => {
  const history = useHistory();

  function handleNavigateToCharacter() {
    history.push(`/character/${character.id}`);
  }

  return (
    <TableRow onClick={() => handleNavigateToCharacter()}>
      <BodyText>{character.name}</BodyText>
      <BodyText>{character.description}</BodyText>
      <BodyText>
        <Moment date={character.modified} format="DD/MM/YYYY hh:mm" />
      </BodyText>
    </TableRow>
  );
};

export default CharacterTableItem;
