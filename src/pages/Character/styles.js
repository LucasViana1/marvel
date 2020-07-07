import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  /* height: 50vh; */
  /* margin-top: 70px; */
  width: 100%;

  h1 {
    margin: 20px 0;
  }
`;
export const ContainerDetails = styled.div`
  display: flex;
  width: 100%;
  padding: 12px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }

  h3 {
    text-align: center;
    margin: 10px 2px;
  }
`;
export const ContainerImage = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  img {
    width: 100%;
    /* width: 40%; */
    max-height: 100%;
    object-fit: cover;
  }
`;
export const Details = styled.article`
  flex: 3;
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
  align-items: center;
  /* margin-top: 42px; */

  h2 {
    margin: 18px 2px;
  }
`;
export const Hr = styled.hr`
  width: 100%;
`;
