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
    <Sider collapsible collapsed={collapsed} onCollapse={(collapsed) => setCollapsed(collapsed)}>
      <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
        <Menu.Item key="1" icon={<BarsOutlined />}>
          <Link to={APP_ENDPOINT.HOME}>Company Info</Link>
        </Menu.Item>
        <Menu.Item key="2" icon={<AndroidOutlined />}>
          <Link to={APP_ENDPOINT.CAPSULES}>Capsules</Link>
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
  )
}
