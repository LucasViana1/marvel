import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;

  h1 {
    margin: 16px 0;
  }
`;
export const CharacterTable = styled.table`
  border: 1px solid #a0a0a0;
  border-top-left-radius: 14px;
  border-top-right-radius: 14px;
  width: 100%;
  background: #fcfcfc;

  @media screen and (max-width: 768px) {
    width: 98%;
  }
`;
export const HeadText = styled.th`
  /* border: 1px solid lightgray; */
  padding: 10px 8px;
  font-size: 18px;
`;
export const HeadTextDescription = styled.th`
  padding: 10px 8px;
  font-size: 18px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
