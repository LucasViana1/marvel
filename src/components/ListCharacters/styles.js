import styled from 'styled-components';

export const Container = styled.section`
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
