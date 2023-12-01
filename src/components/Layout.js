import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

const Top = styled.div`
display : flex;
justify-content :space-between;
`

const Layout = () => {
const auth = useSelector((state)=> state.success);


  return (
    <Top>
    <button>HOME</button>
    <div>
    <button>내프로필</button>
    <button>로그아웃</button>
    </div>
    </Top>
  )
}

export default Layout