import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
  height: 100%;
  overflow: auto;
  background: #ee4d64;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 350px;
  height: 450px;
  text-align: center;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);

  img {
    margin: 50px 0 10px;
  }

  form {
    display: flex;
    flex-direction: column;
    margin: 0 30px;

    label {
      display: flex;
      flex-direction: column;
      margin-top: 20px;
    }

    strong {
      align-self: flex-start;
      text-transform: uppercase;
      color: #444;
      font-size: 14px;
      line-height: 16px;
    }

    input {
      background: none;
      border: 1px solid #ddd;
      height: 44px;
      padding: 0 15px;
      color: #999;
      border-radius: 4px;
      margin-top: 8px;
      font-size: 16px;
      line-height: 19px;

      &::placeholder {
        color: #999;
      }
    }

    button {
      margin-top: 15px;
      border: 0;
      background: #ee4d64;
      font-weight: bold;
      color: #fff;
      height: 44px;
      border-radius: 4px;
      font-size: 16px;
      line-height: 19px;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.03, '#ee4d64')};
      }
    }
  }
`;
