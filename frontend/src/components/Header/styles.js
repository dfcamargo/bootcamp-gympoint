import styled from 'styled-components';

export const Container = styled.div`
  background: #fff;
  padding: 0 30px;
`;

export const Content = styled.div`
  height: 64px;
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    align-items: center;

    img {
      margin-right: 30px;
      padding-right: 30px;
      border-right: 1px solid #ddd;
    }

    a {
      font-weight: bold;
      color: #999;
      font-size: 15px;
      line-height: 18px;
      margin-right: 20px;
      text-transform: uppercase;
    }
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;

  div {
    text-align: right;
    font-size: 14px;
    line-height: 16px;

    strong {
      display: block;
      color: #666;
    }

    button {
      border: 0;
      background: none;
      color: #de3b3b;
    }
  }
`;
