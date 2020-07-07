// @flow
import React from 'react';

import {
  Container,
  Header,
  Description,
  ContainerDetails,
  ContainerImage,
} from './styles';

import formatImageURL from '../../util/formatImageURL';

type Props = {
  comic: {
    title: string,
    description: string,
    issueNumber: number,
    thumbnail: {
      path: string,
      extension: string,
    },
  },
};

const ComicItem = ({ comic }: Props) => {
  // console.log('props comic item');
  // console.log(comic);

  return (
    <Container>
      <ContainerImage>
        <img src={formatImageURL(comic.thumbnail)} alt={comic.title} />
      </ContainerImage>
      <ContainerDetails>
        <Header>
          <h3>{`Título: ${comic.title}`}</h3>
          <h4>{`Nº capa: ${comic.issueNumber}`}</h4>
        </Header>
        <Description>
          <div
            dangerouslySetInnerHTML={{
              __html: `Descrição: ${
                comic.description || 'No description found!'
              }`,
            }}
          />
        </Description>
      </ContainerDetails>
    </Container>
  );
};

export default ComicItem;
