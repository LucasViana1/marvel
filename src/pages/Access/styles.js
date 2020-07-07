import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  /* align-items: center; */
  flex-direction: column;
  align-items: center;
  /* justify-content: space-between; */
  /* justify-content: center; */
  height: 50vh;
  margin-top: 50px;
  width: 100%;

  h1 {
    font-size: 1.7em;
    margin-bottom: 40px;
    text-align: center;
  }
`;
export const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border: 1px solid gray;
  border-radius: 10px;
  padding: 14px 30px;
  box-shadow: 2px 2px rgba(0, 0, 0, 0.205);
  width: 50%;
  background: #fcfcfc;

  @media screen and (max-width: 768px) {
    width: 80%;
  }
`;
export const Input = styled.input`
  /* flex: 1; */
  background: #f0f0f5;
  border-radius: 8px;
  border: 0.5px solid #f0f0f5;
  padding: 10px 20px;
  font-size: 16px;
  color: #6c6c80;
  margin-bottom: 10px;
  /* font-family: monospace, sans-serif; */
  width: 90%;

  @media screen and (max-width: 768px) {
    width: 96%;
  }

  &::placeholder {
    color: #77778b;
    /* font-family: 'MuseoModerno', cursive; */
  }
`;

export const Button = styled.button`
  margin-top: 40px;
  padding: 12px 40px;
  font-size: 20px;
  background: rgb(0, 107, 239);
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0.5px solid rgb(168, 167, 167);
  color: #fff;
  font-weight: bold;
  border-radius: 8px;
  text-transform: capitalize;

  &:hover {
    background: rgb(0, 130, 240);
  }
`;
export const Title = styled.h2`
  font-size: 1.6em;
  margin-bottom: 26px;
`;
