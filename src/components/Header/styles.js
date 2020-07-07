import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.692);
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 900;
  background: #fff;
  padding: 4px 0px;
  justify-content: center;
  padding: 10px;
`;
export const Navigation = styled.nav`
  display: flex;
  align-items: center;
  font-family: 'Inconsolata', monospace;
  font-size: 21px;

  a,
  button {
    color: rgb(210, 0, 0, 0.9);
    display: flex;
    align-items: center;
    text-decoration: none;
    margin: 0 24px;
    text-transform: uppercase;
    font-weight: bold;

    &:hover {
      text-decoration: underline;
      color: rgb(250, 0, 0, 0.9);
    }

    img {
      width: 70px;
      height: auto;
      margin-right: 6px;
    }
  }
`;
