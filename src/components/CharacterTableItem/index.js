// @flow
import React from 'react';
import Moment from 'react-moment';

import { TableRow, BodyText } from './styles';

type Props = {
  character: {
    name: string,
    description: string,
    modified: string,
  },
};

const CharacterTableItem = ({ character }: Props) => {
  return (
    <TableRow>
      <BodyText>{character.name}</BodyText>
      <BodyText>{character.description}</BodyText>
      <BodyText>
        <Moment date={character.modified} format="DD/MM/YYYY hh:mm" />
      </BodyText>
    </TableRow>
  );
};

export default CharacterTableItem;
