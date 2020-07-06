import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  /* height: 50vh; */
  /* margin-top: 70px; */
  width: 100%;
`;
export const ContainerDetails = styled.div`
  display: flex;
  width: 90%;
  padding: 12px;
  img {
    width: 40%;
    max-height: 100%;
    object-fit: cover;
  }
`;
export const Details = styled.article`
  flex-direction: column;
  width: 100%;
  background: #fff;
  span,
  p {
    padding: 10px;
  }
`;

export const ContainerComics = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 42px;
`;
