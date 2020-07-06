import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  /* height: 50vh;
  margin-top: 70px;
   */
`;
export const CharacterTable = styled.table`
  border: 1px solid #a0a0a0;
  border-top-left-radius: 14px;
  border-top-right-radius: 14px;
  width: 100%;
  background: #fcfcfc;
  /* box-shadow: 1px 1px rgba(0, 0, 0, 0.205); */
`;
export const HeadText = styled.th`
  /* border: 1px solid lightgray; */
  padding: 10px 8px;
  font-size: 18px;
`;
export const Pagination = styled.section`
  display: flex;
  align-items: center;
  margin-top: 34px;

  button {
    margin: 0 20px;
    padding: 6px 20px;
    font-size: 17px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid rgb(168, 167, 167);
    color: #fff;
    font-weight: bold;
    border-radius: 8px;
    text-transform: capitalize;
    background: rgb(120, 214, 73);

    &:hover {
      background: rgb(140, 214, 63);
    }
  }
`;
