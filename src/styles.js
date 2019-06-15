import styled from "styled-components";

export const Container = styled.div`
  margin: 0;
  height: 100%;
  /* padding: 0; */

  color: #ffffff;
  background: #f82044;
  display: flex;
  align-items: center;
  justify-items: center;
  flex-direction: column;

  ul {
    li {
      margin: 10px;
      button {
        border: none;
        margin-right: 10px;
        border-radius: 12px;

        outline-style: none;
        &:hover {
          opacity: 0.8;
        }
      }
    }
  }
`;

export const Button = styled.button`
  opacity: 0.7;
  background-color: azure;

  outline-style: none;

  &:hover {
    color: blueviolet;
  }

  border-radius: 50px;
  border: none;
  margin: 10px;
`;
