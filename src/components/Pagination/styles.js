import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  align-items: center;
  margin-top: 34px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }

  button {
    margin: 16px 20px;
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
export const Form = styled.form`
  display: flex;
  input {
    background: #fcfcfc;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    border: none;
    padding: 5px 10px;
    font-size: 16px;
    color: #6c6c80;
  }
  button {
    padding: 2px 10px;
    margin: 0px;
    border-radius: 0;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
  }
`;
