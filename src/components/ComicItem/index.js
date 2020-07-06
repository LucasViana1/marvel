// @flow
import React from 'react';

import {
  Container,
  Header,
  Description,
  ContainerDetails,
  ContainerImage,
} from './styles';

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
  console.log('props comic item');
  console.log(comic);
  return (
    <Container>
      <ContainerImage>
        <img
          src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
          alt={comic.title}
        />
      </ContainerImage>
      <ContainerDetails>
        <Header>
          <h4>{`Titulo: ${comic.title}`}</h4>
          <h4>{`Número de capa: ${comic.issueNumber}`}</h4>
        </Header>
        <Description>
          <p>{`Descrição: ${comic.description || 'No description found!'}`}</p>
          {/* <div dangerouslySetInnerHTML={{ __html: comic.description }} /> */}
        </Description>
      </ContainerDetails>
    </Container>
  );
};

export default ComicItem;
