import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  height: 100%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 30px 0 20px;

    h1 {
      font-size: 24px;
      line-height: 28px;
      color: #444;
    }
  }
`;

export const ActionMenu = styled.div`
  a {
    background: #ee4d64;
    border-radius: 4px;
    font-size: 14px;
    line-height: 16px;
    color: #fff;
    font-weight: bold;
    padding: 10px 20px;
    margin-right: 16px;

    &:hover {
      background: ${darken(0.03, '#ee4d64')};
    }
  }

  input {
    height: 36px;
    border-radius: 4px;
    border: 1px solid #ddd;
    padding: 10px 15px 10px 40px;

    &::placeholder {
      color: #999;
    }
  }
`;

export const StudentList = styled.table`
  width: 100%;
  background: #fff;
  border-radius: 4px;
  padding: 30px;

  th {
    text-align: left;
    font-size: 16px;
    line-height: 19px;
    color: #444;
    text-transform: uppercase;
  }

  td {
    font-size: 16px;
    line-height: 20px;
    color: #666;
    padding: 16px 0;
    border-bottom: 1px solid #eee;
  }
`;
