import React from 'react'
import { Layout } from 'antd'
import 'antd/dist/antd.css'
import styled from '@emotion/styled'
import { SideBar } from '../app/SideBar'

const { Header, Content, Footer } = Layout

const StyledHeader = styled(Header)`
  font-size: 20px;
  color: white;
  padding: 0 10px;
`

const StyledLayout = styled(Layout)`
  min-height: 100vh;
`

const StyledContent = styled(Content)`
  margin: 0 16px;
`

const StyledDiv = styled.div({
  padding: 24,
  minHeight: 360
})

const StyledFooter = styled(Footer)`
  text-align: center;
`

export const BaseLayout: React.FC = (props) => {
  return (
    <StyledLayout>
      <SideBar />
      <Layout className="site-layout">
        <StyledHeader className="site-layout-background">SpaceX</StyledHeader>
        <StyledContent>
          <StyledDiv className="site-layout-background">{props.children}</StyledDiv>
        </StyledContent>
        <StyledFooter>SpaceX created with Ant Design ©2018</StyledFooter>
      </Layout>
    </StyledLayout>
  )
}
