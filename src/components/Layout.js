import React, { useEffect } from "react";

import styled from "styled-components";


import Home from 'pages/Home';

const Top = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Layout = () => {


  return (
    <Top>
      <h1>HOME</h1>
      <div>
        <button>내프로필</button>
        <button>로그아웃</button>
      </div>
    </Top>
  );
};

export default Layout;
