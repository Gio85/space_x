import React from 'react'
import { Menu } from 'antd'
import { AndroidOutlined, BarsOutlined, RocketOutlined, TeamOutlined } from '@ant-design/icons'
import Sider from 'antd/es/layout/Sider'
import { Link } from 'react-router-dom'
import { APP_ENDPOINT } from '../../types'

export const SideBar: React.FC = () => {
  return (
    <Sider style={{ paddingTop: '8vh' }}>
      <Menu theme="dark" mode="inline">
        <Menu.Item key="1" icon={<BarsOutlined />}>
          <Link to={APP_ENDPOINT.HOME}>Company Info</Link>
        </Menu.Item>
        <Menu.Item key="2" icon={<AndroidOutlined />}>
          <Link to={APP_ENDPOINT.CAPSULES}>Capsules</Link>
        </Menu.Item>
        <Menu.Item key="3" icon={<RocketOutlined />}>
          <Link to={APP_ENDPOINT.ROCKETS}>Rockets</Link>
        </Menu.Item>
        <Menu.Item key="4" icon={<TeamOutlined />}>
          <Link to={APP_ENDPOINT.CREW}>Crew</Link>
        </Menu.Item>
      </Menu>
    </Sider>
  )
}
