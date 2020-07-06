import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  margin-bottom: 20px;
  width: 100%;
  /* background: #fff; */
  background: #fcfcfc;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
export const ContainerImage = styled.div`
  flex: 1;
  img {
    width: 200px;
    max-height: 100%;
    object-fit: cover;
    @media screen and (max-width: 768px) {
      width: 100%;
    }
  }
`;
export const ContainerDetails = styled.article`
  flex: 3;
  padding: 8px 16px;
`;
export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-bottom: 12px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }

  h3,
  h4 {
    margin: 10px 2px;
  }

  h3 {
    flex: 5;
  }
  h4 {
    flex: 1;
  }
`;
export const Description = styled.div``;
