import { Layout, Menu } from 'antd'
import { RocketOutlined, TeamOutlined } from '@ant-design/icons'
import React, { useState } from 'react'
import 'antd/dist/antd.css'
import { AppRouterProvider } from './providers/Router'
import styled from '@emotion/styled'

const { Header, Content, Footer, Sider } = Layout
const { SubMenu } = Menu

const StyledHeader = styled(Header)`
  font-size: 20px;
  color: white;
  padding: 0 10px;
`

export const App: React.FC = () => {
  const [collapsed, setCollapsed] = useState<boolean>(false)

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={(collapsed) => setCollapsed(collapsed)}>
        {/*<div className="logo" />*/}
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
          <Menu.Item key="1">Company Info</Menu.Item>
          <Menu.Item key="2">Capsules</Menu.Item>
          <SubMenu key="sub1" icon={<RocketOutlined />} title="Rockets">
            <Menu.Item key="3">1</Menu.Item>
            <Menu.Item key="4">2</Menu.Item>
            <Menu.Item key="5">3</Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" icon={<TeamOutlined />} title="Crew">
            <Menu.Item key="6"> 1</Menu.Item>
            <Menu.Item key="8"> 2</Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <StyledHeader className="site-layout-background">SpaceX News</StyledHeader>
        <Content style={{ margin: '0 16px' }}>
          <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
            <AppRouterProvider />
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
    </Layout>
  )
}
