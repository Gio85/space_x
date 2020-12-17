import { Layout, Menu } from 'antd'
import {
  AndroidOutlined,
  BarsOutlined,
  CarOutlined,
  CompassOutlined,
  DingtalkOutlined,
  ExpandOutlined,
  RocketOutlined,
  SubnodeOutlined,
  TeamOutlined,
  ToTopOutlined,
  UploadOutlined
} from '@ant-design/icons'
import React, { useState } from 'react'
import 'antd/dist/antd.css'
import { AppRouterProvider } from './providers/Router'
import styled from '@emotion/styled'
import { AppStoreProvider } from './providers/Store'

const { Header, Content, Footer, Sider } = Layout

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
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
          <Menu.Item key="1" icon={<BarsOutlined />}>
            Company Info
          </Menu.Item>
          <Menu.Item key="2" icon={<AndroidOutlined />}>
            Capsules
          </Menu.Item>
          <Menu.Item key="3" icon={<RocketOutlined />}>
            Rockets
          </Menu.Item>
          <Menu.Item key="4" icon={<TeamOutlined />}>
            Crew
          </Menu.Item>
          <Menu.Item key="5" icon={<DingtalkOutlined />}>
            Dragons
          </Menu.Item>
          <Menu.Item key="6" icon={<ExpandOutlined />}>
            Landpads
          </Menu.Item>
          <Menu.Item key="7" icon={<ToTopOutlined />}>
            Launches
          </Menu.Item>
          <Menu.Item key="8" icon={<UploadOutlined />}>
            Launchpads
          </Menu.Item>
          <Menu.Item key="9" icon={<SubnodeOutlined />}>
            Payloads
          </Menu.Item>
          <Menu.Item key="10" icon={<CarOutlined />}>
            Roadster Info
          </Menu.Item>
          <Menu.Item key="11" icon={<CompassOutlined />}>
            Ships
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <StyledHeader className="site-layout-background">SpaceX News</StyledHeader>
        <Content style={{ margin: '0 16px' }}>
          <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
            <AppStoreProvider>
              <AppRouterProvider />
            </AppStoreProvider>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
    </Layout>
  )
}
