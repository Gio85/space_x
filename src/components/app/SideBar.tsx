import React, { useState } from 'react'
import { Menu } from 'antd'
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
import Sider from 'antd/es/layout/Sider'
import { Link } from 'react-router-dom'
import { APP_ENDPOINT } from '../../types'

export const SideBar: React.FC = () => {
  const [collapsed, setCollapsed] = useState<boolean>(false)

  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={(collapsed) => setCollapsed(collapsed)}
      style={{ paddingTop: '10vh' }}
    >
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
        <Menu.Item key="5" icon={<DingtalkOutlined />}>
          <Link to={APP_ENDPOINT.DRAGONS}>Dragons</Link>
        </Menu.Item>
        <Menu.Item key="6" icon={<ExpandOutlined />}>
          <Link to={APP_ENDPOINT.LANDPADS}>Landpads</Link>
        </Menu.Item>
        <Menu.Item key="7" icon={<ToTopOutlined />}>
          <Link to={APP_ENDPOINT.LAUNCHES}>Launches</Link>
        </Menu.Item>
        <Menu.Item key="8" icon={<UploadOutlined />}>
          <Link to={APP_ENDPOINT.LAUNCHPADS}>Launchpads</Link>
        </Menu.Item>
        <Menu.Item key="9" icon={<SubnodeOutlined />}>
          <Link to={APP_ENDPOINT.PAYLOADS}>Payloads</Link>
        </Menu.Item>
        <Menu.Item key="10" icon={<CarOutlined />}>
          <Link to={APP_ENDPOINT.ROADSTER}>Roadster Info</Link>
        </Menu.Item>
        <Menu.Item key="11" icon={<CompassOutlined />}>
          <Link to={APP_ENDPOINT.SHIPS}>Ships</Link>
        </Menu.Item>
      </Menu>
    </Sider>
  )
}
